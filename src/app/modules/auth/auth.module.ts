import {NgModule} from '@angular/core';


import {LoginComponent} from './pages/login/login.component';
import {AuthRoutingModule} from './auth.routing';
import {ComponentsModule} from '../../components/components.module';
import {SolicitaSenhaComponent} from './pages/solicita-senha/solicita-senha.component';
import {HackrstatsModule} from '../hackrstats/hackrstats.module';

@NgModule({
  declarations: [
    LoginComponent,
    SolicitaSenhaComponent,
  ],
    imports: [
        AuthRoutingModule,
        ComponentsModule,
        HackrstatsModule,
        // NgbModule
    ],
})
export class AuthModule {
}
