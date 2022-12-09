import { Background, Human, Obstacle, Position, Cyborg } from "./background.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//Assign value to rock paper and scissor
const Rock = 1;
const Paper = 2;
const Scissor = 3;

const gameDraw = "DRAW!";
const playerWins = "Jakk Wins!";
const computerWins = "Cyborg wins!";

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.background = new Background(canvas.width, canvas.height);
    this.platform = new Obstacle(
      new Position(canvas.width / 2 - 230, 100),
      450,
      480
    );
    this.human = new Human(new Position(-60, 30), 280, 280);
    this.cyborg = new Cyborg(
      new Position(canvas.width / 2 + 200, 30),
      310,
      320
    );

    //Handle choice
    this.player = undefined;
    this.computer = undefined;
  }

  start() {
    animate();
  }

  addBackground() {
    this.context.clearRect(0, 0, this.innerHeight, this.innerWidth);
    this.background.backgroundDraw(context);
    this.background.updateBackground();
    this.platform.objectDraw(context);
    if (count < 5) {
      this.human.objectDraw(context);
      this.cyborg.objectDraw(context);
    }
  }
  //Seperate the choices
  assignChoice(player, choice) {
    if (player === 1) {
      this.player = choice;
    } else {
      this.computer = choice;
    }
  }

  calculateWinner() {
    if (this.player === undefined || this.computer === undefined) {
      return "Make a move";
    }

    if (this.player === Rock) {
      if (this.computer === Paper) {
        return computerWins;
      } else if (this.computer === Scissor) {
        return playerWins;
      }
    } else if (this.player === Paper) {
      if (this.computer === Rock) {
        return playerWins;
      } else if (this.computer === Scissor) {
        return computerWins;
      }
    } else if (this.player === Scissor) {
      if (this.computer === Paper) {
        return playerWins;
      } else if (this.computer === Rock) {
        return computerWins;
      }
    }

    if (this.player === this.computer) {
      return gameDraw;
    }
  }

  rockPaperScissor(choice) {
    if (choice === undefined) {
      return " ";
    }
    if (choice === Rock) {
      return "Rock";
    } else if (choice === Paper) {
      return "Paper";
    } else {
      return "Scissor";
    }
  }

  printChoice() {
    if (count === 5) {
      document.getElementById("display").innerHTML =
        "You used your moves: " + game.calculateWinner() + " Play again?";
    }

    document.getElementById("rockChoice").onclick = () => {
      game.assignChoice(1, Rock);
      game.assignChoice(2, game.generateRandomNumber());

      count++;
      disp.innerHTML = count;
      // if (count === 2) {
      //   document.getElementById("display").innerHTML =
      //     "You used your moves: " + game.calculateWinner();
      // }
    };
    document.getElementById("paperChoice").onclick = () => {
      game.assignChoice(1, Paper);
      game.assignChoice(2, game.generateRandomNumber());

      count++;
      disp.innerHTML = count;
      // if (count === 2) {
      //   document.getElementById("display").innerHTML =
      //     "You used your moves: " + game.calculateWinner();
      // }
    };
    document.getElementById("scissorChoice").onclick = () => {
      game.assignChoice(1, Scissor);
      game.assignChoice(2, game.generateRandomNumber());

      count++;
      disp.innerHTML = count;
      // if (count === 2) {
      //   document.getElementById("display").innerHTML =
      //     "You used your moves: " + game.calculateWinner();
      // }
    };
    if (count < 5) {
      this.context.font = "20px castellar";
      this.context.strokeText(
        "Jakk uses " + this.rockPaperScissor(this.player),
        this.human.position.x + 180,
        this.human.position.y + 10
      );

      this.context.strokeText(
        "Cyborg uses " + this.rockPaperScissor(this.computer),
        this.cyborg.position.x - 30,
        this.cyborg.position.y + 10
      );
    }
  }

  printResult() {
    if (count < 5) {
      this.context.font = "30px castellar";
      this.context.strokeText(
        this.calculateWinner(),
        this.platform.position.x + 117,
        this.platform.position.y
      );
    }

    document.getElementById("restart").onclick = () => {
      location.reload();
    };
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }
}
const game = new Game(canvas, context);

//HÄMTAR ID FÖR DISPLAY OCH SÄTTER COUNT TILL 0
let count = 0;
let disp = document.getElementById("display");

//Handle background
function animate() {
  game.addBackground();
  game.printResult();
  game.printChoice();
  requestAnimationFrame(animate);
}

game.start();
