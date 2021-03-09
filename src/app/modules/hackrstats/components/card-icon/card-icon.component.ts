import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.css']
})
export class CardIconComponent  {
  @Input() quantidade: string = '0';
  @Input() descricao: string;
  @Input() titulo: string;
  @Input() icone: string;
  @Input() cor: color;

}

export type color = 'blue' | 'green' | 'orange' | 'red' ;
