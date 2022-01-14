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
//Who goes first?
// player1 or player2 needs to go first and be displayed on the DOM
  whosTurn() {
    return (this.currentPlayer ? `It's ${this.player1.token}'s turn'` : `It's ${this.player2.token}'s turn'`);
  }

  changeTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

  takeTurn(position) {
    if(!this.board[position].value) {
      if (this.currentPlayer) {
        this.board[position].value = this.player1.token;
        this.changeTurn();
      } else {
        this.board[position].value = this.player2.token;
        this.changeTurn();
      }

      this.checkBoard();
    }


  }

  checkBoard() {
    if (this.board[0].value === this.board[1].value && this.board[0].value === this.board[2].value) {
      this.win(0);
    }

    if (this.board[3].value === this.board[4].value && this.board[3].value === this.board[5].value) {
      this.win(3);
    }

    if (this.board[6].value === this.board[7].value && this.board[6].value === this.board[8].value) {
      this.win(6);
    }

    if (this.board[0].value === this.board[3].value && this.board[0].value === this.board[6].value) {
      this.win(0);
    }

    if (this.board[1].value === this.board[4].value && this.board[1].value === this.board[7].value) {
      this.win(1);
    }

    if (this.board[2].value === this.board[5].value && this.board[2].value === this.board[8].value) {
      this.win(2);
    }

    if (this.board[0].value === this.board[4].value && this.board[0].value === this.board[8].value) {
      this.win(0);
    }

    if (this.board[2].value === this.board[4].value && this.board[2].value === this.board[6].value) {
      this.win(2);
    }

// To get the first row I = 0,1,2
//  To get the second row I = 3,4,5
// To get the third row I = 6,7,8

//To get the first column I = 0,3,6
// To get second column I = 1,4,7
// To get third column I = 2,5,8

// To get left to right diagonal I = 0,4,8
//To get right to left diagonal I = 2,4,6
  }

  win(position) {
    if(this.board[position].value === this.player1.token) {
      this.player1.wins.push(this.board);
      console.log(`Congratulations ${this.player1.token} you won`);
    } else {
      this.player2.wins.push(this.board);
      console.log(`Congratulations ${this.player2.token} you won`);
    }
  }
}
