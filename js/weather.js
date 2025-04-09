// navigator: user의 위치를 줌

// getCurrentPosition: 2개의 인자가 필요함
// 1) 잘 되었을 때 실행될 함수
// 2) 에러 발생 시 실행될 함수

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

