import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-route',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.css']
})
export class CardStatsComponent implements OnInit {
  @Input() card: CardRoute;

  constructor() {
  }

  ngOnInit(): void {
  }

}

export class CardRoute {
  titulo: string;
  sub: string;
  rota: string;
  cor: ColorCard;
  icone: string;
  label: string;
  ready: boolean;

  constructor(titulo: string, sub: string, rota: string, cor: ColorCard, icone: string, label: string) {
    this.titulo = titulo;
    this.sub = sub;
    this.rota = rota;
    this.cor = cor;
    this.icone = icone;
    this.label = label;
  }
}

export class CardRouteFactory {
  static create = (titulo: string, sub: string, rota: string, cor: ColorCard = 'info', icone: string = null, label: string = 'Ver Mais'): CardRoute => new CardRoute(titulo, sub, rota, cor, icone, label);
}

export type ColorCard =
  'blue' |
  'green' |
  'orange' |
  'info' |
  'success' |
  'danger' |
  'yellow' |
  'warning' |
  'gradient-green' |
  'gradient-info' |
  'gradient-red' |
  'gradient-orange'
  ;
