function Rules(){
this.turn = 'player1';
this.missedShots = 0;
this.winner = "";
this.changeTurn = "false";
this.startedLives = 3;
this.remainingLives = 3;
}

Rules.prototype.changeTurn = function () {
  this.turn = 'player2';
};

Rules.prototype.checkLives = function () {
  console.log(this.remainingLives);
  rules.remainingLives--;
  if (this.remainingLives <0) {
    console.log("Cambio de turno no te quedan vidas");
    return true;
  }
  else {
    return false;
  }
};
