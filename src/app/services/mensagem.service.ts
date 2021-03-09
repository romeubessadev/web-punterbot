import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private _subjectMensagem: Subject<Mensagem>;
  private _mensagens: Observable<Mensagem>;

  constructor() {
    this._subjectMensagem = new Subject<Mensagem>();
    this._mensagens = this._subjectMensagem.asObservable();
  }

  custom(scope: MensagemScope, tipo: MensagemTipo, detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem(tipo, detalhe, titulo, icone, scope);
  }

  default(detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem('default', detalhe, titulo, icone);
  }

  primary(detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem('primary', detalhe, titulo, icone);
  }

  secondary(detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem('secondary', detalhe, titulo, icone);
  }

  info(detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem('info', detalhe, titulo, icone);
  }

  success(detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem('success', detalhe, titulo, icone);
  }

  danger(detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem('danger', detalhe, titulo, icone);
  }

  warning(detalhe: string, titulo?: string, icone?: string) {
    this.nextMensagem('warning', detalhe, titulo, icone);
  }

  private nextMensagem(tipo: MensagemTipo, detalhe: string, titulo?: string, icone?: string, scope: MensagemScope = 'global') {
    this._subjectMensagem.next({tipo, detalhe, titulo, icone, scope});
  }

  get mensagem() {
    return this._mensagens;
  }
}

export type Mensagem = {
  scope: MensagemScope;
  tipo: MensagemTipo;
  detalhe: string;
  icone?: string;
  titulo?: string;
};
export type MensagemScope = string | 'global';
export type MensagemTipo = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'danger' | 'warning';
