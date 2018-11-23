(function moveHands() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let now = `${hours}:${minutes}:${seconds}`;

  let h = 30 * ((hours % 12) + minutes / 60);
  let m = 6 * minutes;
  let s = 6 * seconds;

  document.querySelector("#seconds").style.cssText =
    "transform:rotate(" + s + "deg);";

  document.querySelector("#minutes").style.cssText =
    "transform:rotate(" + m + "deg);";

  document.querySelector("#hours").style.cssText =
    "transform:rotate(" + h + "deg);";

  document.querySelector("time").innerText = now;

  setTimeout(moveHands, 1000);
})();
