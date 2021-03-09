import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ValidatorFn} from '@angular/forms';
import {BaseElement, ElementComponent} from '../base-element';
import {Observable} from 'rxjs';

export const Meses: SelectOption[] = [
  {label: 'Janeiro', value: 1},
  {label: 'Fevereiro', value: 2},
  {label: 'Março', value: 3},
  {label: 'Abril', value: 4},
  {label: 'Maio', value: 5},
  {label: 'Junho', value: 6},
  {label: 'Julho', value: 7},
  {label: 'Agosto', value: 8},
  {label: 'Setembro', value: 9},
  {label: 'Outubro', value: 10},
  {label: 'Novembro', value: 11},
  {label: 'Dezembro', value: 12}
];
export const Anos: SelectOption[] = [
  {label: '2014', value: 2014},
  {label: '2015', value: 2015},
  {label: '2016', value: 2016},
  {label: '2017', value: 2017},
  {label: '2018', value: 2018},
  {label: '2019', value: 2019},
  {label: '2020', value: 2020}
];

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent extends ElementComponent<SelectElement> implements OnInit {
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  selectChange(event: any) {
    if (this.selectionChange) {
      this.selectionChange.emit(event.value);
    }
  }
}


export class SelectElement extends BaseElement {
  mostraNenhum = true;
  options: SelectOption[];

  constructor(name: string, label: string, options: SelectOption[], mError: string, validators: ValidatorFn[]) {
    super(name, label, mError, validators);
    this.options = options;
    this.defaultValue = null;
  }

  public setDisabled(disabled: boolean) {
    this.disabled = disabled;
    return this;
  }

  public setDefault(value: any): SelectElement {
    this.value = value;
    return this;
  }

  public setMostraNenhum(mostraNenhum: any): SelectElement {
    this.mostraNenhum = mostraNenhum;
    return this;
  }
}

export class SelectOption {
  label: string;
  value: any;

  constructor(label: string, value: any) {
    this.label = label;
    this.value = value;
  }
}

export class IconSelectOption extends SelectOption {
  icon: string;
  color: string;

  constructor(icon: string, label: string, value: any, color?: string) {
    super(label, value);
    this.icon = icon;
    this.color = color;
  }
}

export class SelectFactory {

  static create = (name: string, options: SelectOption[], label?: string, mError?: string, validators?: ValidatorFn[]): SelectElement => new SelectElement(name, label, options, mError, validators);
  static createAnyOptions = (name: string, options: any[], label?: string, mError?: string, validators?: ValidatorFn[]): SelectElement => new SelectElement(name, label, SelectFactory.createOptions(options), mError, validators);

  static createPromise(name: string, promiseOptions: Promise<SelectOption[]>, label?: string, mError?: string, validators?: ValidatorFn[]) {
    let selectModel = SelectFactory.create(name, null, label, mError, validators);
    promiseOptions.then(options => {
      selectModel.options = options;
    });
    return selectModel;
  };

  static createObservable(name: string, observable: Observable<SelectOption[]>, label?: string, mError?: string, validators?: ValidatorFn[]) {
    let selectModel = SelectFactory.create(name, null, label, mError, validators);

    observable.subscribe(options => {selectModel.options = options;}
    );
    return selectModel;
  };

  static createOptions = (options: any[]) => options.map(op => new SelectOption(op.label, op.value));

  static createAtivo = (): SelectElement => new SelectElement('ativo', 'Situação', SelectFactory.createOptions([{
    label: 'Ativo',
    value: true
  }, {label: 'Inativo', value: false}]), null, null);

  static createMes = (): SelectElement => new SelectElement('mes', 'Mês', SelectFactory.createOptions(Meses), null, null);

  static createAnos = (): SelectElement => new SelectElement('ano', 'Ano', SelectFactory.createOptions(Anos), null, null);
}
