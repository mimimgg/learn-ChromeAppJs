const h1 = document.querySelector(".hello h1");

function handletTitleClick() {
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

// h1.onclick = handleh1Click;
h1.addEventListener("click", handletTitleClick);
