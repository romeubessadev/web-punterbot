import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AtualizarDados, CriarUsuarioRequest, Usuario, UsuarioForm, UsuarioService} from '../../../../auth/services/usuario.service';
import {ButtonFactory} from '../../../../../components/button/button.component';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit, OnDestroy {
  private _sub: Subscription;

  usuario: Usuario;

  btnSalvar = ButtonFactory.block('Salvar Usuário', 'success');
  btnNovo = ButtonFactory.block('Gravar', 'success');

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
    this._sub = this.activatedRoute.params.subscribe(value => {
      const usuarioId = value.id;
      if (usuarioId) {
        this.carregar(usuarioId);
      } else {
        this.usuario = {
          stringId: null,
          plano: 'PLANO_GRATIS',
          contato: null,
          dataPrimeiroAcesso: null,
          email: null,
          nome: null,
          primeiroNome: null,
          segundoNome: null,
        };
      }
    });
  }

  ngOnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  private carregar(usuarioId: any) {
    this.usuarioService.buscar(usuarioId).subscribe(value => {
      this.usuario = value;
    });
  }

  salvar(form: UsuarioForm) {
    let usuario: AtualizarDados = form.getValue();
    this.usuarioService.atualizarDados(usuario).subscribe((v) => this.onFinish(v));
  }

  criarUsuario(form: UsuarioForm) {
    let request: CriarUsuarioRequest = form.getValue();
    this.usuarioService.criarUsuario(request).subscribe((v) => this.onFinish(v));
  }

  onFinish(user: any) {
    this.router.navigate(['/admin/usuario/editar/', user.id]);
  }
}
