import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ButtonFactory} from '../../../../components/button/button.component';
import {ImageBase64, ModalImageResizeComponent} from '../modal-image-resize/modal-image-resize.component';

@Component({
  selector: 'app-image-resize',
  templateUrl: './image-resize.component.html',
  styleUrls: ['./image-resize.component.css']
})
export class ImageResizeComponent implements OnInit {
  @Input() titulo = 'Redimensionar Imagem';

  @Input() btnFoto = ButtonFactory.create(null, 'primary', 'button', 'fas fa-camera')
    .addClass('btn-secondary btn-sm');

  @Output() eventImageCropped: EventEmitter<ImageBase64> = new EventEmitter<ImageBase64>();
  @ViewChild(ModalImageResizeComponent, {static: false}) modal: ModalImageResizeComponent;

  imageChangedEvent: any;

  constructor() {
  }

  ngOnInit(): void {
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.modal.openModel();
  }


}
