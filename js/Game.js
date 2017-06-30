var height = $(window).height();
var width = $(window).width();
var board = new Board(height, width);
var rules = new Rules();
var isDead = false;
var count = 0;
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
  $('.restart').on('click', function() {
    restartGame();
    event.stopPropagation();
  });
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
  $(".duck").unbind("click");
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
  if (count !==0) {
      clearInterval(intervalID);
      duck = null;
      $('.duck').remove();
  }
  $(".instructions").first().addClass('hide');
  $(".info").first().addClass('hide');
  $('body').on('click', clickOnBody);
  duck = new Duck();
  duck.generateNewDuck();
  $('.duck').on('click', killTheDuck);
    $('#points').html('0');
  setTimeout(updateDuck(), 2000);
  count++;
}
function startTurn() {
  restarParameters();
  rules.turn = 'player2';
  rules.score2 = 0;
  $(".change-turn").first().addClass('hide');
  $(".info").first().addClass('hide');
  $('.duck').on('click', killTheDuck);
  $('body').on('click', clickOnBody);

}
function restartGame () {
  rules.turn='player1';
  rules.score2 = 0;
  rules.score1 = 0;
  restarParameters();
  $(".finish-game-1").first().addClass('hide');
    $(".finish-game").first().addClass('hide');
  $(".game-start").first().removeClass('hide');
  $(".info").first().removeClass('hide');


}
function restarParameters () {
    clearInterval(intervalID);
    $('#points').html('0');
    rules.remainingLives = 3;
    board.putLifes();
    duck = new Duck();
    duck.generateNewDuck();
    setTimeout(updateDuck(), 2000);}
