import {Component, OnInit} from '@angular/core';
import {CardRoute, CardRouteFactory, ColorCard} from '../../../../components/card-stats/card-stats.component';
import {UsuarioService} from '../../../auth/services/usuario.service';
import {LigaService} from '../../services/liga.service';
import {TimeService} from '../../services/time.service';

@Component({
  selector: 'app-admin-routes',
  templateUrl: './admin-routes.component.html',
  styleUrls: ['./admin-routes.component.css']
})
export class AdminRoutesComponent implements OnInit {

  cards: CardRoute[] = [
    CardRouteFactory.create('Usuários', '7', '/admin/usuarios', 'blue', 'ni ni-sound-wave'),
    CardRouteFactory.create('Ligas', '15', '/admin/ligas', 'orange', 'ni ni-calendar-grid-58'),
    CardRouteFactory.create('Times', 'Profissional', '/admin/times', 'green', 'ni ni-spaceship'),
  ];

  constructor(private usuarioService: UsuarioService,
              private ligaService: LigaService,
              private timeService: TimeService) {
  }

  ngOnInit(): void {

  }
}
