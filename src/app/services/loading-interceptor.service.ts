import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {HackrstatsConfiguracao} from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  private readonly URL_IGNORE: string[] = HackrstatsConfiguracao.urlLoadingIgnore;

  constructor(
    private activatedRoute: ActivatedRoute,
    private loadingListener: LoadingListener) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.ignoreUrl(request)) {
      return next.handle(request);
    } else {
      this.loadingListener.setLoading(true);

      return next.handle(request).pipe(
        map(event => {
          return event;
        }),
        catchError(error => {
          return throwError(error);
        }),
        finalize(() => {
          this.loadingListener.setLoading(false);
        })
      );
    }
  }

  private ignoreUrl(request: HttpRequest<any>) {
    for (let ignore of this.URL_IGNORE) {
      if (request.url.includes(ignore)) {
        return true;
      }
    }
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoadingListener {

  private loading$: BehaviorSubject<boolean>;

  constructor() {
    this.loading$ = new BehaviorSubject(false);
  }

  setLoading(inFlight: boolean) {
    this.loading$.next(inFlight);
  }

  loading(): Observable<boolean> {
    return this.loading$.asObservable();
  }
}
