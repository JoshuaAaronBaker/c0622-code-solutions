console.log('Lodash is loaded:', typeof _ !== 'undefined');
// make array that will store objects, these objects will hold a player name(string) and a hand(array)
// make array that will hold all the suits, suits will be strings
// make a array that will hold the value of the cards, 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'
// make variable to hold an empty array, this will be the deck
// loop through the array that holds the suits
// inside the previous loop, loop through the values array
// push an object into the deck array that contains the rank from the values array and a suit from the suits array
// shuffle the deck using the lodash _.shuffle function and assign it to the variable shuffled deck
// make an empty array to hold the player scores
// loop through the players array
// deal two cards to each player from the deck array and delete the card that was deleted to prevent players from having duplicated cards
// inside previous loop, loop that through the hand array within the players object
// check if value is 'Jack', 'Queen', or 'King'. If true, change value to 10.
// check if value is "Ace", if true change to 11.
// within the first loop, push an object in the playerScore array that contains the score (total value of the hand) and the player name
// make null and assign it to the variable winner
// make the number 0 and assign it to the variable highestScore
// loop through the playerScore array to find the highest score out of all four players
// write another if statement that checks if the highest score is equal to any of the player score
// When it finds the match, set the name of the player equal to the variable winner
// log the winner to console

var players = [
  {
    name: 'Bro',
    hand: []
  },
  {
    name: 'Bruh',
    hand: []
  },
  {
    name: 'Bru',
    hand: []
  },
  {
    name: 'Fam',
    hand: []
  }
];

var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = [];

for (var i = 0; i < suits.length; i++) {
  for (var n = 0; n < values.length; n++) {
    deck.push({
      rank: values[n],
      suit: suits[i]
    });
  }
}

var shuffledDeck = _.shuffle(deck);
var playerScores = [];
for (var d = 0; d < players.length; d++) {
  players[d].hand.push(shuffledDeck[0]);
  shuffledDeck.splice(0, 1);
  players[d].hand.push(shuffledDeck[1]);
  shuffledDeck.splice(1, 1);
  for (var r = 0; r < players[d].hand.length; r++) {
    if (players[d].hand[r].rank === 'Jack' || players[d].hand[r].rank === 'Queen' || players[d].hand[r].rank === 'King') {
      players[d].hand[r].rank = 10;
    } else if (players[d].hand[r].rank === 'Ace') {
      players[d].hand[r].rank = 11;
    }
  }
  playerScores.push({
    score: players[d].hand[0].rank + players[d].hand[1].rank,
    name: players[d].name
  });
}

var winner = null;
var highestScore = 0;
for (var w = 0; w < playerScores.length; w++) {
  if (playerScores[w].score > highestScore) {
    highestScore = playerScores[w].score;
  }
  if (highestScore === playerScores[w].score) {
    winner = playerScores[w].name;
  }
}

console.log(playerScores);
console.log('SHEEEEEEEEEEEEEEEEEEEEEEESH YOU WON!: SIIIUUUUUUUUU', winner);
