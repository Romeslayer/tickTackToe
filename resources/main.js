var player1 = document.querySelector('.player1-js');
var player2 = document.querySelector('.player2-js');
var turnSection = document.querySelector('.player-turn-js');
var gameBoard = document.querySelector('.game-board-js');
var boardPositions = document.querySelectorAll('.board-positions-js');
var ticTacToe = new Game(new Player(1,'X'), new Player(2,'O'));
window.addEventListener('load', displayPlayerTurn);
window.addEventListener('load', displayPlayers);
gameBoard.addEventListener('click', playTurn);
function displayPlayers() {
  player1.innerHTML = `<h1>${ticTacToe.player1.token}</h1>
    <p>${ticTacToe.player1.wins.length} Wins</p>`;
  player2.innerHTML = `<h1>${ticTacToe.player2.token}</h1>
    <p>${ticTacToe.player2.wins.length} Wins</p>`;
}

function displayPlayerTurn(winOrDraw) {
  if (typeof winOrDraw === 'string') {
    turnSection.innerHTML = `<h1 class="player-${!ticTacToe.currentPlayer ? '1' : '2'}-color">${winOrDraw}<h1>`;
    resetBoard();
  } else {
    turnSection.innerHTML = `<h1 class="player-${ticTacToe.currentPlayer ? '1' : '2'}-color">${ticTacToe.whosTurn()}<h1>`;
  }

}

function playTurn() {
  if (event.target.id) {
    var id = parseInt(event.target.id);
    var winOrDraw = ticTacToe.takeTurn(id);
    displayBoard();
    displayPlayerTurn(winOrDraw);
  }
}

function displayBoard() {
  for (var i = 0; i < boardPositions.length; i++) {
    boardPositions[i].innerHTML = `<p class="player-${ticTacToe.board[i].value === ticTacToe.player1.token ? '1' : '2'}-color">${ticTacToe.board[i].value}</p>`;
  }
}

function resetBoard() {
  setTimeout(ticTacToe.clearBoard.bind(ticTacToe), 4000);
  setTimeout(displayBoard, 4000);
  setTimeout(displayPlayerTurn, 4000)
  setTimeout(displayPlayers, 4000);
}
