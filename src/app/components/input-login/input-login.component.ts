import {Component} from '@angular/core';
import {BaseElement, ElementComponent} from '../base-element';
import {ValidatorFn, Validators} from '@angular/forms';
import {InputElement} from '../input/input.component';

@Component({
  selector: 'app-login-input',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.css']
})
export class InputLoginComponent extends ElementComponent<InputElement>{
}
