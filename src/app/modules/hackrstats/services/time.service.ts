import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';
import {CrudService} from '../../../services/crud.service';
import {Data, TimeJogoHistorico} from '../../../variables/jogo.type';
import {MensagemService} from '../../../services/mensagem.service';
import {FormDefault} from '../../auth/services/usuario.service';
import {InputFactory} from '../../../components/input/input.component';
import {successGlobal} from '../../../app-service';

@Injectable({providedIn: 'root'})
export class TimeService extends CrudService<Time, number> {
  constructor(private _router: Router, public mensagemService: MensagemService, httpClient: HttpClient) {
    super('time', mensagemService, httpClient);
  }

  atualizar(atualizarNome: { nome: string }) {
    return this.post('atualizar', atualizarNome, successGlobal('Time Atualizado com sucesso!', 'time'));
  }
}

export interface Time {
  id: number;
  data: Data;
  nome: string;
  twitter: string;
  anoFundado: string;
  logo: string;
  estatistica: TimeEstatistica
  ultimosJogos: TimeJogoHistorico
}

export interface TimeEstatistica {
  escanteios: AgrupadorEstatistica<EscanteioEstatisticas>;
  gols: AgrupadorEstatistica<GolsEstatisticas>;
}

export interface AgrupadorEstatistica<T> {
  geral: T
  liga: T
}

export interface EscanteioEstatisticas {
  ESCANTEIO_1_TEMPO: any
  ESCANTEIO_2_TEMPO: any
  ESCANTEIO_TEMPO_TOTAL: any
  HT_10: any
  HT_20: any
  HT_35: any
  HT_38: any
  HT_50: any
  HT_60: any
  FT_75: any
  FT_82: any
  HT_LIMITE: any
  FT_LIMITE: any
}

export interface GolsEstatisticas {
  GOL_1_TEMPO: any
  GOL_2_TEMPO: any
  GOL_TEMPO_TOTAL: any
  OVER_05_HT: any
  OVER_1_5_FT: any
  OVER_2_5_FT: any
  AMBAS_MARCARAM: any
}

export class TimeForm extends FormDefault<Time> {
  nome = InputFactory.create('nome', 'Nome')
    .required();
  twitter = InputFactory.create('twitter', 'Twitter')
    .required();
  anoFundado = InputFactory.create('anoFundado', 'Ano', 'number')
    .required();

  set(t: Time) {
    this.nome.value = t.nome;
    this.twitter.value = t.twitter;
    this.anoFundado.value = t.anoFundado;
  }

}
