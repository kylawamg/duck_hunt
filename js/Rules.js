function Rules(){
this.turn = 'player1';
this.missedShots = 0;
this.winner = "";
this.changeTurn = "false";

}

Rules.prototype.changeTurn = function () {
  this.turn = 'player2';
};
