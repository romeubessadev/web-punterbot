import {Component, Input, OnInit} from '@angular/core';
import {UltimosJogos} from '../../../../variables/jogo.type';
import {GridAcao, GridColuna} from '../../../../components/grid/grid.component';


@Component({
  selector: 'app-ultimos-jogos',
  templateUrl: './ultimos-jogos.component.html',
  styleUrls: ['./ultimos-jogos.component.css']
})
export class UltimosJogosComponent implements OnInit {
  @Input() ultimosJogos: UltimosJogos[];

  colunas: GridColuna[] = [
    {
      label: 'Data',
      name: 'data'
    },
    {
      label: 'Casa',
      name: 'timeCasaNome'
    },
    {
      label: 'Gols',
      name: 'gols'
    },
    /*
    {
      label: 'Cantos',
      name: 'cantos'
    },
     */
    {
      label: 'Fora',
      name: 'timeVisitaNome'
    }
  ]

  acoes: GridAcao[] = [
    {icon: 'fas fa-search', label: 'Ver detalhe', click: this.abrirModal.bind(this)}
  ];

  ngOnInit(): void {
  }

  public abrirModal(row, index) {
    console.log(row);
  }
}
