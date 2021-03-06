class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = Math.random() < 0.5;
    this.board = [
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      },
      {
        value: ''
      }
    ];
  }

  whosTurn() {
    return (this.currentPlayer ? `It's ${this.player1.token}'s turn` : `It's ${this.player2.token}'s turn`);
  }

  changeTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

  takeTurn(position) {
    if (!this.board[position].value) {
      if (this.currentPlayer) {
        this.board[position].value = this.player1.token;
        this.changeTurn();
      } else {
        this.board[position].value = this.player2.token;
        this.changeTurn();
      }

      return this.checkBoard();
    }
  }

  checkBoard() {
    var boardFull = false;
    if (this.board[0].value === this.board[1].value && this.board[0].value === this.board[2].value && this.board[0].value !== '') {
      return this.win(0);
    } else if (this.board[3].value === this.board[4].value && this.board[3].value === this.board[5].value && this.board[3].value !== '') {
      return this.win(3);
    } else if (this.board[6].value === this.board[7].value && this.board[6].value === this.board[8].value && this.board[6].value !== '') {
      return this.win(6);
    } else if (this.board[1].value === this.board[4].value && this.board[1].value === this.board[7].value && this.board[1].value !== '') {
      return this.win(1);
    } else if (this.board[2].value === this.board[5].value && this.board[2].value === this.board[8].value && this.board[2].value !== '') {
      return this.win(2);
    } else if (this.board[0].value === this.board[4].value && this.board[0].value === this.board[8].value && this.board[0].value !== '') {
      return this.win(0);
    } else if (this.board[2].value === this.board[4].value && this.board[2].value === this.board[6].value && this.board[2].value !== '') {
      return this.win(2);
    } else if (this.board[0].value === this.board[3].value && this.board[0].value === this.board[6].value && this.board[0].value !== '') {
      return this.win(0);
    }

    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i].value) {
        boardFull = true;
      } else {
        boardFull = false;
        break;
      }
    }

    if (boardFull)  return this.draw();
  }

  win(position) {
    if (this.board[position].value === this.player1.token) {
      this.player1.wins.push(this.board);
      return `Congratulations ${this.player1.token} you won!`;
    } else if (this.board[position].value === this.player2.token) {
      this.player2.wins.push(this.board);
      return `Congratulations ${this.player2.token} you won!`;
    }
  }

  draw() {
    return `It's a Draw!`;
  }

  clearBoard() {
    for (var i = 0; i < this.board.length; i++) {
      this.board[i].value = '';
    }
  }
}
