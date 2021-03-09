import {Component, OnInit} from '@angular/core';
import {HackrstatsConfiguracao, MenuLink} from '../../app-config';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './hackrstats-base.component.html',
  styleUrls: ['./hackrstats-base.component.scss']
})
export class HackrstatsBaseComponent implements OnInit {
  private _menuItems: MenuLink[];
  private _socialItems: MenuLink[];
  private _robotItems: MenuLink[];

  constructor() {
  }

  ngOnInit() {
    this._menuItems = HackrstatsConfiguracao.menu;
    this._socialItems = HackrstatsConfiguracao.social;
    this._robotItems = HackrstatsConfiguracao.robo;
  }


  get menuItems(): MenuLink[] {
    return this._menuItems;
  }

  get socialItems(): MenuLink[] {
    return this._socialItems;
  }

  get robotItems(): MenuLink[] {
    return this._robotItems;
  }
}
