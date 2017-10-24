/*jslint  browser:true, white:true  */

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


function checkForMatch(obj, cardId) {
  'use strict';

  obj.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    } else {
      alert('Sorry, try again');
    }
  }
}


function flipCard() {
  'use strict';

  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cardId);
  checkForMatch(this, cardId);
}


function createBoard() {
  'use strict';

  for (var i = 0; i < cards.length; i += 1) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();