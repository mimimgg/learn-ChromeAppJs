const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 유효성검사
// 입력된 데이터가 정해진 규칙에 맞는지 확인하는 검증 작업
// 예) 값이 있어야만 출력 가능 / 값이 없으면 출력 불가 ... 등의 조건

// 아래 코드의 유효성 검사
// 1) 값이 없으면 please write your name
// 2) 15글자가 넘으면 your name is too long

// string의 길이를 구하는 방법
// 변수명.length >= 15

function handleLoginClick() {
  const username = loginInput.value;
  if(username === "") {
    alert("please write your name");
  } else if (username.length >= 15) {
    alert("your name is too long")
  } else {
    
  }
}

loginButton.addEventListener("click", handleLoginClick);
