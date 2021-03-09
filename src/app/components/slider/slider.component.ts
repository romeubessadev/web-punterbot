import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import noUiSlider from 'nouislider';
import {BaseElement, ElementComponent} from '../base-element';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent extends ElementComponent<SliderElement> implements OnInit, AfterViewInit {
  @ViewChild('slide', {static: true}) slider: ElementRef;

  _value: SliderValue = 0;

  ngOnInit(): void {
    super.ngOnInit();

    this.element.onChange((value: SliderValue) => {
      this.setValue(value);
    });
  }

  ngAfterViewInit() {
    noUiSlider.create(this.slider.nativeElement, {
      start: this.element.defaultValue,
      step: 1,
      connect: [true, false],
      range: {
        min: this.element.min,
        max: this.element.max
      }
    });

    this.uiSlider.on('set.one', this.onChangeValue.bind(this));
  }

  onChangeValue(event: SliderValue) {
    this._value = event[0];
    this.value = this._value;
  }

  get uiSlider() {
    return this.slider.nativeElement.noUiSlider;
  }

  setValue(value: SliderValue) {
    this._value = value;

    if (this.uiSlider) {
      this.uiSlider.set(this._value);
    }
  }
}

export class SliderElement extends BaseElement {
  min: number;
  max: number;

  private _onChange: (value: SliderValue) => void;

  constructor(name: string, label: string, min: number = 0, max: number = 100) {
    super(name, label, null, null);
    this.min = min;
    this.max = max;
    this.defaultValue = 0;
  }

  set value(value: SliderValue) {
    this.defaultValue = value;
    if (this.formControl) {
      this.formControl.setValue(value);
    }
    if (this._onChange) {
      this._onChange(value);
    }
  }

  get value(): SliderValue {
    if (this.formControl) {
      return this.formControl.value;
    }
    return null;
  }

  onChange(onchange: (value: SliderValue) => void) {
    this._onChange = onchange;
    if (this.defaultValue) {
      this._onChange(this.defaultValue);
    }
  }
}

export type SliderValue = number | number[];

export class SliderFactory {
  static create = (name: string, label): SliderElement => new SliderElement(name, label);
  static createMinMax = (name: string, label: string, min: number, max: number): SliderElement => new SliderElement(name, label, min, max);
}
