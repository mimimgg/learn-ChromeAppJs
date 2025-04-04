// 이미지폴더 안에 있는 이미지와 동일한 이름을 배열에 담아준다.
const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild를 body에 추가함
document.body.appendChild(bgImage);