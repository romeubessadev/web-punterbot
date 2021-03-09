import {RouterModule, Routes} from '@angular/router';
import {RouteFactory} from '../../factories/route-factory';
import {NgModule} from '@angular/core';
import {HackrstatsBaseComponent} from './hackrstats-base.component';
import {JogosDeHojePesquisarComponent} from './pages/jogos-de-hoje-pesquisar/jogos-de-hoje-pesquisar.component';
import {JogoDetalheComponent} from './pages/jogos-de-hoje-pesquisar/jogos-de-hoje-detalhe/jogo-detalhe.component';
import {HackrstatsDashboardComponent} from './pages/hackrstats-dashboard/hackrstats-dashboard.component';
import {UsuarioPerfilComponent} from './pages/usuario-perfil/usuario-perfil.component';

import {HackrstatsRoutesComponent} from './components/hackrstats-routes/hackrstats-routes.component';
import {AtivacaoComponent} from './pages/ativacao/ativacao.component';
import {UsuarioPesquisarComponent} from './pages/usuario-pesquisar/usuario-pesquisar.component';
import {LigaPesquisarComponent} from './pages/liga-pesquisar/liga-pesquisar.component';
import {TimePesquisarComponent} from './pages/time-pesquisar/time-pesquisar.component';
import {AdminRoutesComponent} from './components/admin-routes/admin-routes.component';
import {JogosAoVivoDetalheComponent} from './pages/jogos-ao-vivo-pesquisar/jogos-ao-vivo-detalhe/jogos-ao-vivo-detalhe.component';
import {JogosAoVivoPesquisarComponent} from './pages/jogos-ao-vivo-pesquisar/jogos-ao-vivo-pesquisar.component';
import {JogosAmanhaPesquisarComponent} from './pages/jogos-amanha-pesquisar/jogos-amanha-pesquisar.component';
import {UsuarioDetalheComponent} from './pages/usuario-pesquisar/usuario-detalhe/usuario-detalhe.component';
import {LigaDetalheComponent} from './pages/liga-pesquisar/liga-detalhe/liga-detalhe.component';
import {TimeDetalheComponent} from './pages/time-pesquisar/time-detalhe/time-detalhe.component';
import {GrupoExclusivoComponent} from './pages/grupo-exclusivo/grupo-exclusivo.component';
import {DuvidasSuporteComponent} from './pages/duvidas-suporte/duvidas-suporte.component';
import {JogosAmanhaDetalheComponent} from './pages/jogos-amanha-pesquisar/jogos-amanha-detalhe/jogos-amanha-detalhe.component';
import {TutorialComponent} from './pages/tutorial/tutorial.component';

const routes: Routes = [
  RouteFactory.createRouteChildren('', HackrstatsBaseComponent, null, [
    RouteFactory.createRouteChildren('', HackrstatsRoutesComponent, null, [
      RouteFactory.createRoute('', HackrstatsDashboardComponent, 'Home'),
      RouteFactory.createRoute('jogo/:id', JogoDetalheComponent, 'Jogos de Hoje', ['JOGOS_HOJE']),
      RouteFactory.createRoute('jogos-de-hoje', JogosDeHojePesquisarComponent, 'Jogos de Hoje', ['JOGOS_HOJE']),
      RouteFactory.createRoute('jogos-ao-vivo', JogosAoVivoPesquisarComponent, 'Jogos Ao Vivo', ['JOGOS_AO_VIVO']),
      RouteFactory.createRoute('jogos-ao-vivo/:id', JogosAoVivoDetalheComponent, 'Jogos Ao Vivo', ['JOGOS_AO_VIVO']),
      RouteFactory.createRoute('jogos-amanha', JogosAmanhaPesquisarComponent, 'Jogos De Amanhã', ['JOGOS_AMANHA']),
      RouteFactory.createRoute('jogos-amanha/:id', JogosAmanhaDetalheComponent, 'Jogos De Amanhã', ['JOGOS_AMANHA']),
    ]),
    RouteFactory.createRouteChildren('admin', AdminRoutesComponent, null, [
      RouteFactory.createRoute('usuarios', UsuarioPesquisarComponent, 'Usuários'),
      RouteFactory.createRoute('usuario/novo', UsuarioDetalheComponent, 'Novo Usuário'),
      RouteFactory.createRoute('usuario/editar/:id', UsuarioDetalheComponent, 'Editar Usuário'),
      RouteFactory.createRoute('ligas', LigaPesquisarComponent, 'Ligas', ['ADMINISTRADOR']),
      RouteFactory.createRoute('liga/editar/:id', LigaDetalheComponent, 'Editar Liga', ['ADMINISTRADOR']),
      RouteFactory.createRoute('times', TimePesquisarComponent, 'Times', ['ADMINISTRADOR']),
      RouteFactory.createRoute('time/editar/:id', TimeDetalheComponent, 'Editar Time', ['ADMINISTRADOR']),
    ]),
    RouteFactory.createRoute('grupo-exclusivo', GrupoExclusivoComponent, 'Grupo Exclusivo'),
    RouteFactory.createRoute('duvidas-suporte', DuvidasSuporteComponent, 'Dúvidas e Suporte'),
    RouteFactory.createRoute('tutorial', TutorialComponent, 'Estatísticas'),
    RouteFactory.createRoute('meu-perfil', UsuarioPerfilComponent, 'Meu Perfil'),
    RouteFactory.createRoute('ativar-conta', AtivacaoComponent, 'Ativar Conta', null, false),
    RouteFactory.createRouteRedirect('**', '', 'full')
  ], false)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackrstatsRoutingModule {
}
