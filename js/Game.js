
var height = $(window).height();
var width =  $(window).width();
var duck = new Duck();

var ducks = [];
var board = new Board (height,width);
var rules = new Rules ();
var isDead = false;
var numberOfDucks = 0;
// A $( document ).ready() block.
$( document ).ready(function() {
var count=0;
    console.log( "ready!" );

  //var intervalDucks = setInterval(new Duck(), 6*1000);
  updateDuck();
  var intervalID = setInterval(function(){

      if (duck._checkBorders()) {
        killTheDuck();
      }


  }, 100);

});

function updateDuck(){
 var intervalID = setInterval(board.printDuck(duck), 100);
  var timeoutId = setTimeout(function(){
    if (duck.isAlive) {
      duck.generateRandomDirection();
    }
  }, 5000);


}
function killTheDuck (){
  event.stopPropagation();
  if (duck.isAlive) {

    duck.isAlive = false;
    duck.killDuck();
    rules.updateScore();
    var timeoutIdDuck = setTimeout (function (){
      $('.duck').remove();
      duck = new Duck();

      $('.duck').on('click', killTheDuck);

      console.log(duck.isAlive);
      updateDuck();

    },5000);

}
}

$('body').on('click', function(){
console.log("click on body");
if(!rules.checkLives()){
  board.takeLife();
}

});

$('.duck').on('click', killTheDuck);
