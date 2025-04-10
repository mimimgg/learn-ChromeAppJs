const cheering = [
  { text: "오늘도 정말 수고했어! 👍" },
  { text: "포기하지 않고 계속 나아가는 너를 응원해! 💪" },
  { text: "잘 안 풀릴 때도 있겠지만, 넌 분명 해낼 수 있을 거야! ✨" },
  { text: "네 안에 숨겨진 가능성은 무한대야! 🚀" },
  { text: "작은 성공들이 모여 큰 결과를 만들 거야! 😊" },
  { text: "힘들어도 웃음을 잃지 않는 네 모습이 아름다워! 😊" },
  { text: "넘어져도 괜찮아, 다시 일어설 수 있어! 툭툭 털고 다시 가자! 💖" },
  { text: "네 꿈을 향해 나아가는 여정을 항상 응원할게! 🌟" },
  { text: "지금까지 해온 것처럼, 앞으로도 멋지게 해낼 거야! 믿어! 🙌" },
  { text: "네 노력은 절대 배신하지 않을 거야! 조금만 더 힘내! 🍀" },
];

const cheerUp = document.querySelector(".cheering span");

// 랜덤하게 텍스트를 노출하게 함
// Math.random() - 0~1사이의 랜덤한 숫자
const cheeringText = cheering[Math.floor(Math.random() * cheering.length)];

cheerUp.innerText = cheeringText.text;
