function Board(height, width){
  this.height = height;
  this.width = width;

}


// A $( document ).ready() block.
$( document ).ready(function() {
  var duck = new Duck();
    console.log( "ready!" );
    duck.generateNewDuck();
});
