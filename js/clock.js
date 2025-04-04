const clock = document.querySelector("h2#clock");

// intervals
// 매번 일어나야하는 무언가
// 예를 들면 2초마다 무슨 일이 일어나게 할 때

function sayHello() {
  console.log("hello");
}

// setInterval (호출하려는 펑션 이름, 호출 시간)
setInterval(sayHello, 5000);