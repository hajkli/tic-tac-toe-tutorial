import { Component, signal } from '@angular/core';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  standalone: true,
  imports: [GameBoardComponent, GameInfoComponent, ButtonComponent],
})
export class GameComponent {
  currentPlayer = signal<string>('X');
  winner = signal<string | null>(null);

  board = signal<string[][]>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(''))
  );

  resetGame(): void {
    this.board.set(
      Array(3)
        .fill(null)
        .map(() => Array(3).fill(''))
    );
    this.currentPlayer.set('X');
    this.winner.set(null);
  }

  makeMove(row: number, col: number): void {
    if (this.board()[row][col] || this.winner()) return;

    const updatedBoard = this.board().map((rowArray, rowIndex) =>
      rowArray.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? this.currentPlayer() : cell
      )
    );
    this.board.set(updatedBoard);

    if (this.checkWin()) {
      this.winner.set(this.currentPlayer());
    } else {
      this.currentPlayer.set(this.currentPlayer() === 'X' ? 'O' : 'X');
    }
  }

  checkWin(): boolean {
    const b = this.board();
    const size = b.length;

    const rows = b;
    const columns = Array.from({ length: size }, (_, col) =>
      Array.from({ length: size }, (_, row) => b[row][col])
    );
    const diagonals = [
      Array.from({ length: size }, (_, i) => b[i][i]),
      Array.from({ length: size }, (_, i) => b[i][size - i - 1]),
    ];

    const lines = [...rows, ...columns, ...diagonals];

    return lines.some((line) =>
      line.every((cell) => cell === this.currentPlayer())
    );
  }
}
