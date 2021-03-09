import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AppService} from '../../../app-service';
import {map} from 'rxjs/operators';
import {Usuario} from './usuario.service';
import {MensagemService} from '../../../services/mensagem.service';


@Injectable({providedIn: 'root'})
export class AutenticacaoService extends AppService {
  public static readonly PLANO_GRATIS = 'PLANO_GRATIS';
  public static readonly MENSAL = 'MENSAL';
  public static readonly ADMINISTRADOR = 'ADMINISTRADOR';

  private _currentUserSubject: BehaviorSubject<Usuario>;
  private _currentUser: Observable<Usuario>;

  constructor(private _router: Router, public mensagemService: MensagemService, httpClient: HttpClient) {
    super('autenticacao', mensagemService, httpClient);

    this._currentUserSubject = new BehaviorSubject<Usuario>(AutenticacaoService.UserLocalStorage());
    this._currentUser = this._currentUserSubject.asObservable();

    // caso tenha token na localstorage carregar o usuario logado
    if (this.logado) {
      this.autenticate(this.token).subscribe();
    }
  }

  get logado() {
    return localStorage.getItem('token') != null;
  }

  autenticate(token: any) {
    localStorage.setItem('token', token);
    return this.buscarUsuarioLogado();
  }

  buscarUsuarioLogado() {
    return this.get('logado').pipe(
      map(user => {
        this._currentUserSubject.next(user);
        localStorage.setItem('usuario', JSON.stringify(user));
      })
    );
  }

  get usuarioLogado(): Observable<Usuario> {
    return this._currentUser;
  }

  public static UserLocalStorage(): Usuario {
    return JSON.parse(localStorage.getItem('usuario'));
  }

  get token() {
    return localStorage.getItem('token');
  }

  public static UsuarioAdministrador(): boolean {
    return AutenticacaoService.PossuiPermissao(AutenticacaoService.ADMINISTRADOR);
  }

  public static UsuarioPlanoGratis(): boolean {
    return AutenticacaoService.PLANO_GRATIS == AutenticacaoService.UserLocalStorage()?.plano;
  }

  public static UsuarioPlanoMes(): boolean {
    return AutenticacaoService.MENSAL == AutenticacaoService.UserLocalStorage()?.plano;
  }

  public static PossuiPermissao(role: string) {
    let usuario = AutenticacaoService.UserLocalStorage();

    if (usuario && usuario.roles) {
      return usuario.roles.includes(role);
    }
    return false;
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this._currentUserSubject.next(null);
    this._router.navigateByUrl('/seguranca/login');
  }

  public efetuarLogin(request: LoginRequest): Observable<LoginResponse> {
    return new Observable<LoginResponse>(subscriber => {

      this.post('login', request)
        .subscribe((response: LoginResponse) => {
          if (response && response.token) {
            this.autenticate(response.token).subscribe(value => {
              subscriber.next(response);
            });
          } else {
            subscriber.next(null);
          }
        }, error => {
          subscriber.next(null);
        });
    });
  }

}

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  solicitaSenha: boolean;
}
