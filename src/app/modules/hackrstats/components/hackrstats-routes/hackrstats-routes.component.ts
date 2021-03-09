import {Component, OnInit} from '@angular/core';
import {CardRoute, CardRouteFactory} from '../../../../components/card-stats/card-stats.component';

@Component({
  selector: 'app-hackrstats-routes',
  templateUrl: './hackrstats-routes.component.html',
  styleUrls: ['./hackrstats-routes.component.css']
})
export class HackrstatsRoutesComponent implements OnInit {
  cards: CardRoute[] = [
    CardRouteFactory.create('Ao Vivo', '7', '/jogos-ao-vivo', 'gradient-green', 'ni ni-tv-2'),
    CardRouteFactory.create('Hoje', '15', '/jogos-de-hoje', 'gradient-info', 'far fa-calendar-check'),
    CardRouteFactory.create('Amanhã', '14', '/jogos-de-amanha', 'gradient-red', 'ni ni-calendar-grid-58'),
    CardRouteFactory.create('Robô', 'Ativo', '/meu-robo', 'gradient-orange', 'fab fa-reddit-alien'),
    CardRouteFactory.create('Grupo Exclusivo', 'Ativo', '/grupo-exclusivo', 'gradient-orange', 'fas fa-gem'),
    CardRouteFactory.create('Dúvidas e Suporte', 'Ativo', '/duvidas-suporte', 'gradient-orange', 'fas fa-comment-dots'),
    CardRouteFactory.create('Estatísticas', 'Ativo', '/tutorial', 'gradient-orange', 'fas fa-comment-dots')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
