export const HackrstatsConfiguracao: AppConfig = {
  titulo: 'Hackrstats',
  logo: '/assets/images/logo/logo.png',
  menu: [
    {
      icone: 'fas fa-user-friends text-punter',
      caminho: '/admin/usuarios',
      titulo: 'Usuários',
      permissao: 'ADMINISTRADOR'
    },
    {
      icone: 'fas fa-trophy text-punter',
      caminho: '/admin/ligas',
      titulo: 'Campeonatos',
      permissao: 'ADMINISTRADOR'
    },
    {
      icone: 'fas fa-futbol text-punter',
      caminho: '/admin/times',
      titulo: 'Equipes',
      permissao: 'ADMINISTRADOR'
  },
    {
      icone: 'fas fa-heartbeat text-punter',
      caminho: '/jogos-ao-vivo',
      titulo: 'Jogos ao Vivo',
      permissao: 'JOGOS_AO_VIVO'
    },
    {
      icone: 'far fa-calendar-check text-punter',
      caminho: '/jogos-de-hoje',
      titulo: 'Jogos de Hoje',
      permissao: 'JOGOS_HOJE'
    },
    {
      icone: 'far fa-calendar-alt text-punter',
      caminho: '/jogos-amanha',
      titulo: 'Jogos de Amanhã',
      permissao: 'JOGOS_AMANHA'
    },
  ],
  robo: [
    {
      icone: 'fas fa-sliders-h text-punter',
      caminho: '/robo',
      titulo: 'Minhas Estratégias',
      permissao: 'ROBO'
    }
  ],
  social: [
    {
      caminho: '/grupo-exclusivo',
      icone: 'fas fa-users text-punter',
      titulo: 'Grupo Exclusivo'
    },
    {
      caminho: '/duvidas-suporte',
      icone: 'fas fa-question-circle text-punter',
      titulo: 'Dúvidas e Suporte'
    },
    {
      caminho: '/tutorial',
      icone: 'fas fa-user-graduate text-punter',
      titulo: 'Área do Aluno'
    }
  ],
  urlLoadingIgnore: [
  ]
};

export interface AppConfig {
  titulo: string;
  logo: string;
  menu: MenuLink[];
  social: MenuLink[];
  robo: MenuLink[];
  urlLoadingIgnore?: string[];
}

export interface MenuLink {
  caminho: string;
  titulo: string;
  icone: string;
  class?: string;
  permissao?: string;
}
