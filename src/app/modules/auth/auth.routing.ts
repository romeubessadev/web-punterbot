import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AuthBaseComponent} from './auth-base.component';
import {RouteFactory} from '../../factories/route-factory';
import {SolicitaSenhaComponent} from './pages/solicita-senha/solicita-senha.component';

const routes: Routes = [
  RouteFactory.createRouteChildren('', AuthBaseComponent, null, [
    RouteFactory.createRoute('login', LoginComponent, 'Login | Punter Bot', null, false),
    RouteFactory.createRoute('senha', SolicitaSenhaComponent, 'Nova Senha', null, false),
    RouteFactory.createRouteRedirect('', 'login', 'full'),
    RouteFactory.createRouteRedirect('**', 'login', 'full')
  ], false),
  RouteFactory.createRouteRedirect('', '', 'full'),
  RouteFactory.createRouteRedirect('**', '', 'full')
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
