import {Component, OnInit, ViewChild} from '@angular/core';
import {GridAcao, GridColuna} from '../../../../components/grid/grid.component';
import {FormControl, FormGroup} from '@angular/forms';
import {LigaService} from '../../services/liga.service';
import {Router} from '@angular/router';
import {InputFactory} from '../../../../components/input/input.component';
import {GridPaginateComponent} from '../../../../components/grid-paginate/grid-paginate.component';
import {ButtonFactory} from '../../../../components/button/button.component';

@Component({
  selector: 'app-liga-pesquisar',
  templateUrl: './liga-pesquisar.component.html',
  styleUrls: ['./liga-pesquisar.component.css']
})
export class LigaPesquisarComponent implements OnInit {

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
    },
    {
      label: 'Temporadas',
      name: 'temporadas',
    }
  ];

  pesquisa = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null),
    logo: new FormControl(null),
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

  nome = InputFactory.create('nome', 'Nome', 'text', 'Informe o nome da liga').onlyLetter();
  id = InputFactory.create('id', 'Código', 'number', 'Informe o código da liga');

  pesquisar = ButtonFactory.createPesquisar();

  @ViewChild(GridPaginateComponent, {static: true}) gridPaginate: GridPaginateComponent;

  constructor(
    private router: Router,
    public ligaService: LigaService) {
  }

  ngOnInit(): void {
    this.ligaService.buscarQuantidade().subscribe(qtd => {
      this.qtd = qtd;
    });
  }

  editar(liga, index) {
    this.router.navigate(['/admin/liga/editar', liga.id]);
  }

}
