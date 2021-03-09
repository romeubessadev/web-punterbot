import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Observable, Subject} from 'rxjs';
import {InfoPagina} from '../factories/route-factory';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  private _atualPagina: InfoPagina;

  private _pageSubject = new Subject<InfoPagina>();
  private _pageObservable = this._pageSubject.asObservable();

  constructor(private _title: Title) {
  }


  get atualPagina(): InfoPagina {
    return this._atualPagina;
  }

  set atualPagina(value: InfoPagina) {
    this._atualPagina = value;
    this._title.setTitle(this._atualPagina.titulo);
    this._pageSubject.next(this._atualPagina);
  }

  get pagina(): Observable<InfoPagina> {
    return this._pageObservable;
  }

}
