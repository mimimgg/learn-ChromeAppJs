// 시계를 표시할 요소 html에서 가져오기
const clock = document.querySelector(".clock h2");
// 날짜를 표시할 요소 html에서 가져오기
const days = document.querySelector(".clock h3");
// 두 자리 숫자로 변환하는 함수
const twoDigits = (num) => String(num).padStart(2, "0");

// 현재 시간을 가져와서 화면에 표시하는 함수
function getClock() {
  const date = new Date(); /* 현재 날짜와 시간을 가져옴 */

  // 날짜 가져오기
  const year = twoDigits(date.getFullYear().toString().substring(2, 4)); /* 연도 */
  const month = twoDigits(date.getMonth() + 1); /* 월 (0~11이므로 +1 해야함) */
  const day = twoDigits(date.getDay()); /* 일 */

  // 시간 가져오기
  const hours = twoDigits(date.getHours()); /* 현재 시간을 가져옴 */
  const minutes = twoDigits(date.getMinutes()); /* 현재 분을 가져옴 */
  const seconds = twoDigits(date.getSeconds()); /* 현재 초를 가져옴 */

  // html <h2> 태그 안의 내용 변경
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // html <h3> 태그 안의 내용 변경
  days.innerText = `${year}-${month}-${day}`;
}

// 바로 실행하기: 이걸 안하면 1초 후에 나타나기 때문에 바로 실행한다.
getClock();

// 1초마다 실행하는 setInterval을 실행한다.
setInterval(getClock, 1000);
