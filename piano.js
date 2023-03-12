function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
}

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener("keydown", playSound);

function play(key) {
  const audio = document.querySelector(
    `audio[data-key="${key.attributes[0].nodeValue}"]`
  );

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
}
const keys = document.querySelectorAll(".key");

keys.forEach((key) =>
  key.addEventListener("click", () => {
    play(key);
  })
);
