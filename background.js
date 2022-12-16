export class Background {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = new Image();
    this.background.src = "Background/background.png";
    this.x = 0;
    this.y = 0;
    this.width = 900;
    this.height = 500;
    this.speed = 5;
  }
  //Draws image twice
  backgroundDraw(context) {
    context.drawImage(
      this.background,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
    context.drawImage(this.background, this.x, this.y, this.width, this.height);
  }
  //Shifts through the two drawed images and sets speed
  updateBackground() {
    this.y += this.speed;
    if (this.y > 0 + this.height) {
      this.y = 0;
    }
  }
}
//Classes that contain all entities and obstacles
export class Obstacle {
  constructor(position, height, width) {
    this.position = position;
    this.height = height;
    this.width = width;
    this.entity = new Image();
    this.entity.src = "Background/platform.png";
  }

  objectDraw(context) {
    context.drawImage(
      this.entity,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export class Human extends Obstacle {
  constructor(position, height, width) {
    super(position, height, width);
    this.entity = new Image();
    this.entity.src = "Characters/Jakk.png";
  }
}

export class Cyborg extends Obstacle {
  constructor(position, height, width) {
    super(position, height, width);
    this.entity = new Image();
    this.entity.src = "Characters/NewCyborg.png";
  }
}

export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
