import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Liga, LigaForm, LigaService, Temporada} from '../../../services/liga.service';
import {Subscription} from 'rxjs';
import {ButtonFactory} from '../../../../../components/button/button.component';
import {GridColuna} from '../../../../../components/grid/grid.component';

@Component({
  selector: 'app-liga-detalhe',
  templateUrl: './liga-detalhe.component.html',
  styleUrls: ['./liga-detalhe.component.css']
})
export class LigaDetalheComponent implements OnInit, OnDestroy {
  private _sub: Subscription;
  liga: Liga;
  temporadaAtual: Temporada;
  ligaForm = new LigaForm();

  btnSalvar = ButtonFactory.block('Salvar Liga', 'primary', 'submit');
  colunasTemporadas: GridColuna[] = [
    {
      name: 'id',
      label: 'Cod.'
    },
    {
      name: 'nome',
      label: 'Nome'
    },
    {
      name: 'atualTemporada',
      label: 'Atual'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute, private ligaService: LigaService) {
  }

  ngOnInit(): void {
    this._sub = this.activatedRoute.params.subscribe(value => {
      const ligaId = value.id;
      if (ligaId) {
        this.carregarLiga(ligaId);
      }
    });
  }

  ngOnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  private carregarLiga(ligaId: number) {
    this.ligaService.buscar(ligaId).subscribe(value => {
      this.liga = value;
      this.liga.temporadas = this.liga.temporadas.sort((a, b) => {
        if (a.id === b.id) {
          return 0;
        }
        if (a.id >= b.id) {
          return -1;
        }

        return 1;
      });
      this.ligaForm.set(this.liga);
      this.temporadaAtual = this.liga.temporadas.find(t => t.atualTemporada);
    });

  }

  salvar() {
    let atualizarNome = this.ligaForm.getValue();
    atualizarNome.id = this.liga.id;
    this.ligaService.atualizar(atualizarNome).subscribe(value => {

    });
  }
}
