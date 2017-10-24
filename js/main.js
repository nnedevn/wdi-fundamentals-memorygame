/*jslint browser:true, white:true  */

/*global 
  alert, console, 
*/

var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
}, {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
}, {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
}, {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay = [];

/*
 * Checks if rank of the clicked cards matches.
 * @param {object} obj - necessary due to strict mode.
 * @param {string} cardId - Clicked card's ID.
 */
function checkForMatch(obj, cardId) {
  'use strict';

  obj.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {
      alert('You found a match!');
    } else {
      alert('Sorry, try again');
    }
  }
}

/*
 * Gets the data-id of the clicked card, pushes it 
 * into an array and checks for matching cards
 */
function flipCard() {
  'use strict';

  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cardId);
  checkForMatch(this, cardId);
}

/*
 * Creates the board
 */
function createBoard() {
  'use strict';
  var i = null;
  var cardElement = null;

  for (i = 0; i < cards.length; i += 1) {
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
