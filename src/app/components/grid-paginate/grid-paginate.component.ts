import {Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {GridAcao, GridColuna, GridTemplateDirective} from '../grid/grid.component';

@Component({
  selector: '	app-grid-paginate',
  templateUrl: './grid-paginate.component.html',
  styleUrls: ['./grid-paginate.component.scss']
})
export class GridPaginateComponent implements OnInit {

  /**
   * As Colunas Para repassar no componente app-grid
   */
  @Input() colunas: GridColuna[] = [];

  /**
   * Acoes Para repassar no componente app-grid
   */
  @Input() acoes: GridAcao[] = [];

  /**
   * Se add a classe table-hover na table,
   * default true
   */
  @Input() tableHover: boolean = true;

  /**
   * Impl do Filtrar retornando uma Promise<FiltrarResponse>
   */
  @Input() service: IFiltrar;

  /**
   * FormGroup para passar como request
   */
  @Input() form: FormGroup;

  /**
   * Caso Verdadeiro ao criar o componente ele efetua a busca
   */
  @Input() carregar: boolean = true;

  @ContentChild('subRow', {static: true}) subRowPaginate: TemplateRef<any>;

  @ContentChildren(GridTemplateDirective) gridTemplate: QueryList<GridTemplateDirective>;

  carregando = false;
  registros: any[] = null;

  pagina: number = 1;
  tamanhoPagina: number = 10;
  total: number;

  qtdPaginas: number;


  constructor() {
  }

  ngOnInit() {
    if (this.carregar) {
      this.buscarRegistros();
    }
  }

  public buscarRegistros() {
    this.carregando = true;
    this.service.pesquisar(this.request(), this.pagina - 1, this.tamanhoPagina).subscribe(response => {
      this.carregando = false;
      this.total = response.totalDeRegistros;
      this.qtdPaginas = response.totalDePaginas;
      this.registros = response.lista;
    }, error => {
      this.carregando = false;
      this.total = 0;
      this.registros = [];
    });
  }

  private request() {
    return this.form != null ? this.form.getRawValue() : {};
  }

  // paginaMudou(pageEvent: PageEvent) {
  //    .pagina = pageEvent.pageIndex;
  //   this.tamanhoPagina = pageEvent.pageSize;
  //   this.buscarRegistros();
  // }
  alterarPagina(number: number) {
    if (number == 0 || number > this.qtdPaginas) {
      return;
    }
    this.pagina = number;
    this.buscarRegistros();
  }
}

export interface IFiltrar {
  pesquisar(request: any, pagina: number, quantidade: number): Observable<PesquisarResponse<any>>;
}

export interface PesquisarResponse<T> {
  lista: T[];
  pagina: number;
  tamanhoDaPagina: number;
  totalDePaginas: number;
  totalDeRegistros: number;
}
