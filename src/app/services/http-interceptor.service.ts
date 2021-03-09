import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError(err => {

        if (err.status === 0) {
          console.error({
            status: 'NO_CONNECTION',
            detalhe: 'Não foi possível acessar o servidor'
          });
        } else if (err.status === 401) {
          console.error(err.error);
          this.logout();
        } else if (err.status) {
          let error: any = err.error;

          if (error.status && error.detalhe) {
            console.error(err.error);
          }
        }
        const error = err.error || {mensagem: 'error status ' + err.statusText};
        return throwError(error);
      }));
  }

  private logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/seguranca/login');
  }

}

