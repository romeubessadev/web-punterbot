import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {JogoService} from '../../../services/jogo.service';
import {Jogo, UltimosJogos} from '../../../../../variables/jogo.type';
import {SwitchFactory} from '../../../../../components/switch/switch.component';
import {Time} from '../../../services/time.service';
import {CardRoute, CardRouteFactory} from '../../../../../components/card-stats/card-stats.component';

@Component({
  selector: 'app-jogos-de-hoje-detalhe',
  templateUrl: './jogo-detalhe.component.html',
  styleUrls: ['./jogo-detalhe.component.css']
})
export class JogoDetalheComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  private _jogo: Jogo;

  jogosDaLiga = SwitchFactory.create('jogosDaLiga', 'Liga', 'Geral', 'primary');

  cards: CardRoute[] = [
    CardRouteFactory.create('Media FT', '7', '/jogos-ao-vivo', 'gradient-red', 'FT'),
    CardRouteFactory.create('Media 1º Tempo', '15', '/jogos-de-hoje', 'gradient-green', '1T'),
    CardRouteFactory.create('Media 2º Tempo', '14', '/jogos-de-amanha', 'gradient-info', '2T'),
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private jogoService: JogoService) {

  }

  ngOnInit(): void {
    this._sub = this.activatedRoute.params.subscribe(value => {
      const jogoId = value.id;
      this.carregar(jogoId);
    });
  }

  ngOnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  private carregar(jogoId: any) {
    this.jogoService.buscarPorId(jogoId).subscribe(value => {
      this._jogo = value;

      this._jogo.timeCasa.ultimosJogos.geral = this._jogo.timeCasa.ultimosJogos.geral.sort(this.ordernar);
      this._jogo.timeCasa.ultimosJogos.liga = this._jogo.timeCasa.ultimosJogos.liga.sort(this.ordernar);

      this._jogo.timeVisita.ultimosJogos.geral = this._jogo.timeVisita.ultimosJogos.geral.sort(this.ordernar);
      this._jogo.timeVisita.ultimosJogos.liga = this._jogo.timeVisita.ultimosJogos.liga.sort(this.ordernar);
    });
  }

  private ordernar(data1: UltimosJogos, data2: UltimosJogos) {
    return new Date(data2.data).getTime() - new Date(data1.data).getTime();
  }

  get casaGeralOuLiga(): UltimosJogos[] {
    if (this.jogosDaLiga.value) {
      return this._jogo.timeCasa.ultimosJogos.liga;
    } else {
      return this._jogo.timeCasa.ultimosJogos.geral;
    }
  }

  get visitaGeralOuLiga(): UltimosJogos[] {
    if (this.jogosDaLiga.value) {
      return this._jogo.timeVisita.ultimosJogos.liga;
    } else {
      return this._jogo.timeVisita.ultimosJogos.geral;
    }
  }

  get jogo(): Jogo {
    return this._jogo;
  }

  formatarTitulo(time: Time, length: number) {
    const sufixo = this.jogosDaLiga.value ? 'da Liga' : 'Geral';

    if (length > 1) {
      return time.nome + ' - ' + length + ' Últimos jogos ' + sufixo;
    } else {
      return time.nome + ' - Último jogo ' + sufixo;
    }
  }
}
