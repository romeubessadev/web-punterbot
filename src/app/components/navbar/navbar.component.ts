import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {AutenticacaoService} from '../../modules/auth/services/autenticacao.service';
import {Subscription} from 'rxjs';
import {PaginaService} from '../../services/pagina.service';
import {InfoPagina} from '../../factories/route-factory';
import {Usuario} from '../../modules/auth/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  focus: boolean;

  private _usuario: Usuario;
  private _pagina: InfoPagina;

  private _subs: Subscription[] = [];

  logoUrl: string;

  constructor(private router: Router,
              private paginaService: PaginaService,
              private _autenticacaoService: AutenticacaoService) {

    const subTitle = this.paginaService.pagina.subscribe(value => {
      this._pagina = value;
    });
    this._subs.push(subTitle);
  }

  ngOnInit() {
    const subUser = this._autenticacaoService.usuarioLogado.subscribe(value => {
      this._usuario = value;
      this.logoUsuario();
    });
    this._subs.push(subUser);
  }

  ngOnDestroy(): void {
    this._subs.forEach(value => value.unsubscribe());
  }

  get autenticacaoService(): AutenticacaoService {
    return this._autenticacaoService;
  }

  get usuario(): Usuario {
    return this._usuario;
  }

  get pagina(): InfoPagina {
    return this._pagina;
  }

  logoUsuario() {
    if (this._usuario?.logo) {
      const base64 = 'data:application/octet-stream;base64,' + this._usuario.logo;
      fetch(base64)
        .then(res => {
          res.blob().then(blob => this.logoUrl = URL.createObjectURL(blob));
        });
    }
    this.logoUrl = 'assets/img/no_picture.png';
  }
}
