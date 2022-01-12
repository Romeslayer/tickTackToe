class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = Math.random() < 0.5;
    this.board = [
      {
        position: 1,
        value: ''
      },
      {
        position: 2,
        value: ''
      },
      {
        position: 3,
        value: ''
      },
      {
        position: 4,
        value: ''
      },
      {
        position: 5,
        value: ''
      },
      {
        position: 6,
        value: ''
      },
      {
        position: 7,
        value: ''
      },
      {
        position: 8,
        value: ''
      },
      {
        position: 9,
        value: ''
      }
    ];
  }
//Who goes first?
// player1 or player2 needs to go first and be displayed on the DOM
  whosTurn() {
    return (this.currentPlayer ? `It's ${this.player1.token}'s turn'` : `It's ${this.player2.token}'s turn'`);
  }

  changeTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

  takeTurn(position) {
    if(this.currentPlayer) {
      this.board[position].value = this.player1.token;
      this.changeTurn();
    } else {
      this.board[position].value = this.player2.token;
      this.changeTurn();
    }

    this.checkBoard();
  }

  checkBoard() {
    if(this.board[0].value === this.board[1].value && this.board[0].value === this.board[2].value) {
      if(this.board.value === this.player1.token) {
        this.player1.wins.push(1);
        console.log(`Congratulations ${this.player1.token} you won`)
      } else {
        this.player2.wins.push(1);
        console.log(`Congratulations ${this.player2.token} you won`)
      }
    }
  }

}
