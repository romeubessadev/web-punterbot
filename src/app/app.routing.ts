import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {RouteFactory} from './factories/route-factory';

const routes: Routes = [
  RouteFactory.createLoadChildren('seguranca', () => import('./modules/auth/auth.module').then(m => m.AuthModule)),
  RouteFactory.createLoadChildren('', () => import('./modules/hackrstats/hackrstats.module').then(m => m.HackrstatsModule)),
  RouteFactory.createRouteRedirect('**', '', 'full')
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
})
export class AppRoutingModule {
}
