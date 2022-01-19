# Tic Tac Toe

## Overview

Simple game of Tic Tac Toe. This game is for two players and to win a player would need to line up their tokens three in a row, column or diagonal.


### Project Motivation

The Tic Tac Toe project aims to teach me how the DOM and Data Model works with JavaScript, CSS, and HTML to create functional and interactive websites.


## Project Information
#### Technologies Used
* JavaScript
* HTML
* CSS

#### Code Architecture
* The Data model used is the Game class instance that is created.
* The instance of the Game is created using two instances of the Player class
* The DOM is then updated using the Game instance's information.

#### Code Sample

```javascript
function playTurn() {
  if (event.target.id) {
    var id = parseInt(event.target.id);
    var winOrDraw = ticTacToe.takeTurn(id);
    displayBoard();
    displayPlayerTurn(winOrDraw);
  }
}
```

### Installation

1. To edit this repository:
  * navigate to repo on `github.com` or use [this link](https://github.com/Romeslayer/ticTacToe)
  * choose `fork`
  * `clone` to local machine
2. `cd` into repository
3. Open in your text editor
4. To view webpage, run the command `open index.html` in your terminal

## User Instructions

* After installation, the main page of the application will be displayed

![Screen Shot 2022-01-18 at 5 02 32 PM](https://user-images.githubusercontent.com/20838033/150039167-53cb1063-327d-4864-a900-09c0904ea205.png)



&nbsp;
* The text above the board will say who's turn it is
* Click on an open spot to play your turn

![Screen Shot 2022-01-18 at 5 03 00 PM](https://user-images.githubusercontent.com/20838033/150039402-2c1a6bac-0036-4b82-81f5-a24f7ffc55e1.png)


&nbsp;
* After a player connects three in a row, column, or diagonal
* The board will reset
* Winning player will receive another win.


![Screen Shot 2022-01-18 at 5 03 18 PM](https://user-images.githubusercontent.com/20838033/150039598-c8bd87d5-9c42-49ca-b0a0-a0269eeb1adc.png)

### Credits

Author of the Tic Tac Toe:  [DéNaje Ferguson](https://github.com/Romeslayer/)
