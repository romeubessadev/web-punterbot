import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AutenticacaoService} from '../modules/auth/services/autenticacao.service';

@Directive({
  selector: '[temRole]',
})
export class RoleDirective implements OnInit, OnDestroy {
  @Input() temRole: string;

  stop$ = new Subject();

  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private autenticacaoService: AutenticacaoService) {
  }

  ngOnInit() {
    // senao especificar a role, considera como erro de codigo, mostra o conteudo
    if (!this.temRole) {
      this.show();
      return;
    }

    this.autenticacaoService.usuarioLogado
      .pipe(takeUntil(this.stop$))
      .subscribe(usuario => {
        if (usuario) {
          // usuario sem roles, esconde conteudo
          if (!usuario.roles) {
            this.hide();
          }

          // verifica se o usuario possui a role
          if (usuario.roles.includes(this.temRole)) {
            // se nao tiver visivel ja, mostra
            if (!this.isVisible) {
              this.show();
            }
          } else {
            this.hide();
          }
        }
      });
  }

  private clear() {
    this.viewContainerRef.clear();
  }

  private hide() {
    this.isVisible = false;
    this.clear();
  }

  private show() {
    this.isVisible = true;
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  ngOnDestroy() {
    this.stop$.next();
  }
}


