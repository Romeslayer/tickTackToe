var player1 = document.querySelector('.player1-js');
var player2 = document.querySelector('.player2-js');
var turnSection = document.querySelector('.player-turn-js');
var gameBoard = document.querySelector('.game-board-js');
var boardPositions = document.querySelectorAll('.board-positions-js');
var ticTacToe = new Game(new Player(1,'X'), new Player(2,'O'));
window.addEventListener('load', displayPlayer);
gameBoard.addEventListener('click', playTurn);

function displayPlayer(winOrDraw) {
  if (typeof winOrDraw === 'string') {
    turnSection.innerHTML = `<h1>${winOrDraw}<h1>`;
  } else {
    turnSection.innerHTML = `<h1>${ticTacToe.whosTurn()}<h1>`;
  }

}

function playTurn() {
  if(event.target.id) {
    var id = parseInt(event.target.id);
    var winOrDraw = ticTacToe.takeTurn(id);
    displayBoard();
    displayPlayer(winOrDraw);
  }

}

function displayBoard() {
  for (var i = 0; i < boardPositions.length; i++) {
    boardPositions[i].innerHTML = `<p>${ticTacToe.board[i].value}</p>`;
  }
}
