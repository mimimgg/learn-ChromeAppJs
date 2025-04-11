const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

// string만 포함된 변수는 대문자로 담는다
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginClick(e) {
  e.preventDefault();
  // username이 입력되면 className "hidden" class에 적용시켜 hidden한다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // 로컬스토리지에 이름을 담는다.
  sessionStorage.setItem(USERNAME_KEY, username);
  // 환영인사 남기기
  paintGreetings(username);
}

loginForm.addEventListener("submit", handleLoginClick);

function paintGreetings(username) {
  greeting.innerText = `WELCOME TO ${username}👋`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// sessionStorage에 입력된 값 가져오기
const savedUserName = sessionStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // 입력 form 노출
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginClick);
} else {
  // greeting 노출
  paintGreetings(savedUserName);
}
