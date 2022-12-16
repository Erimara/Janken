//Main dialogue function. Set default values
function dialogue(element, options, scenes) {
  let defaultOptions = { erase: 60, write: 80, break: 1000 };

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

  //Writes out text with sceneIndex
  function write() {
    if (status !== "playing") {
      return;
    }

    let scene = scenes[currentSceneIndex];

    if (state === scene) {
      return setTimeout(erase, config.break);
    }

    state = scene.substr(0, state.length + 1);
    element.textContent = state;

    setTimeout(write, config.write);
  }
  //Removes text from sceneIndex
  function erase() {
    if (status !== "playing") {
      return;
    }

    if (state === "") {
      currentSceneIndex++;

      if (currentSceneIndex === scenes.length) {
        currentSceneIndex = 0;
      }

      return write();
    }

    state = state.substr(0, state.length - 1);
    element.textContent = state;

    setTimeout(erase, config.erase);
  }
  //Pauses dialogue for x amount of seconds
  function stop() {
    status = "ready";
  }
  // Sets dialogue speed to x amount of seconds
  function play() {
    if (status === "ready") {
      status = "playing";
      write();
    }
  }

  play();

  return { play: play, stop: stop };
}
//Hides dialogue and plays once button is pressed
let startdialogue = document.getElementById("startdialogue");

startdialogue.addEventListener("click", () => {
  startdialogue.style.display = "none";

  let startIntro = document.getElementById("startIntro");

  startIntro.style.display = "block";

  let boss = document.getElementById("cyborg");

  let cyborg = dialogue(boss, [
    "Cyborg: We meet again",
    "Cyborg: *Malicious Laughter*",
    "Cyborg: No Jakk, I am eternal, as are all cyborgs",
    "Cyborg: And now I will ruin this world",
    "Cyborg: Silly human, I have surpassed your mediocre janken abilites",
    "",
    "Cyborg: Yes, I have aquired The gem of Janken",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Cyborg: Enough talking! Fight me Jakk!",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  let mainChar = document.getElementById("hero");
  let hero = dialogue(mainChar, [
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
    "Jakk: The Legendary gem of Janken..",
    "Jakk: I have to defeat Cyborg, the only way I know how.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  //Handles erase and write speed.
  setTimeout(hero.stop, 1000);
  setTimeout(hero.play, 2500);

  setTimeout(cyborg.stop, 1000);
  setTimeout(cyborg.play, 2000);
});
