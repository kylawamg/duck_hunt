function Board(height, width){
  this.height = height;
  this.width = width;

}

Board.prototype.updateDuckType1 = function (duck) {

var generateDuck = $('#duck');
console.log(generateDuck);
if(generateDuck.hasClass( "up-right-blue-1")){
    generateDuck.addClass("up-right-blue-2");
  generateDuck.removeClass("up-right-blue-1");

}else if (generateDuck.hasClass("up-right-blue-2")){
  generateDuck.addClass("up-right-blue-3");
  generateDuck.removeClass("up-right-blue-2");

}else {
  generateDuck.addClass("up-right-blue-1");
  generateDuck.removeClass("up-right-blue-3");

}
};
Board.prototype.printDuck = function (duck) {
var generateDuck = $('#duck');
var top = $('#duck').position().top;
var left = $('#duck').position().left;
var speed = 12;
var height = $(window).height();
var width =  $(window).width();
var intervalId = setInterval(function() {
  switch (duck.direction) {
    case 'SE':
    if ((top < (height/2))&&(left < (width/2))) {
      generateDuck.css('top', top += speed);
      generateDuck.css('left', left += speed);
      duck.positionY = top;
      duck.positionX = left;
      console.log(duck);
      if(generateDuck.hasClass( "up-right-blue-1")){
        generateDuck.addClass("up-right-blue-2");
        generateDuck.removeClass("up-right-blue-1");

      }else if (generateDuck.hasClass("up-right-blue-2")){
        generateDuck.addClass("up-right-blue-3");
        generateDuck.removeClass("up-right-blue-2");

      }else {
        generateDuck.addClass("up-right-blue-1");
        generateDuck.removeClass("up-right-blue-3");

      }

    }else {
  //    generateDuck.css('top', top -= speed);
      generateDuck.css('left', left += speed);
    }

      break;
    default:

  }



}, 200);

};
