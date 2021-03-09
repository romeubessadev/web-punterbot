import {Component, OnInit} from '@angular/core';
import {ButtonFactory} from '../../../../components/button/button.component';

@Component({
  selector: 'app-grupo-exclusivo',
  templateUrl: './grupo-exclusivo.component.html',
  styleUrls: ['./grupo-exclusivo.component.css']
})
export class GrupoExclusivoComponent implements OnInit {

  constructor() {
  }

  btnApple = ButtonFactory.create('App Store', 'secondary', 'button', 'fab fa-apple').addClass('mr-3 mt-2 ml-3');
  btnAndroid = ButtonFactory.create('Google Play', 'secondary', 'button', 'fab fa-android').addClass('mt-2');

  ngOnInit(): void {
  }

  download(tp) {
    if (tp === 1) {
      window.open('https://apps.apple.com/br/app/telegram-messenger/id686449807', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=pt_BR', '_blank');
    }
  }
}
