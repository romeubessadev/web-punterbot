import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ButtonFactory} from '../../../../../components/button/button.component';
import {ActivatedRoute} from '@angular/router';
import {Time, TimeForm, TimeService} from '../../../services/time.service';

@Component({
  selector: 'app-time-detalhe',
  templateUrl: './time-detalhe.component.html',
  styleUrls: ['./time-detalhe.component.css']
})
export class TimeDetalheComponent implements OnInit {
  private _sub: Subscription;
  time: Time;
  timeForm = new TimeForm();

  btnSalvar = ButtonFactory.block('Salvar Time', 'primary', 'submit');


  constructor(private activatedRoute: ActivatedRoute, private timeService: TimeService) {
  }

  ngOnInit(): void {
    this._sub = this.activatedRoute.params.subscribe(value => {
      const timeId = value.id;
      if (timeId) {
        this.carregar(timeId);
      }
    });
  }

  ngOnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  private carregar(timeId: number) {
    this.timeService.buscar(timeId).subscribe(value => {
      this.time = value;
      this.timeForm.set(this.time);
    });

  }

  salvar() {
    let atualizarNome = this.timeForm.getValue();
    atualizarNome.id = this.time.id;
    this.timeService.atualizar(atualizarNome).subscribe(value => {
    });
  }
}
