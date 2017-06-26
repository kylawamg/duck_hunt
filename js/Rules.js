function Rules(){
this.turn = 'player1';
this.missedShots = 0;
this.winner = "";
this.changeTurn = "false";
this.startedLives = 3;
this.remainingLives = 3;
this.score1 = 0;
this.score2 = 0;
}

Rules.prototype.changeTurn = function () {
  this.turn = 'player2';
};

Rules.prototype.checkLives = function () {
  console.log(this.remainingLives);
  rules.remainingLives--;
  if (this.remainingLives <0) {
    if (this.turn == "player1") {
        console.log("Cambio de turno no te quedan vidas");
    }else {
      console.log("juego acabado");
    }

    return true;
  }
  else {
    return false;
  }
};

Rules.prototype.updateScore = function () {

  if (this.turn === 'player1') {
    this.score1 += 100;
  }else {
    this.score2+=100;
  }
  this.printScore();
};

Rules.prototype.printScore = function () {
  var score;
  if (this.turn === 'player1') {
     score = $('#points').html(this.score1);
  }else{
     score = $('#points').html(this.score2);
  }

};
