import {Component} from '@angular/core';
import {BaseElement, ElementComponent} from '../base-element';
import {ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends ElementComponent<InputElement> {
}

export class InputElement extends BaseElement {
  icon: string;
  type: string;
  mask: string;
  placeholder;
  maxLength: number;
  min: number;
  max: number;

  info: string;

  constructor(name: string, type: string, label: string, placeholder, icon: string, mError: string, validators: ValidatorFn[]) {
    super(name, label, mError, validators);
    this.icon = icon;
    this.type = type;
    if (placeholder) {
      this.placeholder = placeholder;
    } else {
      this.placeholder = 'Informe o ' + label;
    }
  }

  public setPlaceholder(placeholder: string) {
    this.placeholder = placeholder;
    return this;
  }

  public telefone() {
    this.mask = '(00) 00000-0000';
    return this;
  }

  public setDisabled(disabled: boolean) {
    this.disabled = disabled;
    return this;
  }

  public setMaxLength(maxLength: number) {
    this.maxLength = maxLength;
    return this;
  }

  public setMin(min: number) {
    this.min = min;
    this.validators.push(Validators.min(min));
    return this;
  }

  public setMax(max: number) {
    this.max = max;
    this.validators.push(Validators.max(max));
    return this;
  }

  public setIcon(icon: string) {
    this.icon = icon;
    return this;
  }

  public setInfo(info: string) {
    this.info = info;
    return this;
  }
}

export class InputFactory {

  static create = (name: string, label: string, type: string = 'text', placeholder?: string): InputElement => new InputElement(name, type, label, placeholder, null, null, null);

  static createDisabled = (name: string, label: string, placeholder?: string, type: string = 'text', mErro?: string, validators?: ValidatorFn[]): InputElement => {
    let inputMd = new InputElement(name, type, label, placeholder, null, mErro, validators);
    inputMd.disabled = true;
    return inputMd;
  };

  static createCampoCodigo = (): InputElement => {
    let inputMd = new InputElement('id', 'number', 'Código', null, null, null, null);
    inputMd.disabled = true;
    return inputMd;
  };
}
