const cheering = [
  { text: "You did a great job today! 👍" },
  { text: "I support you for not giving up and moving forward! 💪" },
  { text: "There may be tough times, but you can definitely make it! ✨" },
  { text: "Your hidden potential is limitless! 🚀" },
  { text: "Small successes will add up to big achievements! 😊" },
  { text: "Your ability to keep smiling even in tough times is beautiful! 😊" },
  { text: "It's okay to fall, you can always get back up! Shake it off and keep going! 💖" },
  { text: "I will always cheer for your journey toward your dreams! 🌟" },
  { text: "Just like you've done so far, you'll keep doing great! Believe in yourself! 🙌" },
  { text: "Your efforts will never betray you! Keep going just a little more! 🍀" },
];


const cheerUp = document.querySelector(".cheering span");

// 랜덤하게 텍스트를 노출하게 함
// Math.random() - 0~1사이의 랜덤한 숫자

function updateCheeringText() {
  const randomIndex = Math.floor(Math.random() * cheering.length);
  cheerUp.innerText = cheering[randomIndex].text;
}

// 3초마다(updateCheeringText) 함수 실행
// setInterval(updateCheeringText, 3000);

// 페이지 로드 시 첫 메시지 표시
updateCheeringText();
