import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AutenticacaoService} from './autenticacao.service';
import {Usuario} from './usuario.service';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // Caso não tenha o esteja autenticado volta para Tela de Login
    const user = AutenticacaoService.UserLocalStorage();
    if (!user) {
      this.router.navigate(['/seguranca/'], {queryParams: {returnUrl: state.url}});
      return false;
    }

    if (user.solicitaNovaSenha) {
      this.router.navigate(['/seguranca/senha']);
    } else if (!user.dataPrimeiroAcesso) {
      this.router.navigate(['/ativar-conta']);
    }

    const roles = route.data.roles;
    // Se a tela nao tiver role configurada retorna para tela
    if (roles == null) {
      return true;
    }

    // Se o Usuario nao tiver todas as permissoes da rota volta ele para /
    if (!this.usuarioTemTodasPermissoesDaRota(user, roles)) {
      if (!environment.production) {
        console.info('Sem Permissão para acessar tela');
      }
      this.router.navigateByUrl('/');
    }

    return true;
  }

  private usuarioTemTodasPermissoesDaRota(usuario: Usuario, rolesTela: string[]) {
    const rolesUsuario: string[] = usuario.roles;
    if (!rolesUsuario) {
      return false;
    }

    let usuarioPossuiRole = true;

    rolesTela.forEach(permissaoTela => {
      if (!rolesUsuario.includes(permissaoTela)) {
        usuarioPossuiRole = false;
      }
    });

    return usuarioPossuiRole;
  }

}
