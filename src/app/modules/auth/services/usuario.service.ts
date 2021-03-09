import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';
import {InputFactory} from '../../../components/input/input.component';
import {FormGroup} from '@angular/forms';
import {IFiltrar} from '../../../components/grid-paginate/grid-paginate.component';
import {CrudService} from '../../../services/crud.service';
import {catchError} from 'rxjs/operators';
import {MensagemService} from '../../../services/mensagem.service';
import {successGlobal} from '../../../app-service';
import {SelectFactory, SelectOption} from '../../../components/select/select.component';
import {Observable} from 'rxjs';
import {SwitchFactory} from '../../../components/switch/switch.component';

@Injectable({providedIn: 'root'})
export class UsuarioService extends CrudService<Usuario, string> implements IFiltrar {

  constructor(private _router: Router, public mensagemService: MensagemService, httpClient: HttpClient) {
    super('usuario', mensagemService, httpClient);
  }

  alterarSenha(request: AlterarSenha) {
    return this.put('alterarSenha', request)
      .pipe(catchError(error => this.onError(error)));
  }

  ativar(request: AtualizarDados) {
    return this.post('ativar', request)
      .pipe(catchError(error => this.onError(error)));
  }

  atualizarDados(request: AtualizarDados) {
    return this.post('atualizarDados', request, successGlobal('Usuário Atualizado com sucesso!', 'usuario'));
  }

  criarUsuario(request: CriarUsuarioRequest) {
    return this.post('criar', request, successGlobal('Usuário Criado com sucesso!', 'usuario'));
  }

  buscarPlanos(): Observable<SelectOption[]> {
    return this.get('planos');
  }


}

export interface AlterarSenha {
  senha: string;
  confirmaSenha: string;
}

export interface AtualizarDados {
  nome: string;
  primeiroNome: string;
  segundoNome: string;
  telegram: string;
  logo: string;
  email: string;
}

export abstract class FormDefault<T> {
  private _form = new FormGroup({});

  abstract set(t: T);

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

  getValue(): any {
    return this._form.getRawValue();
  }

  get invalid(): boolean {
    return this._form.invalid;
  }
}

export class UsuarioForm extends FormDefault<Usuario> {

  constructor(private usuarioService: UsuarioService) {
    super();
  }


  nome = InputFactory.create('nome', 'Usuário')
    .required()
    .onlyLetter();

  primeiroNome = InputFactory.create('primeiroNome', 'Primeiro Nome')
    .required()
    .onlyLetter();

  segundoNome = InputFactory.create('segundoNome', 'Segundo Nome')
    .required()
    .onlyLetter();

  codigoIndicacao = InputFactory.create('codigoIndicacao', 'Código Indicação')
    .required();

  email = InputFactory.create('email', 'E-mail', 'email').email().required();
  contato = InputFactory.create('contato', 'Contato').telefone().required();
  plano = SelectFactory.createObservable('plano', this.usuarioService.buscarPlanos(), 'Plano');
  imagem: Imagem = {};

  set(t: Usuario) {
    this.nome.value = t.nome;
    this.primeiroNome.value = t.primeiroNome;
    this.segundoNome.value = t.segundoNome;
    this.email.value = t.email;
    this.contato.value = t.contato;
    this.plano.value = t.plano;
    this.codigoIndicacao.value = t.codigoIndicacao;

    if (t.logo) {
      const base64 = 'data:application/octet-stream;base64,' + t.logo;
      fetch(base64)
        .then(res => {
          res.blob().then(blob => this.imagem.url = URL.createObjectURL(blob));
        });
    }
  }

  getValue(): any {
    const usuario = super.getValue();
    if (this.imagem.base64) {
      usuario.logo = this.imagem.base64;
    }
    return usuario;
  }

  get getLogoOrDefault() {
    if (this.imagem.url) {
      return this.imagem.url;
    }
    return 'assets/img/no_picture.png';
  }
}

export interface Imagem {
  base64?: string;
  url?: string;
}

export interface Usuario {
  stringId: string;
  nome: string;
  primeiroNome: string;
  segundoNome: string;
  email: string;
  senha?: string;
  senhaReset?: string;
  contato: string;
  logo?: string;
  bloqueado?: boolean;
  plano?: string;
  planoLabel?: string;
  codigoIndicacao?: string;
  dataPrimeiroAcesso?: Date;
  solicitaNovaSenha?: boolean;
  roles?: string[];
}

export interface CriarUsuarioRequest {
  nome: string;
  primeiroNome: string;
  segundoNome: string;
  email: string;
  telefone: string;
  codigoIndicacao: string;
  plano: string;
}
