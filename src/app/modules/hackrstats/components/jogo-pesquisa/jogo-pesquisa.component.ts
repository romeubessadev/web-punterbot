import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PesquisaJogoPorLiga} from '../../../../variables/jogo.type';
import {GridColuna} from '../../../../components/grid/grid.component';
import {JogoService, TipoJogoPesquisa} from '../../services/jogo.service';
import {SelectOption} from '../../../../components/select/select.component';
import {ButtonFactory} from '../../../../components/button/button.component';
import {FiltroResultado} from '../filtro-estatistica/filtro-estatistica.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jogo-pesquisa',
  templateUrl: './jogo-pesquisa.component.html',
  styleUrls: ['./jogo-pesquisa.component.css']
})
export class JogoPesquisaComponent implements OnInit {
  @Input() pesquisa: TipoJogoPesquisa;
  @ViewChild('escanteio') filtroEscateio: FiltroResultado;
  @ViewChild('gol') filtroGol: FiltroResultado;
  jogosPorLiga: PesquisaJogoPorLiga[];

  colunas: GridColuna[] = [
    {
      name: 'data',
      label: 'Horário'
    },
    {
      name: 'timeCasa',
      label: 'Time da Casa'
    },
    {
      name: 'timeVisita',
      label: 'Time Visitante'
    },
    {
      name: 'situacao',
      label: 'Situação'
    },
    {
      name: 'estatisticas',
      label: 'Estatísticas'
    }
  ];

  btnPesquisa = ButtonFactory.createPesquisar();

  escanteios: SelectOption[];
  gols: SelectOption[];

  constructor(
    private router: Router,
    private jogoService: JogoService) {
  }

  ngOnInit(): void {
    this.pesquisar();
    this.jogoService.buscarFiltro().subscribe(value => {
      this.escanteios = value.escanteio;
      this.gols = value.gol;
    });
  }

  private pesquisar() {
    let request = this.createRequest();

    this.jogoService.buscarJogoAgrupado(request, this.pesquisa, 0, 100)
      .subscribe(response => {
        this.jogosPorLiga = response;
      });
  }

  private createRequest() {
    let request = {
      escanteios: [],
      gols: []
    };
    let escanteio = this.filtroEscateio?.get();
    let gol = this.filtroGol?.get();

    if (escanteio) {
      request.escanteios.push(escanteio);
    }

    if (gol) {
      request.gols.push(gol);
    }

    return request;
  }

  irParaJogo(jogo) {
    this.router.navigate(['/jogo', jogo.id]);
  }
}

