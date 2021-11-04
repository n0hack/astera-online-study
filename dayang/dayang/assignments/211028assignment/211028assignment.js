// 1. 셀프넘버
// 셀프 넘버는 1949년 인도 수학자 D.R.Kaprekar가 이름 붙였다.양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자.예를 들어,
// d(75) = 75 + 7 + 5 = 87이다.양의 정수 n이 주어졌을 때, 이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), ...과 같은 무한 수열을 만들 수 있다.예를 들어,
// 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고, 그 다음 수는 39 + 3 + 9 = 51, 다음 수는 51 + 5 + 1 = 57이다.이런식으로 다음과 같은 수열을 만들 수 있다.
// 33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...
// n을 d(n)의 생성자라고 한다.위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다.생성자가 한 개보다 많은 경우도 있다.예를 들어,
// 101은 생성자가 2개(91과 100) 있다.생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개가 있다. 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
// 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// output)
// 1
// 3
// 5
// 7
// 9
// 20
// 31
// 42
// 53
// 64
//  |
//  |       <-- a lot more numbers
//  |
// 9903
// 9914
// 9925
// 9927
// 9938
// 9949
// 9960
// 9971
// 9982
// 9993

// 2. 손익분기점
// 샘숭전자는 노트북을 제조하고 판매하는 회사이다. 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등 A만원의 고정 비용이 들며,
// 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다.
// 예를 들어 A=1,000, B=70이라고 하자. 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며, 열 대 생산하는 데는 총 1,700만원이 든다.
// 노트북 가격이 C만원으로 책정되었다고 한다. 일반적으로 생산 대수를 늘려 가다 보면 어느 순간 총 수입(판매비용)이 총 비용(=고정비용+가변비용)보다 많아지게 된다.
// 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 지점을 손익분기점(BREAK-EVEN POINT)이라고 한다.
// A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.

// input)
// A, B, C가 빈 칸을 사이에 두고 순서대로 주어진다. A, B, C는 21억 이하의 자연수이다.
// 1000 70 170

// output)
// 첫 번째 줄에 손익분기점 즉 최초로 이익이 발생하는 판매량을 출력한다. 손익분기점이 존재하지 않으면 -1을 출력한다.
// 11

// function bep(a, b, c) {
//     // a = 고정, b = 가변,
//     if (b >= c) {
//       console.log(-1);
//     } else {
//       console.log(a / (c - b) + 1);
//       // let sell = 1;
//       // // 한 번 설명 가능 한가용?
//       // for (let i = 1; a + b * i >= c * i; i++) {
//       //   sell = sell + 1;
//       // }
//       // console.log(sell);
//     }
//   }
  
//   bep(1000, 70, 170);
  
  // Q. 재귀함수
  // 재귀함수로 power 기능 만들기
  // input => power(2, 3) / output => 8
  // 2^3 ㅇㅋ?
  // 시간이 8시이므로, 이거는 과제로 드리겠습니다
  
  // js로 미분하는 함수 만들기
  
  // HTML + CSS 프로젝트 결과물 1개 = kokoaClone (유료) D-11 html, css 떼는게 1주 + clone codding 1주 << 유료라서
  // CSS: Box-Sizing(Margin, Padding, Width, Height, Border) / Display (Flex, Block, Inline) / Position (Absolute, Relative, Static, Fixed) / Animation / Transform / 가상 클래스 (:) / 가상 요소 선택자 (::)
  // 자바스크립트까지 더한 결과물 1개 = Momentum (Chrome Extension : Todo list) Challenge D-18 html, css fund //
  // ReactJS로 영화 웹 서비스 만들기 << 무료 (리액트 맛보기 한 번 해보시면 좋을 듯)
  //
  // D-11 D-18 2weeks
  
  // 프로젝트 할 때 : HTML, CSS, JS 모르면 리액트 절대 못 씁니다 (프론트엔드 기본이에요)
  
  function power(b, n) {
    if (n < 1){
        return 1;
    }else{
        return b * power(b, n-1);
    }
  }
  
console.log(power(2, 3));

function sam(a,b){
  return a+b;
}