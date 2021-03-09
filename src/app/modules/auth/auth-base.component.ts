import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AutenticacaoService} from './services/autenticacao.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-base.component.html',
  styleUrls: ['./auth-base.component.scss']
})
export class AuthBaseComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AutenticacaoService) {
    const returnUrl = this.activatedRoute.snapshot.queryParams['url'] || '/';

    if (this.authService.logado) {
      this.router.navigate([returnUrl]);
    }
  }

  ngOnInit() {
    var html = document.getElementsByTagName('html')[0];
    html.classList.add('auth-layout');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-default');
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }

  ngOnDestroy() {
    var html = document.getElementsByTagName('html')[0];
    html.classList.remove('auth-layout');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('bg-default');
  }
}
