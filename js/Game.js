var height = $(window).height();
var width = $(window).width();
var duck = new Duck();

var ducks = [];
var board = new Board(height, width);
var rules = new Rules();
var isDead = false;
var numberOfDucks = 0;

$(document).ready(function() {

});

function updateDuck() {

  var intervalID = setInterval(function() {
    board.printDuck(duck);
    if (duck._checkBorders()) {
      console.log("se ha salido el pajaro");
      killDuck();
    }
  }, 100);
  var timeoutId = setTimeout(function() {
    if (duck.isAlive) {

      duck.generateRandomDirection();
    }
  }, 5000);


}

//Metodo que mata un pato cuando hacemos click en el.
function killTheDuck() {

  event.stopPropagation();
  duck.isAlive = false;
  duck.killDuck();
  rules.updateScore();
  killDuck();
}

//Listener que resta vidas en caso de hacer click fuera del pajaro


function clickOnBody (){

      board.takeLife();
      if(rules.checkLives()){
        if (rules.turn == "player1"){
          $(".info").first().removeClass('hide');
          $(".change-turn").first().removeClass('hide');
          $(".scorep1").first().html(rules.score1);
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
      console.log(duck.isAlive);
      updateDuck();

    }, 3000);
  }
}
//Cuando hacemos click en un pato llamamos a killTheDuck

//$(document).on('click', '.duck', killTheDuck);

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
  $(".instructions").first().addClass('hide');
  $(".info").first().addClass('hide');
  $('body').on('click', clickOnBody);
  duck.generateNewDuck();
  $('.duck').on('click', killTheDuck);
  setTimeout(updateDuck(), 2000);

});
