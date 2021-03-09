import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';
import {CrudService} from '../../../services/crud.service';
import {MensagemService} from '../../../services/mensagem.service';
import {InputFactory} from '../../../components/input/input.component';
import {FormDefault} from '../../auth/services/usuario.service';
import {successGlobal} from '../../../app-service';

@Injectable({providedIn: 'root'})
export class LigaService extends CrudService<Liga, number> {
  constructor(private _router: Router, public mensagemService: MensagemService, httpClient: HttpClient) {
    super('liga', mensagemService, httpClient);
  }

  atualizar(atualizarNome: AtualizarNome) {
    return this.post('atualizar', atualizarNome, successGlobal('Liga Atualizada com sucesso!', 'liga'));
  }
}

export interface AtualizarNome {
  id: number
  nome: string
}

export interface Liga {
  id: number;
  nome: string;
  logo: string;
  temporadas: Temporada[];
}

export interface Temporada {
  id: number;
  nome: string;
  ligaId: number;
  atualTemporada: boolean;
}

export class LigaForm extends FormDefault<Liga> {

  nome = InputFactory.create('nome', 'Nome')
    .required();

  set(t: Liga) {
    this.nome.value = t.nome;
  }

}
