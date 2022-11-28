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

  let boss = document.getElementById("cyborg");

  let cyborg = Typer(boss, [
    "Cyborg: We meet again",
    "Cyborg: *Malicious Laughter*",
    "Cyborg: No child, I am eternal, as are all cyborgs",
    "Cyborg: And now that i've been revived i will ruin this world",
    "Cyborg: Silly human, I have surpassed your mediocre janken abilites",
    "Cyborg: Yes, I have aquired The gem of Janken",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Cyborg: Omae wa mo shinderiou",
    "",
  ]);

  let mainChar = document.getElementById("hero");
  let hero = Typer(mainChar, [
    "Jakk: Cyborg?!?",
    "Jakk: But you were dead!",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "Jakk: This can't be",
    " ",
    " ",
    "Jakk: Not if I can help!",
    " ",
    " ",
    " ",
    " ",
    " ",
    "Jakk: ........",
    "Jakk: No.. It can't be!",
    " ",
    " ",
    " ",
    "Jakk: The Legendary gem of Janken, this is not good..",
    "Jakk: I have to defeat Cyborg, the only way I know how.",
    "",
  ]);

  setTimeout(hero.stop, 1000);
  setTimeout(hero.play, 2500);

  setTimeout(cyborg.stop, 1000);
  setTimeout(cyborg.play, 2000);
});
