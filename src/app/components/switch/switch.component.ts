import {Component, OnInit} from '@angular/core';
import {ValidatorFn, Validators} from '@angular/forms';
import {BaseElement, ElementComponent} from '../base-element';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent extends ElementComponent<SwitchElement> {
}

export class SwitchElement extends BaseElement {
  labelTrue;
  labelFalse;
  color: 'primary' | 'success' | 'danger' | 'default'

  constructor(name: string, labelTrue: string, labelFalse: string, color: "primary" | "success" | "danger" | 'default', mError: string, validators: ValidatorFn[]) {
    super(name, null, mError, validators);
    this.labelTrue = labelTrue;
    this.labelFalse = labelFalse;
    this.color = color;
  }
}

export class SwitchFactory {
  static create = (name: string, labelTrue: string, labelFalse: string, color: "primary" | "success" | "danger" | 'default' = 'default', mErro?: string, validators?: ValidatorFn[]): SwitchElement => new SwitchElement(name, labelTrue, labelFalse, color, mErro, validators);
}
