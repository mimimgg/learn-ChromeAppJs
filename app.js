const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(e) {
  e.preventDefault();
  // const username = loginInput.value;
  console.log(e);
}

function handleLink(e) {
  e.preventDefault();
  console.log("click");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);
