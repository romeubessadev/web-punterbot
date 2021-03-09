import {Component, OnInit, ViewChild} from '@angular/core';
import {UsuarioService} from '../../../auth/services/usuario.service';
import {GridAcao, GridColuna} from '../../../../components/grid/grid.component';
import {FormControl, FormGroup} from '@angular/forms';
import {GridPaginateComponent} from '../../../../components/grid-paginate/grid-paginate.component';
import {ButtonFactory} from '../../../../components/button/button.component';
import {InputFactory} from '../../../../components/input/input.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario-pesquisar',
  templateUrl: './usuario-pesquisar.component.html',
  styleUrls: ['./usuario-pesquisar.component.css']
})
export class UsuarioPesquisarComponent implements OnInit {
  colunas: GridColuna[] = [
    {
      label: 'Código',
      name: 'stringId',
    },
    {
      label: 'Nome',
      name: 'nome',
    },
    {
      label: 'E-mail',
      name: 'email',
    },
    {
      label: 'Contato',
      name: 'contato',
    },
    {
      label: 'Plano',
      name: 'planoLabel',
    }
  ];

  nome = InputFactory.create('nome', 'Usuário', 'Informe o nome do usuário').onlyLetter();
  email = InputFactory.createDisabled('email', 'E-mail', 'Informe o email do usuário');
  contato = InputFactory.create('contato', 'Contato').telefone().required();
  pesquisaForm = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null),
    primeiroNome: new FormControl(null),
    segundoNome: new FormControl(null),
    email: new FormControl(null),
    senha: new FormControl(null),
    contato: new FormControl(null),
    logo: new FormControl(null),
    bloqueado: new FormControl(null),
    plano: new FormControl(null),
    planoLabel: new FormControl(null),
    codigoIndicacao: new FormControl(null),
    dataPrimeiroAcesso: new FormControl(null),
    administrador: new FormControl(null),
    solicitaNovaSenha: new FormControl(null),
  });

  qtd: number;

  @ViewChild(GridPaginateComponent, {static: true}) gridPaginate: GridPaginateComponent;

  pesquisar = ButtonFactory.createPesquisar();
  novo = ButtonFactory.create('Novo', 'success');

  acoes: GridAcao[] = [
    {
      label: 'Editar',
      click: this.editar.bind(this),
      icon: 'ni ni-settings',
      color: 'primary'
    }
  ];

  constructor(
    public router: Router,
    public usuarioService: UsuarioService) {
  }

  editar(usuario, index) {
    this.router.navigate(['/admin/usuario/editar', usuario.stringId]);
  }

  ngOnInit(): void {
    this.usuarioService.buscarQuantidade().subscribe(qtd => {
      this.qtd = qtd;
    });
  }

  irParaNovo() {
    this.router.navigateByUrl('/admin/usuario/novo');
  }
}
