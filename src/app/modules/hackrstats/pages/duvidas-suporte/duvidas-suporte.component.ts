import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-duvidas-suporte',
  templateUrl: './duvidas-suporte.component.html',
  styleUrls: ['./duvidas-suporte.component.css']
})
export class DuvidasSuporteComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  contato() {
    window.open('https://api.whatsapp.com/send?phone=5567981642846&text=Ol%C3%A1!%20Estou%20com%20uma%20d%C3%BAvida%20no%20Punter%20Bot!', '_blank');
  }
}
