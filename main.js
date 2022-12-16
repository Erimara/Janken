import { Background, Human, Obstacle, Position, Cyborg } from "./background.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
//Sets value to choices
const Rock = 1;
const Paper = 2;
const Scissor = 3;
//Sets hard values to possible outcomes
const gameDraw = "      DRAW!";
const playerWins = "  Jakk Wins!";
const computerWins = "Cyborg wins!";
//Main class, handles most methods and draws out objects
class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.background = new Background(canvas.width, canvas.height);
    this.platform = new Obstacle(
      new Position(canvas.width / 2 - 245, 90),
      450,
      480
    );
    this.human = new Human(new Position(-60, 30), 280, 280);
    this.cyborg = new Cyborg(
      new Position(canvas.width / 2 + 200, 30),
      310,
      310
    );

    this.player = undefined;
    this.computer = undefined;
  }

  start() {
    animate();
  }
  //Draws out objects
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
  //Assign value to the player and computer to differentiate between them
  assignChoice(player, choice) {
    if (player === 1) {
      this.player = choice;
    } else {
      this.computer = choice;
    }
  }
  //Calculates who wins the game
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
  //Returns choice depending on what is chosen
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
  //Prints out text and handles the counter
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
    };
    document.getElementById("paperChoice").onclick = () => {
      game.assignChoice(1, Paper);
      game.assignChoice(2, game.generateRandomNumber());

      count++;
      disp.innerHTML = count;
    };
    document.getElementById("scissorChoice").onclick = () => {
      game.assignChoice(1, Scissor);
      game.assignChoice(2, game.generateRandomNumber());

      count++;
      disp.innerHTML = count;
    };
    if (count < 5) {
      this.context.font = "20px castellar";
      this.context.strokeText(
        "Jakk uses " + this.rockPaperScissor(this.player),
        this.human.position.x + 100,
        this.human.position.y + 10
      );

      this.context.strokeText(
        "Cyborg uses " + this.rockPaperScissor(this.computer),
        this.cyborg.position.x - 30,
        this.cyborg.position.y + 10
      );
    }
  }
  //Prints out the winner
  printResult() {
    if (count <= 5) {
      this.context.font = "30px castellar";
      this.context.fillStyle = "darkred";
      this.context.fillText(
        this.calculateWinner(),
        this.platform.position.x + 117,
        this.platform.position.y
      );
    }

    document.getElementById("restart").onclick = () => {
      location.reload();
    };
  }
  //Handles the mischiveous players who still click on buttons.
  stopClicking() {
    if (count > 5) {
      this.context.font = "30px castellar";
      this.context.strokeText(
        "Nope, no hidden feature, Game Over.",
        this.platform.position.x - 100,
        this.platform.position.y
      );
    }
  }
  //Computer choice. Starts at 1.
  generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }
}
const game = new Game(canvas, context);

let count = 0;
let disp = document.getElementById("display");

//Main function
function animate() {
  game.addBackground();
  game.printResult();
  game.printChoice();
  game.stopClicking();
  requestAnimationFrame(animate);
}

game.start();
