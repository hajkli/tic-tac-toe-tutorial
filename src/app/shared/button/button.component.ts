import { Component, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  click = output<void>();

  onClick(): void {
    this.click.emit();
  }
}
