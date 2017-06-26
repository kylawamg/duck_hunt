function Board(height, width) {
  this.height = height;
  this.width = width;

}

Board.prototype.updateDuckType1 = function(duck) {

  var generateDuck = $('#duck');
  console.log(generateDuck);
  if (generateDuck.hasClass("up-right-blue-1")) {
    generateDuck.addClass("up-right-blue-2");
    generateDuck.removeClass("up-right-blue-1");

  } else if (generateDuck.hasClass("up-right-blue-2")) {
    generateDuck.addClass("up-right-blue-3");
    generateDuck.removeClass("up-right-blue-2");

  } else {
    generateDuck.addClass("up-right-blue-1");
    generateDuck.removeClass("up-right-blue-3");

  }
};
Board.prototype.printDuck = function(duck) {
  var generateDuck = $('#duck');
  var top = $('#duck').position().top;
  var left = $('#duck').position().left;
  var speed = 18;
  var speedOnDead = 22;
  var height = $(window).height();
  var width = $(window).width();
  var intervalId = setInterval(function() {
    switch (duck.direction) {
      case 'SE':
        generateDuck.css('top', top += speed);
        generateDuck.css('left', left += speed);
        duck.positionY = top;
        duck.positionX = left;

        if (generateDuck.hasClass("up-right-blue-1")) {
          generateDuck.addClass("up-right-blue-2");
          generateDuck.removeClass("up-right-blue-1");

        } else if (generateDuck.hasClass("up-right-blue-2")) {
          generateDuck.addClass("up-right-blue-3");
          generateDuck.removeClass("up-right-blue-2");

        } else {
          generateDuck.addClass("up-right-blue-1");
          generateDuck.removeClass("up-right-blue-3");

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

        } else {
          generateDuck.addClass("right-blue-1");
          generateDuck.removeClass("right-blue-3");

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

    } else {
      generateDuck.addClass("up-right-blue-1");
      generateDuck.removeClass("up-right-blue-3");

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

    } else {
      generateDuck.addClass("up-left-blue-1");
      generateDuck.removeClass("up-left-blue-3");

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

    } else {
      generateDuck.addClass("left-blue-1");
      generateDuck.removeClass("left-blue-3");

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

    } else {
      generateDuck.addClass("up-left-blue-1");
      generateDuck.removeClass("up-left-blue-3");

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
  }, 200);
};

Board.prototype.takeLife = function(){
    var heart = $('.red').last();
    heart.removeClass('red');
};
