import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputFactory} from '../../../../components/input/input.component';
import {AutenticacaoService, LoginRequest, LoginResponse} from '../../services/autenticacao.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ButtonFactory} from '../../../../components/button/button.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm = new FormGroup({});

    inputEmail = InputFactory.create('email', 'E-mail', 'email')
        .setIcon('ni ni-email-83 text-white');

    inputSenha = InputFactory.create('senha', 'Senha', 'password')
        .setIcon('fas fa-lock text-white');

    @Input() titulo = 'Recuperar Senha';
    private _returnUrl: any;
    private _msgError: string;
    public recuperar: any;

    btnEntrar = ButtonFactory.block('ACESSAR', 'success', 'submit', '').addClass(' btn-sm');
    btnNaoSouCadastrado = ButtonFactory.block('AINDA NÃO SOU CADASTRADO', 'success', 'submit', '');

    constructor(private authService: AutenticacaoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/home';

        const email = localStorage.getItem('email');
        if (email) {
            this.inputEmail.value = email;
        }
    }

    ngOnDestroy() {
    }

    public login() {
        this._msgError = null;
        const login: LoginRequest = this.loginForm.getRawValue();

        this.authService.efetuarLogin(login)
            .subscribe((response: LoginResponse) => {
                if (response) {
                    localStorage.setItem('email', login.email);

                    if (response.solicitaSenha) {
                        this.router.navigateByUrl('/seguranca/senha');
                    } else {
                        this.router.navigateByUrl(this._returnUrl);
                    }

                } else {
                    this.loginError();
                }
            }, error => {
                console.log(error);
                if (error.mensagem) {
                    this.loginError(error.mensagem);
                } else {
                    this.loginError();
                }
            });
    }

    private loginError(msg: string = 'E-mail ou senha inválidos') {
        this._msgError = msg;
    }

    recuperarSenha(): void {
        this.recuperar = true;
    }

    close(): void {
        this.recuperar = false;
    }

    get msgError(): string {
        return this._msgError;
    }
}
