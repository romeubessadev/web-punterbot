import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from '../../../app-service';
import {Jogo, PesquisaJogoPorLiga} from '../../../variables/jogo.type';
import {MensagemService} from '../../../services/mensagem.service';
import {environment} from '../../../../environments/environment';
import {SelectOption} from '../../../components/select/select.component';

@Injectable({providedIn: 'root'})
export class JogoService extends AppService {

  constructor(private _router: Router, public mensagemService: MensagemService, httpClient: HttpClient) {
    super('jogo', mensagemService, httpClient);
  }

  buscarPorId(jogoId: number): Observable<Jogo> {
    return this.get(jogoId.toString());
  }

  buscarFiltro(): Observable<FiltroEstatisticaResponse> {
    return this.get('filtros');
  }

  buscarJogoAgrupado(request: JogoPesquisaFiltroRequest, tipoPesquisa: TipoJogoPesquisa, pagina: number, qtd: number): Observable<PesquisaJogoPorLiga[]> {
    if (environment.fake) {
      return this.fake();
    }

    return this.post('agrupado/pesquisar', request, null, {
      params: {
        tipo: tipoPesquisa,
        pagina: pagina,
        quantidade: qtd
      }
    });
  }

  fake(): Observable<PesquisaJogoPorLiga[]> {
    return new Observable<PesquisaJogoPorLiga[]>(subscriber => {
      subscriber.next([
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        },
        {
          _id: 271,
          nome: 'Superliga',
          logo: 'https://cdn.sportmonks.com/images/soccer/leagues/271.png',
          jogos: [
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 2905,
                nome: 'AGF',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/25/2905.png'
              },
              timeVisita: {
                id: 2356,
                nome: 'Randers',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/20/2356.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 86,
                nome: 'Silkeborg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/22/86.png'
              },
              timeVisita: {
                id: 2394,
                nome: 'Nordsjælland',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/26/2394.png'
              }
            },
            {
              dataInicio: new Date(),
              situacao: 'NS',
              timeCasa: {
                id: 1371,
                nome: 'Esbjerg',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/27/1371.png'
              },
              timeVisita: {
                id: 1020,
                nome: 'AaB',
                logo: 'https://cdn.sportmonks.com/images//soccer/teams/28/1020.png'
              }
            }
          ]
        }
      ]);
    });
  }

}

export type TipoJogoPesquisa = 'HOJE' | 'AMANHA' | 'AO_VIVO';

export interface FiltroEstatisticaResponse {
  gol: SelectOption[];
  escanteio: SelectOption[];
}

export interface JogoPesquisaFiltroRequest {
  escanteios?: PesquisaEstrategia[];
  gols?: PesquisaEstrategia[];
}

export interface PesquisaEstrategia {
  liga: boolean;
  chave: string;
  valor: number;
}
