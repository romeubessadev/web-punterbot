import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() color: color = 'primary';
  @Input() type: string;
  @Input() badge: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}

export type color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' ;
