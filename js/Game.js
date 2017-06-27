var height = $(window).height();
var width = $(window).width();
var duck = new Duck();

var ducks = [];
var board = new Board(height, width);
var rules = new Rules();
var isDead = false;
var numberOfDucks = 0;

$(document).ready(function() {
  var intervalID;
});

function updateDuck() {
  if (duck.isAlive) {
    intervalID = setInterval(function() {
      board.printDuck(duck);
      if (duck._checkBorders()) {

        killDuck();

      }
    }, 100);
  }
  //Si el pato sigue vivo genera una direccion nueva a los 5s
  var timeoutId = setTimeout(function() {
  //  console.log(duck.isAlive);
    if (duck.isAlive) {

      duck.generateRandomDirection();
    }
  }, 2000);
}

//Metodo que mata un pato cuando hacemos click en el.
function killTheDuck() {

  event.stopPropagation();
  rules.updateScore();
  duck.isAlive = false;
  duck.killDuck();

  killDuck();
}
//Listener que resta vidas en caso de hacer click fuera del pajaro
function clickOnBody() {
  board.takeLife();
  if (rules.checkLives()) {
    if(rules.numberOfPlayers===2){
      if (rules.isFirstPlayer()) {
        $(".info").first().removeClass('hide');
        $(".change-turn").first().removeClass('hide');
        $(".scorep1").first().html(rules.score1);
        clearInterval(intervalID);

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
        $(".score1").first().html(rules.score1);
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
      //console.log(duck.isAlive);
      clearInterval(intervalID);
      updateDuck();

    }, 3000);
  }
}
//Event listener para el menu de inicio.
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

//Event listener para el boton de Start
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
  //console.log(rules);
}

function loadSounds() {
  ion.sound({
    sounds: [{
      name: "snap"
    }, {
      name: "tap"
    }],

    path: "../lib/ion.sound-3.0.7/sounds/",
    preload: true,
    volume: 1.0
  });
}
