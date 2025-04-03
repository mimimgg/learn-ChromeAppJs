const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기한다.
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(e) {
  e.preventDefault();

  // hidden이라는 클래스를 더해줘서 form을 숨긴다
  loginForm.classList.add('hidden');

  // 유저의 이름을 변수로 저장하고 그 이름은 h1안에 넣는다
  const username = loginInput.value;

  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
