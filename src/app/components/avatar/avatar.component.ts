import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() titulo: string;
  @Input() img: string;

  @Output() click = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
