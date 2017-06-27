function Duck() {
  this.positionX = 0;
  this.positionY = 0;
  this.type = 1;
  this.isAlive = true;
  this.typeX = 0;
  this.typeY = 0;
  this.direction = 'SE';
  //this.generateNewDuck();
}

Duck.prototype.generateNewDuck = function() {
  this.isAlive = true;
  var ducks = $('.game-area').first();
  ducks.append("<div class='duck'></div>");
  var generateDuck = $('.duck').first();
  generateDuck.css('left', this._generateRandomX());
  generateDuck.css('top', this._generateRandomY());
  this.assignType(generateDuck);

};

Duck.prototype._generateRandomX = function() {
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

Duck.prototype._generateRandomY = function() {
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

Duck.prototype._checkBorders = function() {
  var width = $(window).width();
  var height = $(window).height();
  var generateDuck = $('.duck').first();
  if (this.positionX < -60 || this.positionY < -100) {
      return true;
  }else if (this.positionX > width-100 || this.positionY > height-100) {
    return true;
  }
return false;
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
  this._generateType(this.type, generateDuck);
};
Duck.prototype._generateType = function(type, generateDuck) {
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




Duck.prototype.generateRandomDirection = function() {
  var direction = Math.floor(Math.random() * 6) + 1;
  switch (direction) {
    case 1:
      this.direction = 'SE';
      this.type = 1;
      break;
    case 2:
      this.direction = 'E';
      this.type = 2;
      break;
    case 3:
      this.direction = 'NE';
      this.type = 3;
      break;
    case 4:
      this.direction = 'SW';
      this.type = 4;
      break;
    case 5:
      this.direction = 'W';
      this.type = 5;
      break;
    case 6:
      this.direction = 'NW';
      this.type = 6;
      break;
  }

};

Duck.prototype.killDuck = function(isAlive) {
  var generateDuck = $('.duck').first();

  if (!this.isAlive) {

    generateDuck.removeClass();
    generateDuck.addClass('duck');
    generateDuck.addClass('shot-duck');
    this.direction = 'dead';
    this.isAlive = true;
    return true;
  }
};
Duck.prototype.removeDuck = function () {

};
