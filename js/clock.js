const clock = document.querySelector("h2#clock");

// intervals
// 매번 일어나야하는 무언가
// 예를 들면 2초마다 무슨 일이 일어나게 할 때

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

// setInterval (호출하려는 펑션 이름, 호출 시간)
setInterval(getClock, 1000);
