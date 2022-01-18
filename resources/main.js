var player1 = document.querySelector('.player1-js');
var player2 = document.querySelector('.player2-js');
var turnSection = document.querySelector('.player-turn-js');
var gameBoard = document.querySelector('.game-board-js');
var ticTacToe = new Game(new Player(1,'X'), new Player(2,'O'));

gameBoard.addEventListener('click', playTurn)


function playTurn() {
  ticTacToe.takeTurn(parseInt(event.target.id))
}

function displayBoard() {

}
