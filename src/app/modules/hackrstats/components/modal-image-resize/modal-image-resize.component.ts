import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {ModalComponent} from '../../../../components/modal/modal.component';
import {ButtonFactory} from '../../../../components/button/button.component';

@Component({
  selector: 'app-modal-image-resize',
  templateUrl: './modal-image-resize.component.html',
  styleUrls: ['./modal-image-resize.component.css']
})
export class ModalImageResizeComponent implements OnInit {
  @Input() imageChangedEvent: any = '';
  @Input() titulo;

  @Output() eventEmitterImage: EventEmitter<ImageBase64> = new EventEmitter<ImageBase64>();
  croppedImage: ImageBase64;

  @ViewChild(ModalComponent, {static: true}) modal;
  event: EventEmitter<void> = new EventEmitter<void>();

  btnSalvarFoto = ButtonFactory.block('Salvar', 'success');
  ready: boolean;


  openModel() {
    this.modal.open();
  }

  constructor() {
  }

  ngOnInit(): void {
    this.openModel();
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  cropperReady() {
    this.ready = true;
  }

  loadImageFailed() {
    this.ready = false;
  }

  salvarFoto() {
    this.eventEmitterImage.emit(this.croppedImage);
    this.modal.close();
  }
}

export type ImageBase64 = string;
