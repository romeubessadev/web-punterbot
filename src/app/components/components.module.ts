import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BadgeComponent} from './badge/badge.component';
import {CardComponent} from './panel/card.component';
import {SwitchComponent} from './switch/switch.component';
import {GridComponent, GridTemplateDirective} from './grid/grid.component';
import {InputComponent} from './input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from './button/button.component';
import {CardStatsComponent} from './card-stats/card-stats.component';
import {AvatarComponent} from './avatar/avatar.component';
import {InputLoginComponent} from './input-login/input-login.component';
import {NgxMaskModule} from 'ngx-mask';
import {SafePipe} from './safe.pipe';
import {ObjectUrl} from './object-url';
import {RoleDirective} from './role.directive';
import {GridPaginateComponent} from './grid-paginate/grid-paginate.component';
import {MensagemComponent} from './mensagem/mensagem.component';
import {SelectComponent} from './select/select.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ModalComponent} from './modal/modal.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {SliderComponent} from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ImageCropperModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    RoleDirective
  ],
  declarations: [
    // base components
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    // components
    BadgeComponent,
    CardComponent,
    GridComponent,
    ButtonComponent,
    CardStatsComponent,
    AvatarComponent,
    GridPaginateComponent,
    MensagemComponent,
    SelectComponent,
    ModalComponent,
    LoadingSpinnerComponent,
    // elements
    SwitchComponent,
    InputLoginComponent,
    InputComponent,
    SliderComponent,
    // directives
    GridTemplateDirective,
    RoleDirective,
    //pipes
    SafePipe,
    ObjectUrl
  ],
  exports: [
    //modules
    CommonModule,
    FormsModule,
    // base components
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SelectComponent,
    // components
    BadgeComponent,
    CardComponent,
    GridComponent,
    ButtonComponent,
    CardStatsComponent,
    AvatarComponent,
    GridPaginateComponent,
    MensagemComponent,
    ModalComponent,
    LoadingSpinnerComponent,
    // elements
    SwitchComponent,
    InputComponent,
    InputLoginComponent,
    SliderComponent,
    // directives
    GridTemplateDirective,
    RoleDirective,
    //pipes
    SafePipe,
    ObjectUrl
  ]
})
export class ComponentsModule {
}
