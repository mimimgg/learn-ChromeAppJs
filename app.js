// if를 사용해서 음주가 가능한 나이를 확인함

// prompt - 사용자가 입력할 수 있는 창을 만듦
//
const age = parseInt(prompt("How old are u?"));

if (isNaN(age) || age < 0) {
  // condition === true
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("your too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age > 80) {
  console.log("you can do whatever you want");
} else {
  console.log("you can't drink");
}
