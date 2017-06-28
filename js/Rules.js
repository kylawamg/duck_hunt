function Rules(){
this.turn = 'player1';
this.numberOfPlayers = 0;
this.missedShots = 0;
this.winnerPlayer = "";
this.changeTurn = "false";
this.startedLives = 3;
this.remainingLives = 3;
this.score1 = 0;
this.ducksKilled = 0;
this.score2 = 0;
}

Rules.prototype.isFirstPlayer = function(){
  return this.turn == 'player1';
};
Rules.prototype.isSecondPlayer = function(){
  return this.turn == 'player2';
};
  Rules.prototype.changeTurn = function () {
    this.turn = 'player2';
  };
Rules.prototype.winner = function () {
    if (this.score1 > this.score2) {
      this.winnerPlayer = 'Player 1';
    }else if (this.score1 < this.score2){
      this.winnerPlayer = 'Player 2';
    }else {
      this.winnerPlayer = 'Empate';
    }
};
Rules.prototype.checkLives = function () {
  this.remainingLives--;
  if (this.remainingLives <=0) {
    return true;
    }
};
Rules.prototype.updateScore = function () {
  if (this.turn === 'player1') {
    this.score1 += 100;
  }else if(this.turn == 'player2'){
    this.score2+=100;
  }
  this.printScore();
};
Rules.prototype.printScore = function () {
  if (this.turn === 'player1') {
     $('#points').html(this.score1);
  }else if (this.turn === 'player2'){
       $('#points').html(this.score2);
  }
};
