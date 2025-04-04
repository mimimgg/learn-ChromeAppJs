const quotes = [
  { quote: "성공은 끝이 아니라, 실패도 끝이 아니다. 중요한 것은 용기를 가지고 계속 나아가는 것이다.", author: "윈스턴 처칠" },
  { quote: "행동이 변하면, 습관이 변하고, 습관이 변하면, 인생이 변한다.", author: "톨스토이" },
  { quote: "자신감을 가지세요. 그게 결국 당신을 성공으로 이끌 것입니다.", author: "엘리너 루즈벨트" },
  { quote: "꿈을 꾸는 것은 중요하다. 그러나 그 꿈을 실현하는 것이 더 중요하다.", author: "마틴 루터 킹" },
  { quote: "우리는 우리가 반복적으로 하는 것이다. 그러므로 탁월함은 행동이 아니라 습관이다.", author: "아리스토텔레스" },
  { quote: "어떤 일이든 가능하다고 믿으면, 그 일이 가능해진다.", author: "헨리 포드" },
  { quote: "인생은 10%는 우리가 만들고 90%는 어떻게 반응할 것인가에 달려 있다.", author: "찰스 스윈돌" },
  { quote: "오늘 할 수 있는 일을 내일로 미루지 마라.", author: "벤자민 프랭클린" },
  { quote: "행복은 여행이 아니라 목적지가 아니라, 그 자체가 여행이다.", author: "지그 지글러" },
  { quote: "가장 어두운 시간에 빛이 가장 강하게 빛난다.", author: "존 밀턴" },
  { quote: "성공은 준비와 기회가 만날 때 찾아온다.", author: "지그 지글러" },
  { quote: "불가능한 일은 없다. 오직 할 수 없다고 믿는 것만이 불가능하다.", author: "모하메드 알리" },
  { quote: "좋은 삶은 작은 것들을 소중히 여기는 삶이다.", author: "로버트 프로스트" },
  { quote: "가장 큰 영광은 결코 실패하지 않는 것이 아니라, 매번 실패하고도 계속 일어서는 것이다.", author: "넬슨 만델라" },
  { quote: "진정한 실패는 아무것도 시도하지 않는 것이다.", author: "조지 에드워드 우드베리" },
  { quote: "과거를 돌아보지 말고, 미래를 향해 나아가라.", author: "마이클 조던" },
  { quote: "모든 일에는 연습이 필요하다. 내가 성공한 것은 꾸준한 연습 덕분이다.", author: "프레디 머큐리" },
  { quote: "열정이 없다면, 성공은 의미 없다.", author: "토니 로빈스" },
  { quote: "스스로 믿을 수 있어야 한다. 그게 자신감을 만들고, 그게 힘을 준다.", author: "오프라 윈프리" },
  { quote: "어려운 일에는 시간이 걸린다. 쉬운 일에는 시간이 걸리지 않는다.", author: "찰스 다윈" },
  { quote: "매일 조금씩 나아가면, 결국 큰 성과를 이룰 수 있다.", author: "로버트 콜리어" },
  { quote: "당신이 지금 가진 것이 모두인 것처럼, 열심히 노력하라.", author: "페트라 네미" },
  { quote: "자신에게 솔직하라. 그것이 성공으로 가는 첫 번째 걸음이다.", author: "엘렌 드제네레스" },
  { quote: "진정한 용기는 두려움 속에서도 계속 나아가는 것이다.", author: "넬슨 만델라" },
  { quote: "기회는 준비된 자에게 온다.", author: "루이스 파스퇴르" },
  { quote: "작은 것부터 시작해서, 끝까지 하라.", author: "알프레드 아들러" },
  { quote: "어디에서 시작할지 모르겠다면, 그냥 시작하라.", author: "마크 트웨인" },
  { quote: "자신이 변화의 시작이 되어라.", author: "마하트마 간디" },
  { quote: "불안은 상상 속에서 만들어진 것이다. 두려워하지 말고 도전하라.", author: "데일 카네기" },
  { quote: "오늘을 사는 법을 알면 내일이 더 행복해진다.", author: "헬렌 켈러" },
  { quote: "인생은 짧다. 후회하지 않도록 살아라.", author: "존 레논" },
  { quote: "나쁜 일에 얽매이지 말고, 좋은 일에 집중하라.", author: "버락 오바마" },
  { quote: "성공을 향해 나아가는 길은 결코 평탄하지 않다. 그러나 그 길을 걷는 것만이 중요하다.", author: "비틀즈" },
  { quote: "도전이 없으면, 성취도 없다.", author: "칼 융" }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// Math.floor는 소수점을 버리는 것(버림),
// Math.ceil은 소수점을 올리는 것(올림),
// Math.round는 소수점을 반올림 하는 것

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
