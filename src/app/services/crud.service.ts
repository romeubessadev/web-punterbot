import {AppService} from '../app-service';
import {HttpClient} from '@angular/common/http';
import {IFiltrar, PesquisarResponse} from '../components/grid-paginate/grid-paginate.component';
import {Observable} from 'rxjs';
import {MensagemService} from './mensagem.service';


export class CrudService<T, K> extends AppService implements IFiltrar {

  constructor(controller: string, public mensagemService: MensagemService, httpClient: HttpClient) {
    super(controller, mensagemService, httpClient);
  }


  buscar(id: K) {
    return this.get(`${id}`);
  }

  deletar(id: K) {
    return this.delete(`${id}`);
  }

  buscarQuantidade() {
    return this.get('quantidade');
  }

  pesquisar(request: any, pagina: number, quantidade: number): Observable<PesquisarResponse<T>> {
    return this.post(`pesquisar?pagina=${pagina}&quantidade=${quantidade}`, request);
  }

}
