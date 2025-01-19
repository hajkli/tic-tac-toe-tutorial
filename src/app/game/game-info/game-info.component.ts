import { Component, input, output } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
  standalone: true,
  imports: [ModalComponent],
})
export class GameInfoComponent {
  currentPlayer = input<string>();
  winner = input<string | null>();

  resetGame = output<void>();

  onResetGame(): void {
    this.resetGame.emit();
  }
}
