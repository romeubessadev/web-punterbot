import {Component, OnInit, ViewChild} from '@angular/core';
import {GridAcao, GridColuna} from '../../../../components/grid/grid.component';
import {FormControl, FormGroup} from '@angular/forms';
import {TimeService} from '../../services/time.service';
import {InputFactory} from '../../../../components/input/input.component';
import {ButtonFactory} from '../../../../components/button/button.component';
import {GridPaginateComponent} from '../../../../components/grid-paginate/grid-paginate.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-time-pesquisar',
  templateUrl: './time-pesquisar.component.html',
  styleUrls: ['./time-pesquisar.component.css']
})
export class TimePesquisarComponent implements OnInit {
  colunas: GridColuna[] = [
    {
      label: 'Código',
      name: 'id',
    },
    {
      label: 'Logo',
      name: 'logo',
    },
    {
      label: 'Nome',
      name: 'nome',
    }
  ];

  pesquisa = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null),
    logo: new FormControl(null),
    twitter: new FormControl(null),
    anoFundado: new FormControl(null),
  });
  qtd: number;

  acoes: GridAcao[] = [
    {
      label: 'Editar',
      click: this.editar.bind(this),
      icon: 'ni ni-settings',
      color: 'primary'
    }
  ];

  id = InputFactory.create('id', 'Código', 'number', 'Informe o código do time');
  nome = InputFactory.create('nome', 'Nome', 'text', 'Informe o nome do time').onlyLetter();
  anoFundado = InputFactory.create('anoFundado', 'Ano Fundado', 'number', 'Informe o ano fundado do time');

  pesquisar = ButtonFactory.createPesquisar();

  @ViewChild(GridPaginateComponent, {static: true}) gridPaginate: GridPaginateComponent;

  constructor(public timeService: TimeService, private router: Router) {
  }

  ngOnInit(): void {
    this.timeService.buscarQuantidade().subscribe(qtd => {
      this.qtd = qtd;
    });
  }

  editar(time, index) {
    this.router.navigate(['/admin/time/editar', time.id]);
  }
}
