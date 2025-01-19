import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ModalComponent {
  title = input.required<string>();
  message = input.required<string>();
  buttonText = input<string>('Close');

  modalClose = output<void>();

  onModalClose(): void {
    this.modalClose.emit();
  }
}
