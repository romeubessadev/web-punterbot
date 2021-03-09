import {Component, Input, OnInit} from '@angular/core';
import {SelectElement, SelectFactory, SelectOption} from '../../../../components/select/select.component';
import {SliderFactory} from '../../../../components/slider/slider.component';
import {FormGroup} from '@angular/forms';
import {PesquisaEstrategia} from '../../services/jogo.service';

@Component({
  selector: 'app-filtro-estatistica',
  templateUrl: './filtro-estatistica.component.html',
  styleUrls: ['./filtro-estatistica.component.css']
})
export class FiltroEstatisticaComponent implements OnInit, FiltroResultado {
  @Input() label: string;
  @Input() chave: string;

  @Input() opcoes: SelectOption[];
  form: FormGroup = new FormGroup({});

  selectEstatistica: SelectElement;
  sliderValor = SliderFactory.create('valor', 'Valor');

  constructor() {
  }

  ngOnInit(): void {
    this.selectEstatistica = SelectFactory.createAnyOptions('estatistica', this.opcoes, this.label);
  }

  get(): PesquisaEstrategia {
    let chave = this.selectEstatistica.value;
    let valor = this.sliderValor.value;

    if (chave && valor && valor != 0) {
      return {
        liga: false,
        chave: chave,
        valor: Number(valor)
      };
    } else {
      return null;
    }
  }

}

export interface FiltroResultado {
  get(): PesquisaEstrategia;
}
