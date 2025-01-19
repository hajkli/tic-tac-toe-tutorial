import {
  Component,
  Signal,
  input,
  output,
  OutputEmitterRef,
} from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  standalone: true,
})
export class GameBoardComponent {
  board = input<string[][]>([[]]);
  cellClick = output<{ row: number; col: number }>();

  onCellClick(row: number, col: number): void {
    this.cellClick.emit({ row, col });
  }
}
