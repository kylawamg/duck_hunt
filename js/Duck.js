function Duck() {
  this.positionX = 0;
  this.positionY = 0;
  this.type = 1;
  this.isAlive = true;
  this.typeX = 0;
  this.typeY = 0;
}

Duck.prototype.generateNewDuck = function() {
  this.isAlive = true;
  var ducks = $('.game-area').first();
  ducks.append("<div class='duck'></div>");
  var generateDuck = $('.duck').first();
  generateDuck.css('left', this.generateRandomX());
  generateDuck.css('top', this.generateRandomY());

};
Duck.prototype.generateRandomX = function() {
  var x = Math.floor(Math.random() * 2);
  var width = $(window).width();
  console.log(width);
  if (x === 1) {
    x = width - 100;
    this.typeX = 2;
  } else {
    this.typeX = 1;
  }
  console.log(x);

  return x;
};

Duck.prototype.generateRandomY = function() {
  var y = Math.floor(Math.random() * 3);
  var height = $(window).height();
  console.log(height);
  if (y === 1) {
    y = height - 200;
    this.typeY = 3;
  } else if (y === 2) {
    this.typeY = 2;
    y = (height / 2) - 100;
  } else {
    this.typeY = 1;
  }
  console.log(y);
  return y;
};
Duck.prototype.generateType = function(type) {
  switch (type) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 6:

      break;
  }
};


Duck.prototype.assignType = function() {
  if (this.typeX === 1) {
    if (this.typeY === 1) {
      //To do empieza en esquina sup izq / type 1 y se mueve +x +y

    } else if (this.typeY === 2) {
      //To do empieza en medio izq / type 2 y se mueve +x  {
    } else {
      //To do empieza en esquina inf izq / type 3 y se mueve +x -y {
    }
  } else {
    if (this.typeY === 1) {
      //To do empieza en esquina sup dcha / type 1¡4 y se mueve -x +y

    } else if (this.typeY === 2) {
      //To do empieza en medio dcha / type 5 y se mueve -x
    } else {
      //To do empieza en esquina inf izq / type 6 y se mueve -x -y {
    }
  }
};
