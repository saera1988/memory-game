//console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo ="king";
var cardThree = "";
var cardFour = "";*/

/*console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/

var cards = ["queen","queen", "king", "king"];

var  cardsInPlay = new Array();

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2) 
{
	if (cardsInPlay[0] === cardsInPlay[1] )
{
  alert("You found a match!");
    // condition is true
}
else
{
    alert("Sorry, try again.");
    // condition is false
}

}