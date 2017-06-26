
var height = $(window).height();
var width =  $(window).width();
var duck = new Duck();
var board = new Board (height,width);
var rules = new Rules ();
var isDead = false;
// A $( document ).ready() block.
$( document ).ready(function() {

    console.log( "ready!" );
// duck.generateNewDuck();
   var intervalID = setInterval( updateDuck(), 100);
   var timeoutId = setTimeout(function(){
     duck.generateRandomDirection();
   }, 4000);
  //  var createDuckId = setInterval (new Duck(), 4*1000);
});

function updateDuck(){
  console.log(duck.type);
//  if (duck.type === 1) {
    console.log(duck);
    console.log("hola");
    //board.updateDuckType1(duck);
    board.printDuck(duck);

    if (duck.isAlive) {

    }

}
$('body').on('click', function(){
console.log("click on body");
if(!rules.checkLives()){
  board.takeLife();
}

});
$('#duck').on('click', function(e){
  e.stopPropagation();
  duck.isAlive = false;
  
  duck.killDuck();

  console.log("CLick en pato");

});
