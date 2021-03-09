import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AuthBaseComponent} from './modules/auth/auth-base.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AutenticacaoInterceptorService} from './modules/auth/services/auteticacao-interceptor.service';

import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {SafePipe} from './components/safe.pipe';
import {LoadingInterceptorService} from './services/loading-interceptor.service';
import {ComprarAgoraComponent} from './components/comprar-agora/comprar-agora.component';
import { TutorialComponent } from './modules/hackrstats/pages/tutorial/tutorial.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

registerLocaleData(ptBr);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    PdfViewerModule,
  ],
  declarations: [
    AppComponent,
    AuthBaseComponent,
    ComprarAgoraComponent,
    TutorialComponent,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AutenticacaoInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true},
  ],
  exports: [
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
