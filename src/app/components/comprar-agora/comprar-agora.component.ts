import {Component, OnInit} from '@angular/core';
import {ButtonFactory} from '../button/button.component';

@Component({
  selector: 'app-comprar-agora',
  templateUrl: './comprar-agora.component.html',
  styleUrls: ['./comprar-agora.component.css']
})
export class ComprarAgoraComponent implements OnInit {

  constructor() {
  }

  comprarAgora = ButtonFactory.create('Comprar Agora', 'secondary', 'button');

  ngOnInit(): void {
  }

  comprar() {
    window.open('https://go.hotmart.com/M26465593X', '_blank');
  }

  closeBar() {
    document.getElementById('ofBar').style.display = 'none';
  }
}
