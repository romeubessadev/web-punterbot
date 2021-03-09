import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() button: ButtonModel;
  @Input() disabled: boolean = false;
  @Output() bClick: EventEmitter<any> = new EventEmitter<any>();
  private loading: boolean = false;
  private loadingSub: Subscription;

  constructor() {
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    if (this.disabled || this.loadDisable) {
      $event.stopPropagation();
    } else {
      this.bClick.next($event);
    }
  }

  get loadDisable() {
    if (this.button.ignoreLoadDisable) {
      return false;
    }

    return this.loading;
  }

  ngOnInit(): void {
    // this.loadingSub = this.loadingListener.loading().subscribe(value => {
    //   this.loading = value;
    //   this.cdr.detectChanges();
    // });
  }

  ngOnDestroy(): void {
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
  }
}

export class ButtonModel {
  label: string;
  icon: string;
  type: string;
  color: string;
  btnClass: string = '';
  style: string;
  ignoreLoadDisable: boolean = false;

  constructor(label: string, color: ColorButton, type: string, icon: string, style: string) {
    this.label = label;
    this.icon = icon;
    this.type = type;
    this.style = style;
    if (color != 'custom') {
      this.color = 'btn-' + color;
    }
  }

  setIgnoreLoadDisable(ignoreLoadDisable: boolean) {
    this.ignoreLoadDisable = ignoreLoadDisable;
    return this;
  }

  addClass(clas: string) {
    this.btnClass += clas;
    return this;
  }
}

export class ButtonFactory {
  static create = (label: string, color: ColorButton, type: string = 'button', icon?: string, style?: string): ButtonModel => new ButtonModel(label, color, type, icon, style);
  static block = (label: string, color: ColorButton, type: string = 'button', icon?: string, style?: string): ButtonModel => new ButtonModel(label, color, type, icon, style).addClass('btn-block');
  static createPesquisar = (): ButtonModel => new ButtonModel('Pesquisar', 'primary', 'button', null, null);

}

export type ColorButton =
  'custom' |
  'default' |
  'primary' |
  'secondary' |
  'info' |
  'success' |
  'danger' |
  'warning'
  ;
