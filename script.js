// HEART RAIN – sabhi pages par
const heartRain = document.getElementById("heartRain");
if (heartRain) {
  const heartSymbols = ["❤", "💗", "🖤", "💖", "💘"];
  for (let i = 0; i < 35; i++) {
    const span = document.createElement("span");
    span.textContent =
      heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    const left = Math.random() * 100;
    const duration = 7 + Math.random() * 6;
    const delay = Math.random() * -10;

    span.style.left = left + "vw";
    span.style.animationDuration = duration + "s";
    span.style.animationDelay = delay + "s";

    heartRain.appendChild(span);
  }
}

// ONLY LAST PAGE (jahan id="move-random" hai) ke liye NO button bhaage
const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  function moveRandomEl(elm) {
    elm.style.position = "fixed";
    const maxX = window.innerWidth - 140;
    const maxY = window.innerHeight - 70;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    elm.style.left = x + "px";
    elm.style.top = y + "px";
  }

  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

  moveRandom.addEventListener("click", function (e) {
    e.preventDefault(); // click se page change na ho
  });
}

