import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

/**
 * Modal component body'e eklenmelidir.
 * Çünkü tüm sayfayı kaplamalıdır.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeEvent = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.closeEvent.emit();
  }
}
