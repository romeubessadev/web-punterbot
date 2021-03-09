import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';

@Directive({
  selector: '[grid]',
  exportAs: 'gridTemplate'
})
export class GridTemplateDirective {
  @Input() grid: string;

  constructor(public template: TemplateRef<any>) {
  }
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  /**
   * Colunas para aparecer na tabela
   */
  @Input() colunas: GridColuna[] = [];

  /**
   * Acoes
   */
  @Input() acoes: GridAcao[] = [];

  /**
   * A lista
   */
  @Input() lista: object[] = null;

  /**
   * Template para ficar embaixo da TR
   */
  @ContentChild('subRow', {static: true}) subRow: TemplateRef<any>;

  /**
   * Template para substituir a mostragem da coluna
   */
  @ContentChildren(GridTemplateDirective) gridTemplate: QueryList<GridTemplateDirective>;

  constructor() {
  }

  ngOnInit() {
  }

  findTemplate(col: GridColuna) {
    const template = this.gridTemplate.find(gt => gt.grid == col.name);

    if (template != null) {
      return template.template;
    }
    return null;
  }
}

export type GridColuna = {
  name: string;
  label: string;
}

export type GridAcao = {
  label: string;
  icon?: string;
  color?: string;
  click: any;
}


