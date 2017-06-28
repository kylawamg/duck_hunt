var height = $(window).height();
var width = $(window).width();
var duck = new Duck();
var ducks = [];
var board = new Board(height, width);
var rules = new Rules();
var isDead = false;
var duck1;
$(document).ready(function() {
  var intervalID;
  var audio = new Audio('sounds/intro1.mp3');
  audio.play();
});
function updateDuck() {
  if (duck.isAlive) {
    intervalID = setInterval(function() {
      board.printDuck(duck);
      if (duck._checkBorders()) {
        killDuck();
      }

    }, 80);
  }
  var timeoutId = setTimeout(function() {
    if (duck.isAlive) {

      duck.generateRandomDirection();
    }
  }, 2000);
}
function killTheDuck() {
  var audio = new Audio('sounds/cuack.mp3');
  audio.play();
  rules.ducksKilled++;
  event.stopPropagation();
  rules.updateScore();
  duck.isAlive = false;
  duck.killDuck();
  killDuck();
}

function clickOnBody() {
  var audio = new Audio('sounds/shot.mp3');
  audio.play();
  board.takeLife();
  if (rules.checkLives()) {
    var audio1 = new Audio('sounds/failed.mp3');
    audio1.play();
    if(rules.numberOfPlayers===2){
      if (rules.isFirstPlayer()) {
        $(".info").first().removeClass('hide');
        $(".change-turn").first().removeClass('hide');
        $(".scorep1").first().html(rules.score1);
        rules.changeTurn();
        clearInterval(intervalID);
      }else if (rules.isSecondPlayer()){
        $(".info").first().removeClass('hide');
        $(".finish-game").first().removeClass('hide');
        rules.winner();
        $(".player-winner").first().html(rules.winnerPlayer);
        $(".score1").first().html(rules.score1);
        $(".score2").first().html(rules.score2);
        clearInterval(intervalID);
      }
    }else if (rules.numberOfPlayers===1){
      $(".info").first().removeClass('hide');
      $(".finish-game-1").first().removeClass('hide');
      console.log(rules.score1);
        $(".scorepp1").first().html(rules.score1);
          clearInterval(intervalID);
    }
  }
}
function killDuck() {
  if (duck.isAlive) {
    duck.isAlive = false;
    var timeoutIdDuck = setTimeout(function() {
      $('.duck').remove();
      duck = new Duck();
      duck.generateNewDuck();
      $('.duck').on('click', killTheDuck);

      clearInterval(intervalID);
      updateDuck();
    }, 3000);
  }
}

$('.choose-player').on('click', function() {
  event.stopPropagation();
  if (this.id == "one-player") {
    rules.numberOfPlayers = 1;
  } else if (this.id == "two-player") {
    rules.numberOfPlayers = 2;
  }
  $(".game-start").first().addClass('hide');
  $(".instructions").first().removeClass('hide');
});

$('.start').on('click', function() {
  event.stopPropagation();
  startGame();
});
$('.start-turn').on('click', function() {
  event.stopPropagation();
  startTurn();
});
function startGame() {
  $(".instructions").first().addClass('hide');
  $(".info").first().addClass('hide');
  $('body').on('click', clickOnBody);
  duck.generateNewDuck();
  $('.duck').on('click', killTheDuck);
  setTimeout(updateDuck(), 2000);
}
function startTurn() {
  clearInterval(intervalID);
  rules.turn = 'player2';
    rules.score2 = 0;
  rules.remainingLives = 3;
  board.putLifes();
  $('#points').html('0');
  duck = new Duck();
  duck.generateNewDuck();
  $('.duck').on('click', killTheDuck);
  $(".change-turn").first().addClass('hide');
  $(".info").first().addClass('hide');
  setTimeout(updateDuck(), 2000);
}
