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


  $('.start').on('click', function() {
    startGame();
    event.stopPropagation();
  });
  $('.start-turn').on('click', function() {
    startTurn();
    event.stopPropagation();
  });
});

function updateDuck() {
  if (duck.isAlive) {
    intervalID = setInterval(function() {
      if (duck.isAlive) {
        board.printDuck(duck);
        if (duck._checkBorders()) {
          killDuck();
      }
    }else {
        board.printDuck(duck);
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
  duck.isAlive = false;
  rules.updateScore();
  duck.killDuck();
  killDuck();
  event.stopPropagation();
}

function clickOnBody() {
  var audio = new Audio('sounds/shot.mp3');
  audio.play();
  board.takeLife();
  if (rules.checkLives()) {
    clearInterval(intervalID);
      $('.duck').remove();
    duck = null;
    var audio1 = new Audio('sounds/failed.mp3');
    audio1.play();
    $("body").unbind("click");
    $(".duck").unbind("click");
    if(rules.numberOfPlayers===2){
      if (rules.isFirstPlayer()) {
        $(".info").first().removeClass('hide');
        $(".change-turn").first().removeClass('hide');
        $(".scorep1").first().html(rules.score1);
      }else if (rules.isSecondPlayer()){
        $(".info").first().removeClass('hide');
        $(".finish-game").first().removeClass('hide');
        rules.winner();
        $(".player-winner").first().html(rules.winnerPlayer);
        $(".score1").first().html(rules.score1);
        $(".score2").first().html(rules.score2);
      }
    }else if (rules.numberOfPlayers===1){
      $(".info").first().removeClass('hide');
      $(".finish-game-1").first().removeClass('hide');
      $(".scorepp1").first().html(rules.score1);
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
  $('body').on('click', clickOnBody);
  $(".change-turn").first().addClass('hide');
  $(".info").first().addClass('hide');
  setTimeout(updateDuck(), 2000);
}
