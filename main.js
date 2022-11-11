import {
  Background,
  Human,
  Obstacle,
  Position,
  Cyborg,
  Rock,
  Scissor,
  Paper,
} from "./background.js";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.background = new Background(canvas.width, canvas.height);
    this.platform = new Obstacle(new Position(90, 75), 70, 130);
    this.human = new Human(new Position(canvas.height - 170, 15), 110, 80);
    this.cyborg = new Cyborg(new Position(canvas.height + 88, 15), 110, 80);
    this.rock = new Rock(
      new Position(this.human.position.x + 50, this.human.position.y - 15),
      40,
      35
    );
    this.scissor = new Scissor(
      new Position(this.human.position.x + 80, this.human.position.y - 15),
      40,
      35
    );
    this.paper = new Paper(
      new Position(this.human.position.x + 115, this.human.position.y - 15),
      40,
      35
    );
  }

  start() {
    animate();
  }

  calculateWinner() {}

  addBackground() {
    //ADD GIFS INSTEAD OF IMAGES.
    this.context.clearRect(0, 0, this.innerHeight, this.innerWidth);
    this.background.backgroundDraw(context);
    this.background.updateBackground();
    this.platform.objectDraw(context);
    this.human.objectDraw(context);
    this.cyborg.objectDraw(context);
    this.rock.objectDraw(context);
    this.scissor.objectDraw(context);
    this.paper.objectDraw(context);
  }
}
const game = new Game(canvas, context);

function animate() {
  game.addBackground();
  requestAnimationFrame(animate);
}

game.start();
