function Duck() {
  this.positionX = 0;
  this.positionY = 0;
  this.type = 1;
  this.isAlive = true;
  this.typeX = 0;
  this.typeY = 0;
  this.direction = '';
  this.generateNewDuck();
}

Duck.prototype.generateNewDuck = function() {
  this.isAlive = true;
  var ducks = $('.game-area').first();
  ducks.append("<div class='duck' id='duck'></div>");
  var generateDuck = $('.duck').first();
  generateDuck.css('left', this.generateRandomX());
  generateDuck.css('top', this.generateRandomY());
  this.assignType(generateDuck);

};

Duck.prototype.generateRandomX = function() {
  var x = Math.floor(Math.random() * 2);
  var width = $(window).width();
  if (x === 1) {
    x = width - 100;
    this.typeX = 2;
  } else {
    this.typeX = 1;
  }
  return x;
};

Duck.prototype.generateRandomY = function() {
  var y = Math.floor(Math.random() * 3);
  var height = $(window).height();

  if (y === 1) {
    y = height - 200;
    this.typeY = 3;
  } else if (y === 2) {
    this.typeY = 2;
    y = (height / 2) - 100;
  } else {
    this.typeY = 1;
  }

  return y;
};

Duck.prototype.assignType = function(generateDuck) {
  if (this.typeX === 1) {
    if (this.typeY === 1) {
      //To do empieza en esquina sup izq / type 1 y se mueve +x +y
      this.direction = 'SE';
      this.type = 1;
    } else if (this.typeY === 2) {
      //To do empieza en medio izq / type 2 y se mueve +x
      this.type = 2;
      this.direction = 'E';
    } else {
      //To do empieza en esquina inf izq / type 3 y se mueve +x -y {
      this.type = 3;
      this.direction = 'NE';
    }
  } else {
    if (this.typeY === 1) {
      //To do empieza en esquina sup dcha / type 1¡4 y se mueve -x +y
      this.type = 4;
      this.direction = 'SW';
    } else if (this.typeY === 2) {
      this.type = 5;
      this.direction = 'W';
      //To do empieza en medio dcha / type 5 y se mueve -x
    } else {
      //To do empieza en esquina inf izq / type 6 y se mueve -x -y
      this.type = 6;
      this.direction = 'NW';
    }
  }
  this.generateType(this.type, generateDuck);
};
Duck.prototype.generateType = function(type, generateDuck) {
  switch (type) {
    case 1:
      generateDuck.addClass(" up-right-blue-1");
      console.log("arriba izquierda");
      break;
    case 2:
      generateDuck.addClass(" right-blue-1");
      console.log(" izquierda");
      break;
    case 3:
      generateDuck.addClass(" up-right-blue-1");
      console.log("abajo izquierda");
      break;
    case 4:
      generateDuck.addClass(" up-left-blue-1");
      console.log("arriba derecha");
      break;
    case 5:
      generateDuck.addClass(" left-blue-1");
      console.log(" derecha");
      break;
    case 6:
      generateDuck.addClass(" up-left-blue-1");
      console.log("abajo derecha");
      break;
  }
};
Duck.prototype.move = function() {
  var top = $('#duck').position().top;
  var left = $('#duck').position().left;
  var speed = 12;
  var height = $(window).height();
  var width =  $(window).width();
  var intervalId = setInterval(function() {
    switch (this.type) {
      case 1:
      if ((top < (height/2))&&(left < (width/2))) {
        generateDuck.css('top', top += speed);
        generateDuck.css('left', left += speed);
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

Duck.prototype.generateRandomDirection = function() {
  return Math.floor(Math.random() * 6) + 1;
};
