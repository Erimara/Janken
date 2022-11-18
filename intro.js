function Typer(element, options, scenes) {
  let defaultOptions = { erase: 60, type: 80, break: 1000 };

  let config = {};

  if (Array.isArray(options)) {
    scenes = options;
    options = {};
  }

  for (let key in defaultOptions) {
    if (!defaultOptions.hasOwnProperty(key)) continue;

    if (options[key] != null) {
      config[key] = options[key];
    } else {
      config[key] = defaultOptions[key];
    }
  }

  let status = "ready";

  let state = "";

  let currentSceneIndex = 0;

  function type() {
    if (status !== "playing") {
      return;
    }

    let scene = scenes[currentSceneIndex];

    if (state === scene) {
      return setTimeout(erase, config.break);
    }

    state = scene.substr(0, state.length + 1);
    element.textContent = state;

    setTimeout(type, config.type);
  }

  function erase() {
    if (status !== "playing") {
      return;
    }

    if (state === "") {
      currentSceneIndex++;

      if (currentSceneIndex === scenes.length) {
        currentSceneIndex = 0;
      }

      return type();
    }

    state = state.substr(0, state.length - 1);
    element.textContent = state;

    setTimeout(erase, config.erase);
  }

  function stop() {
    status = "ready";
  }

  function play() {
    if (status === "ready") {
      status = "playing";
      type();
    }
  }

  play();

  return { play: play, stop: stop };
}

let startdialogue = document.getElementById("startdialogue");

startdialogue.addEventListener("click", () => {
  startdialogue.style.display = "none";

  let startIntro = document.getElementById("startIntro");

  startIntro.style.display = "block";

  let boss = document.getElementById("colonel");

  let colonel = Typer(boss, [
    "Colonel: Jack",
    " ",
    "Colonel: I need your help",
    "Colonel:THE WORLD, needs your help",
    " ",
    "Colonel:It's Cyborg.. He's back..",
    "Colonel:He's back, and he improved his Janken",
    "Colonel: You are our only hope Jack! ",
    "",
    "sHIIIIIII, THATS ALL I NEEDED TO HEAR",
  ]);

  let mainChar = document.getElementById("hero");
  let hero = Typer(mainChar, [
    "Jack:....",
    "Jack: What do you want?",
    "Jack: Im retired....",
    "Jack: I SAID IM RETIRED!",
    "Jack: I have a family now",
    "Jack: No.. It can't be!",
    "Jack: Janken... I swore to give it up",
    "Jack: I will fight, but not for you. But for my family!",
  ]);

  setTimeout(hero.stop, 1000);
  setTimeout(hero.play, 2500);

  setTimeout(colonel.stop, 1000);
  setTimeout(colonel.play, 2000);
});
