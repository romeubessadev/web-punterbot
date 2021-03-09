import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Usuario, UsuarioForm, UsuarioService} from '../../../auth/services/usuario.service';
import {ButtonFactory} from '../../../../components/button/button.component';
import {ImageBase64} from '../modal-image-resize/modal-image-resize.component';
import {AutenticacaoService} from '../../../auth/services/autenticacao.service';

@Component({
    selector: 'app-usuario-form',
    templateUrl: './usuario-form.component.html',
    styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
    @ViewChild('fotoUsuario', {static: true}) viewFotoUsuario: ElementRef<any>;

    @Input() usuario: Usuario;
    @Input() titulo: string;

    @Input() btnSalvar = ButtonFactory.block('Salvar meus Dados', 'primary');
    @Input() btnFoto = ButtonFactory.create(null, 'primary', 'button', 'fas fa-camera')
        .addClass('btn-secondary btn-sm');

    @Output() salvar: EventEmitter<UsuarioForm> = new EventEmitter<UsuarioForm>();

    usuarioForm: UsuarioForm;

    constructor(private usuarioService: UsuarioService) {
    }

    ngOnInit(): void {
        this.usuarioForm = new UsuarioForm(this.usuarioService);
        this.usuarioForm.set(this.usuario);
    }

    emmitSalvar() {
        this.salvar.emit(this.usuarioForm);
    }

    fotoDePerfilMudou(image: ImageBase64) {
        this.usuarioForm.imagem.base64 = image.split(',')[1];
        fetch(image)
            .then(res => {
                res.blob().then(blob => this.usuarioForm.imagem.url = URL.createObjectURL(blob));
            });
    }

    public ehAdministrador(): boolean {
        return AutenticacaoService.UsuarioAdministrador();
    }

}
