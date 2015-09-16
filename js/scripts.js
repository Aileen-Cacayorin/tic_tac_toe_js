// Used MDN array protoype so that we can have an includes method


Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
  'use strict';
  var O = Object(this);
  var len = parseInt(O.length) || 0;
  if (len === 0) {
    return false;
  }
  var n = parseInt(arguments[1]) || 0;
  var k;
  if (n >= 0) {
    k = n;
  } else {
    k = len + n;
    if (k < 0) {k = 0;}
  }
  var currentElement;
  while (k < len) {
    currentElement = O[k];
    if (searchElement === currentElement ||
      (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };





function Player (mark) {
  this.mark = mark;
  this.spaces = [];
  // this.win = false
}

Player.prototype.move = function(move) {
  this.spaces.push(move);
};

// this prototype tests to see if a player has a winning combination of spaces

Player.prototype.win = function() {
  var result = [];
  var winningCombos = [[1, 2, 3], [4, 5, 6,], [7, 8, 9], [1, 4, 7], [2, 5 ,8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  var win =  false;
  var spaces = this.spaces
  winningCombos.forEach(function(combo) {
    for (var i = 0; i <3; i++) {
      // debugger;
      result[i] = (spaces).includes(combo[i]);
    }
    if ((result[0] === true) && (result[1] === true) && (result[2] === true)) {
       win = true;
    }
 });
 return win;
};


$(document).ready(function() {
  var player1 = new Player("X");
  var player2 = new Player("O");

  var playerTurn = player1;

  $(".cell-value").click(function() {
    // var spaceId = $(this).find('.cell-value').val();
    // debugger;
    var spaceId = parseInt($(this).attr('id'));

    playerTurn.move(spaceId);
    console.log(playerTurn.spaces);
    console.log(playerTurn);
// debugger;
  if (playerTurn.win() === true) {
    console.log(playerTurn.mark + " wins!");

  } else {
    playerTurn = playerTurn === player1 ? player2 : player1;
  };

  });

});
