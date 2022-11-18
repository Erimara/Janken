export class Background {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = new Image();
    this.background.src = "secondBackground.png";
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 500;
    this.speed = 5;
  }

  //Print out background
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

  entityDraw() {}

  //Move background
  updateBackground() {
    this.y += this.speed;
    if (this.y > 0 + this.height) {
      this.y = 0;
    }
  }
}

export class Obstacle {
  constructor(position, height, width) {
    this.position = position;
    this.height = height;
    this.width = width;
    this.entity = new Image();
    this.entity.src = "platform.png";
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
  constructor(position, height, width, life) {
    super(position, height, width);
    this.entity = new Image();
    this.entity.src = "human.png";
    this.life = 10;
  }
}

export class Cyborg extends Obstacle {
  constructor(position, height, width, life) {
    super(position, height, width);
    this.entity = new Image();
    this.entity.src = "Cyborg.png";
    this.life = 10;
  }
}

//Implement Judge?

// export class Rock extends Obstacle {
//   constructor(position, height, width) {
//     super(position, height, width);
//     this.entity = new Image();
//     this.entity.src = "rock.png";
//   }
// }
// export class Scissor extends Obstacle {
//   constructor(position, height, width) {
//     super(position, height, width);
//     this.entity = new Image();
//     this.entity.src = "scissors.png";
//   }
// }
// export class Paper extends Obstacle {
//   constructor(position, height, width) {
//     super(position, height, width);
//     this.entity = new Image();
//     this.entity.src = "paper.png";
//   }
// }

export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
