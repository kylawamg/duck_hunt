var duck = new Duck();
var board = new Board ();
// A $( document ).ready() block.
$( document ).ready(function() {

    console.log( "ready!" );
// duck.generateNewDuck();
   var intervalID = setInterval( updateDuck(), 100);
  //  var createDuckId = setInterval (new Duck(), 4*1000);
});

function updateDuck(){
  console.log(duck.type);
  if (duck.type === 1) {
    console.log(duck);
    console.log("hola");
    //board.updateDuckType1(duck);
    board.printDuck(duck);
  }

}
