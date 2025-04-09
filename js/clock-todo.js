const clock = document.querySelector(".clock h2");
const twoDigits = (num) => String(num).padStart(2, "0");

function getClock() {
  const date = new Date();
  const hours = twoDigits(date.getHours());
  const minutes = twoDigits(date.getMinutes());
  const seconds = twoDigits(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

setInterval(getClock, 1000);
