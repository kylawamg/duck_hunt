
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
   var intervalID = setInterval( updateDuck(), 100);

});

function updateDuck(){
  var timeoutId = setTimeout(function(){
    if (duck.isAlive) {
      duck.generateRandomDirection();
    }

  }, 4000);

  board.printDuck(duck);

}


$('body').on('click', function(){
console.log("click on body");
if(!rules.checkLives()){
  board.takeLife();
}

});
$('#duck').on('click', function(e){
  e.stopPropagation();
  if (duck.isAlive) {

    duck.isAlive = false;
    duck.killDuck();
    rules.updateScore();
  }
});
