import {Component, OnDestroy} from '@angular/core';
import {AutenticacaoService} from '../../services/autenticacao.service';
import {Subscription} from 'rxjs';
import {FormGroup, Validators} from '@angular/forms';
import {InputFactory} from '../../../../components/input/input.component';
import {ButtonFactory} from '../../../../components/button/button.component';
import {Router} from '@angular/router';
import {Usuario, UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-solicita-senha',
  templateUrl: './solicita-senha.component.html',
  styleUrls: ['./solicita-senha.component.css']
})
export class SolicitaSenhaComponent implements OnDestroy {
  private _usuario: Usuario;
  private _sub: Subscription;

  confirmaSenhaForm = new FormGroup({});

  inputSenha = InputFactory.create('senha', 'Digite sua senha','password').required();

  inputConfirmaSenha = InputFactory.create('confirmaSenha', 'Repetir a senha', 'password')
    .setInfo('Mínimo 7 caracteres com uma letra e número')
    .required() ;

  btnAtivar = ButtonFactory.block('Ativar', 'success', 'button').addClass(' btn-sm rounded-0');

  constructor(
    private router: Router,
    private _usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService) {

    this._sub = this.autenticacaoService.usuarioLogado.subscribe(value => {
      if (!value || !value.solicitaNovaSenha) {
        this.router.navigateByUrl('/auth');
      }
      this._usuario = value;
    });
  }

  get notEquals(): boolean {
    return this.inputSenha.value != this.inputConfirmaSenha.value;
  }

  ngOnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  ativar() {
    this._usuarioService.alterarSenha(this.confirmaSenhaForm.getRawValue()).subscribe(value => {
      if ('OK' == value) {
        this.autenticacaoService.buscarUsuarioLogado().subscribe(value1 => {
          this.router.navigate(['/']);
        })
      }
    });
  }

}
