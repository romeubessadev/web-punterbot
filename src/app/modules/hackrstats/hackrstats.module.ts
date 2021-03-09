import {NgModule} from '@angular/core';

import {ClipboardModule} from 'ngx-clipboard';

import {HackrstatsRoutingModule} from './hackrstats.routing';
import {UltimosJogosComponent} from './components/ultimos-jogos/ultimos-jogos.component';
import {JogosDeHojePesquisarComponent} from './pages/jogos-de-hoje-pesquisar/jogos-de-hoje-pesquisar.component';
import {JogoDetalheComponent} from './pages/jogos-de-hoje-pesquisar/jogos-de-hoje-detalhe/jogo-detalhe.component';
import {ComponentsModule} from '../../components/components.module';
import {HackrstatsDashboardComponent} from './pages/hackrstats-dashboard/hackrstats-dashboard.component';
import {HackrstatsRoutesComponent} from './components/hackrstats-routes/hackrstats-routes.component';
import {HackrstatsBaseComponent} from './hackrstats-base.component';
import {UsuarioPerfilComponent} from './pages/usuario-perfil/usuario-perfil.component';
import {AtivacaoComponent} from './pages/ativacao/ativacao.component';
import {UsuarioPesquisarComponent} from './pages/usuario-pesquisar/usuario-pesquisar.component';
import {LigaPesquisarComponent} from './pages/liga-pesquisar/liga-pesquisar.component';
import {TimePesquisarComponent} from './pages/time-pesquisar/time-pesquisar.component';
import {AdminRoutesComponent} from './components/admin-routes/admin-routes.component';
import {JogosAoVivoPesquisarComponent} from './pages/jogos-ao-vivo-pesquisar/jogos-ao-vivo-pesquisar.component';
import {JogosAoVivoDetalheComponent} from './pages/jogos-ao-vivo-pesquisar/jogos-ao-vivo-detalhe/jogos-ao-vivo-detalhe.component';
import {JogosAmanhaPesquisarComponent} from './pages/jogos-amanha-pesquisar/jogos-amanha-pesquisar.component';
import {JogosAmanhaDetalheComponent} from './pages/jogos-amanha-pesquisar/jogos-amanha-detalhe/jogos-amanha-detalhe.component';
import {UsuarioDetalheComponent} from './pages/usuario-pesquisar/usuario-detalhe/usuario-detalhe.component';
import {UsuarioFormComponent} from './components/usuario-form/usuario-form.component';
import {LigaDetalheComponent} from './pages/liga-pesquisar/liga-detalhe/liga-detalhe.component';
import {TimeDetalheComponent} from './pages/time-pesquisar/time-detalhe/time-detalhe.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ModalImageResizeComponent} from './components/modal-image-resize/modal-image-resize.component';
import {ImageResizeComponent} from './components/image-resize/image-resize.component';
import {JogoPesquisaComponent} from './components/jogo-pesquisa/jogo-pesquisa.component';
import {FiltroEstatisticaComponent} from './components/filtro-estatistica/filtro-estatistica.component';
import {GrupoExclusivoComponent} from './pages/grupo-exclusivo/grupo-exclusivo.component';
import {DuvidasSuporteComponent} from './pages/duvidas-suporte/duvidas-suporte.component';
import {CardIconComponent} from './components/card-icon/card-icon.component';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ImageCropperModule,
    HackrstatsRoutingModule,
    ComponentsModule,
    ClipboardModule,
    NgbTooltipModule
  ],
  exports: [
  ],
  declarations: [
    // Paginas
    UsuarioPerfilComponent,
    JogosDeHojePesquisarComponent,
    JogoDetalheComponent,
    HackrstatsDashboardComponent,
    AtivacaoComponent,
    UsuarioPesquisarComponent,
    LigaPesquisarComponent,
    TimePesquisarComponent,
    JogosAoVivoPesquisarComponent,
    JogosAoVivoDetalheComponent,
    JogosAmanhaPesquisarComponent,
    JogosAmanhaDetalheComponent,
    UsuarioDetalheComponent,
    LigaDetalheComponent,
    TimeDetalheComponent,
    GrupoExclusivoComponent,
    DuvidasSuporteComponent,
    // componentes
    UsuarioFormComponent,
    HackrstatsBaseComponent,
    AdminRoutesComponent,
    HackrstatsRoutesComponent,
    UltimosJogosComponent,
    ImageResizeComponent,
    ModalImageResizeComponent,
    JogoPesquisaComponent,
    FiltroEstatisticaComponent,
    CardIconComponent,
  ]
})

export class HackrstatsModule {
}
