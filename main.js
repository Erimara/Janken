import {
  Background,
  Human,
  Obstacle,
  Position,
  Cyborg,
  // Rock,
  // Scissor,
  // Paper,
} from "./background.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//Assign value to rock paper and scissor
const Rock = 1;
const Paper = 2;
const Scissor = 3;

const gameDraw = "DRAW!";
const playerWins = "Human Wins!";
const computerWins = "Cyborg wins!";

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.background = new Background(canvas.width, canvas.height);
    this.platform = new Obstacle(
      new Position(canvas.width / 2 - 220, 220),
      270,
      420
    );
    this.human = new Human(new Position(10, 30), 280, 280);
    this.cyborg = new Cyborg(
      new Position(canvas.width / 2 + 200, 30),
      310,
      320
    );
    // this.rock = new Rock(
    //   new Position(this.human.position.x + 65, this.human.position.y - 20),
    //   40,
    //   35
    // );
    // this.scissor = new Scissor(
    //   new Position(this.human.position.x + 95, this.human.position.y - 20),
    //   40,
    //   35
    // );
    // this.paper = new Paper(
    //   new Position(this.human.position.x + 130, this.human.position.y - 20),
    //   40,
    //   35
    // );

    //Handle choice
    this.player = undefined;
    this.computer = undefined;
  }

  start() {
    animate();
  }

  addBackground() {
    //ADD GIFS INSTEAD OF IMAGES.
    this.context.clearRect(0, 0, this.innerHeight, this.innerWidth);
    this.background.backgroundDraw(context);
    this.background.updateBackground();
    this.platform.objectDraw(context);
    this.human.objectDraw(context);
    this.cyborg.objectDraw(context);
    // this.rock.objectDraw(context);
    // this.scissor.objectDraw(context);
    // this.paper.objectDraw(context);
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

    // if (result === 0) {
    //   return "Draw";
    // } else if (result === 1) {
    //   return "Human";
    // } else if (result === 2) {
    //   return "Cyborg";
    // }
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

    // if (choice <= 1 || choice >= 3) {
    //   return "Cannot get results";
    // }
  }

  printChoice() {
    document.getElementById("rockChoice").onclick = function () {
      console.log("Rock");

      game.assignChoice(1, Rock);
      game.assignChoice(2, game.generateRandomNumber());
    };
    document.getElementById("paperChoice").onclick = function () {
      console.log("paper");
      game.assignChoice(1, Paper);
      game.assignChoice(2, game.generateRandomNumber());
    };
    document.getElementById("scissorChoice").onclick = function () {
      console.log("scissor");
      game.assignChoice(1, Scissor);
      game.assignChoice(2, game.generateRandomNumber());
    };

    this.context.font = "20px castellar";
    this.context.fillStyle = "white";
    this.context.strokeText(
      "Human uses " + this.rockPaperScissor(this.player),
      this.human.position.x + 180,
      this.human.position.y + 10
    );
    this.context.strokeText(
      "Life  " + this.human.life,
      this.human.position.x + 180,
      this.human.position.y + 50
    );
    this.context.strokeText(
      "Cyborg uses " + this.rockPaperScissor(this.computer),
      this.cyborg.position.x - 30,
      this.cyborg.position.y + 10
    );
    this.context.strokeText(
      "Life  " + this.cyborg.life,
      this.cyborg.position.x - 10,
      this.cyborg.position.y + 50
    );
    // console.log(" cyborg chose" + rockPaperScissor(this.computer));
    // console.log(" Human Chose" + rockPaperScissor(this.player));
    // game.assignChoice(1, choice);
    //console.log("test");
  }

  printResult() {
    this.context.font = "30px castellar";
    this.context.fillStyle = "pink";
    this.context.strokeText(
      this.calculateWinner(this.result),
      this.platform.position.x + 80,
      this.platform.position.y
    );

    //console.log(gameWon(result));
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }
  makeChoice() {
    // document.getElementById("rockChoice").onclick = function () {
    //   console.log("Rock");
    //   game.assignChoice(1, this.choice);
    //   game.assignChoice(2, game.generateRandomNumber());
    // };
    // document.getElementById("paperChoice").onclick = function () {
    //   console.log("paper");
    //   game.assignChoice(2, game.generateRandomNumber());
    // };
    // document.getElementById("scissorChoice").onclick = function () {
    //   console.log("scissor");
    //   game.assignChoice(1, this.choice);
    //   game.assignChoice(2, game.generateRandomNumber());
    // };
    // let rockChoice = document.getElementById("rockChoice");
    // rockChoice.innerHTML = "Rock";
    // rockChoice.onclick = function () {
    //   rockChoice = Rock;
    //   console.log(" Human Chose: " + rockPaperScissor(rockChoice));
    //   console.log("click");
    //   this.context.fillText(
    //     "Testing text: " + rockPaperScissor(rockChoice),
    //     this.platform.position.x + 10,
    //     this.platform.position.y
    //   );
    // };
    // let paperChoice = document.createElement("button");
    // paperChoice.innerHTML = "Paper";
    // paperChoice.onclick = function () {
    //   paperChoice = Paper;
    //   console.log(" Human Chose: " + rockPaperScissor(paperChoice));
    //   console.log("click");
    // };
    // let scissorChoice = document.createElement("button");
    // scissorChoice.innerHTML = "Scissor";
    // scissorChoice.onclick = function () {
    //   scissorChoice = Scissor;
    //   console.log(" Human Chose: " + rockPaperScissor(scissorChoice));
    //   console.log("click");
    // };
    // rockChoice.classList.add("menu-choice");
    // paperChoice.classList.add("menu-choice");
    // scissorChoice.classList.add("menu-choice");
    // // document.body.appendChild(rockChoice);
    // document.body.appendChild(paperChoice);
    // document.body.appendChild(scissorChoice);
  }
}
const game = new Game(canvas, context);

//Wont need this - > Probably
// game.makeChoice();

//Functions outside of game loop
// let result = game.calculateWinner();

//Game won?
// function gameWon(result) {
//   if (result === undefined) {
//     return "SHOW ME YA MOVE";
//   }
//   if (result === 0) {
//     return "Draw";
//   } else if (result === 1) {
//     return "Human";
//   } else if (result === 2) {
//     return "Cyborg";
//   }
// }
//Handle background
function animate() {
  game.addBackground();
  game.printResult();
  game.printChoice();
  requestAnimationFrame(animate);
}

// console.log("Spelare 1 valde " + rockPaperScissor(choice));
// game.assignChoice(1, choice);
// choice = game.generateRandomNumber();
// //choice = parseInt(prompt("Spelare 2:"));
// console.log("Spelare 2 valde " + rockPaperScissor(choice));
// game.assignChoice(2, choice);

// console.log("Resultat: " + gameWon(game.calculateWinner()));

game.start();

//Cannot be inside animite because of loop
