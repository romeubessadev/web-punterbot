import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutenticacaoService} from '../../../auth/services/autenticacao.service';
import {of, Subscription} from 'rxjs';
import {AtualizarDados, Usuario, UsuarioForm, UsuarioService} from '../../../auth/services/usuario.service';
import {ButtonFactory} from '../../../../components/button/button.component';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit, OnDestroy {
  private _usuario: Usuario;
  private _sub: Subscription;

  btnSalvar = ButtonFactory.block('Salvar Perfil', 'success').addClass('btn-sm rounded-0');

  constructor(
    private usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService) {
    this._sub = autenticacaoService.usuarioLogado.subscribe(value => {
      this._usuario = value;
    });
  }

  ngOnInit(): void {

  }

  salvar(usuarioForm: UsuarioForm) {
    let ativacaoRequest: AtualizarDados = usuarioForm.getValue();
    this.usuarioService.atualizarDados(ativacaoRequest).subscribe(value => {
    });
  }

  ngOnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }


  get usuario(): Usuario {
    return this._usuario;
  }
}
