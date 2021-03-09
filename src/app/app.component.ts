import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PaginaService} from './services/pagina.service';
import {filter, map, mergeMap} from 'rxjs/operators';
import {HackrstatsConfiguracao} from './app-config';
import {Subscription} from 'rxjs';
import {InfoPagina} from './factories/route-factory';
import {AutenticacaoService} from './modules/auth/services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  private unsubscribe: Subscription[] = [];
  private page: InfoPagina;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private appTitleService: PaginaService) {
    this.page = {titulo: HackrstatsConfiguracao.titulo};
  }

  ngOnInit(): void {
    // enable/disable loader
    const routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data))
      .subscribe((infoPage: InfoPagina) => {
        // this.splashScreenService.hide();

        if (infoPage) {
          this.appTitleService.atualPagina = infoPage;
        } else {
          this.appTitleService.atualPagina = this.page;
        }

        // window.scrollTo(0, 0);
        //
        // // to display back the body content
        // setTimeout(() => {
        //   document.body.classList.add('kt-page--loaded');
        // }, 500);
      });

    this.unsubscribe.push(routerSubscription);
  }

  /**
   * On Destroy
   */
  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  usuarioGratis(): boolean {
    return AutenticacaoService.UsuarioPlanoGratis();
  }

}
