import {Type} from '@angular/core';
import {AuthGuard} from '../modules/auth/services/auth-guard';

export class RouteFactory {
  public static createRouteChildren(path: string, component: Type<any>, title?: string, children?: any[], authGuard: boolean = true) {
    return {
      path,
      canActivate: authGuard ? [AuthGuard] : null,
      component,
      data: RouteFactory.createRouteConfig(title, null),
      children
    };
  }

  public static createRoute(path: string, component: Type<any>, title: string, roles?: string[], authGuard: boolean = true) {
    return {
      path,
      canActivate: authGuard ? [AuthGuard] : null,
      component,
      data: RouteFactory.createRouteConfig(title, roles),
    };
  }

  public static createRouteRedirect(path: string, redirect: string, pathMath?: string) {
    return {
      path,
      redirectTo: redirect,
      pathMatch: pathMath
    };
  }

  public static createLoadChildren(path: string, loadChildren: any) {
    return {path, loadChildren};
  }

  public static createRouteConfig(titulo: string, roles?: string[]): InfoPagina {
    return {titulo, roles};
  }
}

export interface InfoPagina {
  titulo: string;
  roles?: string[];
}
