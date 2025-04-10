const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

// string만 포함된 변수는 대문자로 담는다
const HIDDEN_CLASSNAME = "hidden"

function handleLoginClick(e) {
  e.preventDefault();
  // username이 입력되면 className "hidden" class에 적용시켜 hidden한다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // 로컬스토리지에 이름을 담는다.
  localStorage.setItem("username", username);
  greeting.innerText = `HELLO ${username}👋`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
}

loginForm.addEventListener("submit", handleLoginClick);
