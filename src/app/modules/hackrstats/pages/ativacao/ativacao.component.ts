import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AtualizarDados, Usuario, UsuarioForm, UsuarioService} from '../../../auth/services/usuario.service';
import {AutenticacaoService} from '../../../auth/services/autenticacao.service';
import {Subscription} from 'rxjs';
import {ButtonFactory} from '../../../../components/button/button.component';

@Component({
  selector: 'app-ativacao',
  templateUrl: './ativacao.component.html',
  styleUrls: ['./ativacao.component.scss']
})
export class AtivacaoComponent implements OnInit {
  private _usuario: Usuario;
  private _sub: Subscription;

  btnAtivar = ButtonFactory.block('Ativar Perfil', 'success').addClass('btn-sm rounded-0');

  constructor(
    private router: Router,
    private _usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService) {

    this._sub = this.autenticacaoService.usuarioLogado.subscribe(value => {
      if (!value || value.dataPrimeiroAcesso) {
        this.router.navigateByUrl('/');
      }
      this._usuario = value;
    });
  }

  ngOnInit() {
  }

  ativar(usuarioForm: UsuarioForm) {
    let ativacaoRequest: AtualizarDados = usuarioForm.getValue();
    this._usuarioService.ativar(ativacaoRequest).subscribe(value => {
      this.autenticacaoService.buscarUsuarioLogado().subscribe(value1 => {
        this.router.navigate(['/']);
      });
    });
  }

  get usuario(): Usuario {
    return this._usuario;
  }
}
