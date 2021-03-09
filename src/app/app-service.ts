import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {MensagemScope, MensagemService} from './services/mensagem.service';
import {catchError, map} from 'rxjs/operators';

export function successGlobal(msgSucesso: string, erroScope: MensagemScope = 'global'): OnResult {
  return {
    onSucess: {
      scope: 'global',
      mensagem: msgSucesso
    },
    onError: {
      scope: erroScope
    }
  };
}

export function result(msgSucesso: string, successScope: MensagemScope = 'global', erroScope: MensagemScope = 'global'): OnResult {
  return {
    onSucess: {
      scope: successScope,
      mensagem: 'Usuário Atualizado com sucesso!'
    },
    onError: {
      scope: erroScope
    }
  };
}

export class AppService {
  private readonly _httpClient: HttpClient;
  private readonly _url;

  constructor(controller: string, public mensagemService: MensagemService, httpClient: HttpClient) {
    this._httpClient = httpClient;
    this._url = environment.apiUrl + controller + '/';
  }

  public get(path: string, options?: any): Observable<any> {
    return this._httpClient.get(this._url + path, options);
  }

  public post(path: string, body: any, result?: OnResult, options?: any): Observable<any> {
    let post: Observable<any> = this._httpClient.post(this._url + path, body, options);

    if (result) {
      if (result.onSucess) {
        post = post.pipe(map(value => {
          this.onSuccess(result.onSucess.mensagem);
          return value;
        }));
      }

      if (result.onError) {
        post = post.pipe(catchError(error => this.onError(error, result.onError.scope)));
      }
    }

    return post;
  }

  public put(path: string, body: any, options?: any): Observable<any> {
    return this._httpClient.put(this._url + path, body, options);
  }

  public delete(path: string, options?: any): Observable<any> {
    return this._httpClient.delete(this._url + path, options);
  }

  onError(error: any, scope: MensagemScope = 'global') {
    this.mensagemService.custom(scope, 'danger', error.mensagem);
    return error;
  }

  onSuccess(msg: string, scope: MensagemScope = 'global') {
    this.mensagemService.custom(scope, 'success', msg);
  }
}

export interface OnResult {
  onSucess: OnSucess
  onError: OnError
}

export interface OnSucess {
  scope: MensagemScope,
  mensagem: string
}

export interface OnError {
  scope: MensagemScope,
}
