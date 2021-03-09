import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Mensagem, MensagemScope, MensagemService} from '../../services/mensagem.service';
import {Subscription} from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css'],
  animations: [
    trigger(
      'mensagem',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('300ms ease',
              style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('300ms ease-in',
              style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class MensagemComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  @Input() scope: MensagemScope;

  mensagems: Mensagem[] = [];

  constructor(private mensagemService: MensagemService) {
  }

  ngOnInit(): void {
    if (this.scope) {
      this.sub = this.mensagemService.mensagem.subscribe(value => this.addMsg(value));
    }
  }

  private addMsg(msg: Mensagem) {
    if (msg.scope == this.scope) {
      this.mensagems.push(msg);

      setTimeout(() => {
        let index = this.mensagems.findIndex(msg => msg == msg);
        this.mensagems.splice(index, 1);
      }, 4000);
    }

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


  remove(index) {
    this.mensagems.splice(index, 1);
  }
}
