import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuLink} from '../../app-config';
import {AutenticacaoService} from '../../modules/auth/services/autenticacao.service';
import {Usuario} from '../../modules/auth/services/usuario.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: MenuLink[];
  @Input() socialItems: MenuLink[];
  @Input() robotItems: MenuLink[];
  public isCollapsed = true;

  private _usuario: Usuario;
  private subUser: Subscription;

  logoUrl: string;

  constructor(private router: Router, private _autenticacaoService: AutenticacaoService) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

    this.subUser = this._autenticacaoService.usuarioLogado.subscribe(value => {
      this._usuario = value;
      this.logoUsuario();
    });
  }

  get autenticacaoService(): AutenticacaoService {
    return this._autenticacaoService;
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
