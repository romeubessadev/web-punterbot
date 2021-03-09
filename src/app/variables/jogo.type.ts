import {Time} from '../modules/hackrstats/services/time.service';
import {Liga} from '../modules/hackrstats/services/liga.service';

export interface PesquisaJogoPorLiga {
  _id: number;
  nome: string;
  logo: string;
  jogos: JogoLiga[];
}

export interface JogoLiga {
  dataInicio: Date;
  situacao: string;
  timeCasa: PesquisaJogoTime;
  timeVisita: PesquisaJogoTime;
}

export interface PesquisaJogoTime {
  id: number;
  nome: string;
  logo: string;
}

export interface Jogo {
  id: number;
  data: Data
  liga: Liga
  timeCasa: Time
  timeVisita: Time
}

export interface Data {
  situacao: string;
  dataInicio: Date;
  minuto: number
  segundo: number
}

export interface TimeJogoHistorico {
  geral: UltimosJogos[];
  liga: UltimosJogos[];
}

export interface UltimosJogos {
  id: number;
  data: Date;
  timeCasaId: number;
  timeCasaNome: string;
  timeVisitaId: number;
  timeVisitaNome: string;
  escanteios: Escanteio[];
  gols: Gols[];
}

export interface Escanteio {
  id: number,
  timeId: number,
  jogoId: number,
  minuto: number,
  minutoExtra: number,
  comentario: string
}

export interface Gols {
  id: number;
  timeId: number;
  tipo: string;
  jogoId: number;
  jogadorId: number;
  jogadorName: string;
  jogadorAssistenciaId: number;
  jogadorAssistenciaNome: string;
  minuto: number;
  minutoExtra: number;
}
