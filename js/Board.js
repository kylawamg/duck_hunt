function Board(height, width) {
  this.height = height;
  this.width = width;

}


Board.prototype.printDuck = function(duck) {
  var generateDuck = $('.duck').first();
  var top = $('.duck').first().position().top;
  var left = $('.duck').first().position().left;
  var speed = 25;
  var speedOnDead = 20;
  var height = $(window).height();
  var width = $(window).width();
  //var intervalId = setInterval(function() {
    switch (duck.direction) {
      case 'SE':
        generateDuck.css('top', top += speed);
        generateDuck.css('left', left += speed);
        duck.positionY = top;
        duck.positionX = left;

        if (generateDuck.hasClass("up-right-blue-1")) {
          generateDuck.removeClass("up-right-blue-1");
          generateDuck.addClass("up-right-blue-2");


        } else if (generateDuck.hasClass("up-right-blue-2")) {
          generateDuck.removeClass("up-right-blue-2");
          generateDuck.addClass("up-right-blue-3");


        } else if(generateDuck.hasClass("up-right-blue-3")){
          generateDuck.removeClass("up-right-blue-3");
          generateDuck.addClass("up-right-blue-1");
        }else {
          generateDuck.removeClass();
          generateDuck.addClass("duck");
          generateDuck.addClass("up-right-blue-1");
        }
        break;
      case 'E':
        //  generateDuck.css('top', top += speed);
        generateDuck.css('left', left += speed);
        duck.positionY = top;
        duck.positionX = left;

        if (generateDuck.hasClass("right-blue-1")) {
          generateDuck.addClass("right-blue-2");
          generateDuck.removeClass("right-blue-1");

        } else if (generateDuck.hasClass("right-blue-2")) {
          generateDuck.addClass("right-blue-3");
          generateDuck.removeClass("right-blue-2");

        } else if(generateDuck.hasClass("right-blue3")){
          generateDuck.addClass("right-blue-1");
          generateDuck.removeClass("right-blue-3");

        }else {
          generateDuck.removeClass();
          generateDuck.addClass("duck");
          generateDuck.addClass("right-blue-1");
        }

        break;
    case 'NE':
    generateDuck.css('top', top -= speed);
    generateDuck.css('left', left += speed);
    duck.positionY = top;
    duck.positionX = left;

    if (generateDuck.hasClass("up-right-blue-1")) {
      generateDuck.addClass("up-right-blue-2");
      generateDuck.removeClass("up-right-blue-1");

    } else if (generateDuck.hasClass("up-right-blue-2")) {
      generateDuck.addClass("up-right-blue-3");
      generateDuck.removeClass("up-right-blue-2");

    } else if(generateDuck.hasClass("up-right-blue-3")){
      generateDuck.addClass("up-right-blue-1");
      generateDuck.removeClass("up-right-blue-3");

    }else {
      generateDuck.removeClass();
      generateDuck.addClass("duck");
      generateDuck.addClass("up-right-blue-1");
    }

    break;
    case 'SW':
    generateDuck.css('top', top += speed);
    generateDuck.css('left', left -= speed);
    duck.positionY = top;
    duck.positionX = left;

    if (generateDuck.hasClass("up-left-blue-1")) {
      generateDuck.addClass("up-left-blue-2");
      generateDuck.removeClass("up-left-blue-1");

    } else if (generateDuck.hasClass("up-left-blue-2")) {
      generateDuck.addClass("up-left-blue-3");
      generateDuck.removeClass("up-left-blue-2");

    } else if (generateDuck.hasClass("up-left-blue-3")){
      generateDuck.addClass("up-left-blue-1");
      generateDuck.removeClass("up-left-blue-3");

    }else {
      generateDuck.removeClass();
      generateDuck.addClass("duck");
      generateDuck.addClass("up-left-blue-1");
    }
    break;
    case 'W':

    generateDuck.css('left', left -= speed);
    duck.positionY = top;
    duck.positionX = left;

    if (generateDuck.hasClass("left-blue-1")) {
      generateDuck.addClass("left-blue-2");
      generateDuck.removeClass("left-blue-1");

    } else if (generateDuck.hasClass("left-blue-2")) {
      generateDuck.addClass("left-blue-3");
      generateDuck.removeClass("left-blue-2");

    } else if(generateDuck.hasClass("left-blue-3")){
      generateDuck.addClass("left-blue-1");
      generateDuck.removeClass("left-blue-3");
    }else {
      generateDuck.removeClass();
      generateDuck.addClass("duck");
      generateDuck.addClass("left-blue-1");
    }
    break;
    case 'NW':
    generateDuck.css('top', top -= speed);
    generateDuck.css('left', left -= speed);
    duck.positionY = top;
    duck.positionX = left;

    if (generateDuck.hasClass("up-left-blue-1")) {
      generateDuck.addClass("up-left-blue-2");
      generateDuck.removeClass("up-left-blue-1");

    } else if (generateDuck.hasClass("up-left-blue-2")) {
      generateDuck.addClass("up-left-blue-3");
      generateDuck.removeClass("up-left-blue-2");

    } else if(generateDuck.hasClass("up-left-blue-3")){
      generateDuck.addClass("up-left-blue-1");
      generateDuck.removeClass("up-left-blue-3");

    }else {
      generateDuck.removeClass();
      generateDuck.addClass("duck");
      generateDuck.addClass("up-left-blue-1");
    }
    break;
    case 'dead':
    generateDuck.css('top', top += speedOnDead);
  //  generateDuck.css('left', left -= speed);
    duck.positionY = top;
    duck.positionX = left;
    generateDuck.addClass("dead-duck");
    generateDuck.removeClass(".shot-duck");

    break;
    }
//  }, 200);
};

Board.prototype.takeLife = function(){
    var heart = $('.red').last();
    heart.removeClass('red');
};
Board.prototype.putLifes = function () {
  $('.lives').find('.fa').addClass('red');
};
