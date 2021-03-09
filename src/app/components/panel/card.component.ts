import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() titulo: string;
  @Input() icon: string;
  @Input() zeroPadding: boolean = true;

  @ContentChild('header', {static: true}) header: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
