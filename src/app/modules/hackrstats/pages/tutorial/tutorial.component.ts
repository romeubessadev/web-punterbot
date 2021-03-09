import {Component, OnInit, ViewChild} from '@angular/core';
import {ButtonFactory} from '../../../../components/button/button.component';
import {SelectElement, SelectFactory, SelectOption} from '../../../../components/select/select.component';

export const Opcoes: SelectOption[] = [
  {label: 'Estatísticas de Cantos', value: 'cantos'},
  {label: 'Estatísticas de Gols', value: 'gols'},
  {label: 'Tutorial Punter Bot', value: 'bot'},
];

export const BotoesEscanteio: ButtonFactory[] = [
  ButtonFactory.create('HT10', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('HT20', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('HT35', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('HT38', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('FT50', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('FT60', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('FT75', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('FT82', 'primary', 'submit', null).addClass(' btn-sm'),
];

export const BotoesGols: ButtonFactory[] = [
  ButtonFactory.create('0.5 HT', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('1.5 FT', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('2.5 FT', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('BTS', 'primary', 'submit', null).addClass(' btn-sm'),
];

export const BotoesPunterBot: ButtonFactory[] = [
  ButtonFactory.create('Configurando seu Bot', 'primary', 'submit', null).addClass(' btn-sm'),
  ButtonFactory.create('Criando suas Estratégias', 'primary', 'submit', null).addClass(' btn-sm'),
];

export interface FiltroTipoEstatistica {
  get(): PesquisaEstatistica;
}

export interface PesquisaEstatistica {
  valor: string;
}

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']

})
export class TutorialComponent implements OnInit {

  pdfSrc: string;
  gols = false;
  cantos = false;
  bot = false;
  config = false;
  estrategias = false;
  selectTipoEstatistica: SelectElement;
  @ViewChild('tipoEstatistica') filtroTipoEstatistica: FiltroTipoEstatistica;
  botoesCantos: ButtonFactory[] = BotoesEscanteio;
  botoesGols: ButtonFactory[] = BotoesGols;
  botoesBot: ButtonFactory[] = BotoesPunterBot;
  opcoes: SelectOption[] = Opcoes;

  constructor() {
  }

  trocaTipoEstatistica() {
    this.pdfSrc = null;
    if (this.selectTipoEstatistica.value === 'gols') {
      this.cantos = false;
      this.bot = false;
      this.gols = true;
    } else if (this.selectTipoEstatistica.value === 'cantos') {
      this.gols = false;
      this.bot = false;
      this.cantos = true;
    } else {
      this.gols = false;
      this.cantos = false;
      this.bot = true;
    }
  }

  pesquisar(btn) {
    if (this.cantos) {
      if (btn.label === 'HT10') {
        this.pdfSrc = 'assets/pdf/ht10.pdf';
      } else if (btn.label === 'HT20') {
        this.pdfSrc = null;
      } else if (btn.label === 'HT35') {
        this.pdfSrc = null;
      } else if (btn.label === 'HT38') {
        this.pdfSrc = null;
      } else if (btn.label === 'FT50') {
        this.pdfSrc = null;
      } else if (btn.label === 'FT60') {
        this.pdfSrc = null;
      } else if (btn.label === 'FT75') {
        this.pdfSrc = null;
      } else if (btn.label === 'FT82') {
        this.pdfSrc = null;
      }
    } else if (this.gols) {
      if (btn.label === '0.5 HT') {
        this.pdfSrc = null;
      } else if (btn.label === '1.5 FT') {
        this.pdfSrc = null;
      } else if (btn.label === '2.5 FT') {
        this.pdfSrc = null;
      } else {
        this.pdfSrc = null;
      }
    } else {
      this.pdfSrc = null;
      if (btn.label === 'Configurando seu Bot') {
        this.estrategias = false;
        this.config = true;
      } else {
        this.config = false;
        this.estrategias = true;
      }
    }
  }

  ngOnInit(): void {
    this.selectTipoEstatistica = SelectFactory.createAnyOptions('estatistica', this.opcoes, 'Material');

  }

}
