import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Input, OnInit} from '@angular/core';

export abstract class ElementComponent<T extends BaseElement> implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  @Input() element: T;

  ngOnInit(): void {
    this.buildFormControl();
  }

  /**
   * Construcao do FormControl
   * Adicao No FormGroup
   */
  public buildFormControl() {
    if (!this.element.formControl) {
      this.element.formControl = new FormControl({
        value: this.element.defaultValue, disabled: this.element.disabled
      }, this.element.validators);
    }

    this.form.addControl(this.element.name, this.element.formControl);
  }

  public showError() {
    return (this.control.dirty || this.control.touched) && (this.control.invalid || this.control.errors);
  }

  get control() {
    return this.element.formControl;
  }

  set value(value: any) {
    this.control.setValue(value);
  }
}

export class BaseElement {
  name: string;
  label: string;
  validators: ValidatorFn[] = null;
  mError: string;

  public defaultValue: any;
  private _disabled: boolean = false;

  private _id: string;
  private _formControl: FormControl;

  constructor(name: string, label: string, mError?: string, validators?: ValidatorFn[]) {
    this.name = name;
    this.label = label;
    this.validators = validators != null ? validators : [];
    this.mError = mError;
    this._id = 'element-id-' + this.name.toLowerCase();
  }

  /**
   * gera um id com base no nome do formcontroll
   */
  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  /**
   * Busca o valor no form setado
   */
  public get value(): any {
    if (this._formControl) {
      return this._formControl.value;
    }
    return null;
  }

  get disabled(): boolean {
    if (this._formControl) {
      return this._formControl.disabled;
    }
    return this._disabled;
  }

  set disabled(disabled: boolean) {
    if (this._formControl) {
      if (disabled) {
        this._formControl.disable();
      } else {
        this._formControl.enable();
      }
    }
    this._disabled = disabled;
  }

  /**
   * Seta o valor no form
   * @param value
   */
  public set value(value: any) {
    this.defaultValue = value;
    if (this._formControl) {
      this._formControl.setValue(value);
    }
  }

  get formControl(): FormControl {
    return this._formControl;
  }

  set formControl(formControl: FormControl) {
    this._formControl = formControl;
  }

  required() {
    this.validators.push(Validators.required);
    return this;
  }

  email() {
    this.validators.push(Validators.email);
    return this;
  }

  onlyLetter() {
    this.validators.push(Validators.pattern('[a-zA-Z ]*'));
    return this;
  }
}
