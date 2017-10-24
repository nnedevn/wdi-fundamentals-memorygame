/*jslint  browser:true, white:true  */

/*global 
  alert, console
*/



var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
  'use strict';

  if (cardsInPlay.length === 2) {

    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    } else {
      alert('Sorry, try again');
    }
  }
}

function flipCard(cardId) {
'use strict';
  console.log('User flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}



flipCard(2);
flipCard(0);



// var cardOne = cards[0];
// var cardTwo = cards[2];
// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

// console.log('User flipped queen');
// console.log('User flipped ' + cardsInPlay[1]);