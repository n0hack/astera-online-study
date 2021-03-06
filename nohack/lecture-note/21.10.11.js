// // 자바스크립트에서 모든 것은 객체(Object)이다.
// // REST Parameter
// function 함수(숫자) {
//   // 나는 들어온 매개변수가 짝수인 경우에만 값을 반환하고 싶다.
//   if (숫자 % 2 === 0) {
//     return 반환값;
//   } else {
//     return null;
//   }
// }

// /* 좋은 함수를 만들기 위한 조건
// 1. 함수는 정해진 기능 딱 한 가지만 수행하도록 구현하기
// 2. 사이드 이펙트가 발생하지 않도록 하기 (순수함수)
// 3. 매개변수를 많이 받지 않도록 하고, 로직을 최대한 간단(단순)하게 작성하기
// 4. 재사용이 가능하도록 만드는 것이 좋습니다.
// */

// // 함수는 일급객체의 특징을 가지고 있습니다.
// /**
//  * 1. 변수의 값으로 객체를 할당할 수 있다.
//  * 2. 함수의 매개변수로 객체를 보낼 수 있다. (콜백)
//  * 3. 객체를 함수의 반환값으로 사용할 수 있다. (클로저)
//  */

// let 함수를담은변수 = 함수;
// 함수를담은변수(1);

// let 함수를담은변수2 = function () {
//   // 함수 내용
//   console.log('this is function');
// };
// 함수를담은변수2();

// 호이스팅(Hoisting)이란, 함수와 변수를 실행하기 전에
// 실행 컨텍스트를 위해 메모리에 저장하는 것을 의미한다.
// var로 선언한 변수의 경우엔 호이스팅 시,
// 변수를 undefined로 초기화하지만 let과 const의 경우엔 변수를 초기화 하지 않는다.

// 호이스팅: 변수나 함수의 선언문이 소스코드의 윗부분에 올려진 것처럼 동작하는 것
// 함수();
// function 함수() {
//   console.log('hosited');
// }

// let 변수1 = 444;

// // console.log(변수2);
// {
//   console.log(변수1);
//   let 변수1 = 123;
// }
// const 변수2 = 456;

// 자바스크립트 엔진은 ['소스평가과정', '소스실행과정(런타임)'] 2가지 단계로 나누어 코드 실행
// 평가과정: 코드 내의 식별자, 함수선언문이 있으면 먼저 메모리에 올리고, 초기화합니다.
// 실행과정: 평가과정에서 한 것을 제외한 모든 것을 처리하고, 값을 할당합니다.

// 초기화를 해야 참조가 가능해요
// 평가 과정: 식별자 등록 -> TDZ -> 식별자의 값 초기화
// 실행 과정: 실질적인 값 할당

// 스코프
// 식별자의 유효 범위
// Global Scope
let 변수 = 123;

// Local Scope (=Block Scope)
// C, C++, java
{
  {
    {
      // var 같은 녀석인데
      // 이미 너무 멀리옴
    }
  }
}

// global scope (=function level scope): var, function
// local scope (=block level scope): let, const, class (ES6)
// 함수 레벨 스코프 << 조금 더 연구 (p190)

// 일반적인 언어라면 이 안에서 변수 값을 바꿔도, 외부에 영향이 없어요
// 로컬 스코프를 따르고 있기 때문에, 로컬 스코프 안에서만 영향이 있기 때문에
for (let index = 1; index <= 5; index++) {
  // 반복 작업
}

// 코드 어딘가
// console.log(index);

// 객체 (object)
const 사람 = {
  이름: '샘',
  나이: 99,
  인사: function () {
    console.log('안녕하세요.');
  },
};
// console.log(사람);
// console.log(typeof 사람); // data type: object

사람.이름 = '샘';
사람.나이 = 99;
사람.성별 = '여자';
사람.착용하고있는것 = { 상의: '어디브랜드의것', 하의: '어디브랜드의것' };
// console.log(사람);

// 사람.Key
// 사람.Key = Value;
// 사람.인사();

// 틀 (Template)
// 객체 지향 프로그래밍
// 현실 세계에 있는 것들을 모두 객체로 보고, 이를 모델링(추상화)하여 프로그래밍하는 것
// 그냥 호출하면 일반 함수, new를 붙여 호출하면 생성자 함수
function 사람_템플릿(이름, 나이) {
  // 암묵적으로 빈 객체 {}를 생성합니다.
  // const this = {};
  // this는 새로 생성할 객체를 가리키게 됩니다.
  this.이름 = 이름;
  this.나이 = 나이;
  this.인사 = function () {
    console.log('안녕하세요');
  };
  // 완성이 된 객체를 암묵적으로 반환합니다.
  // return { '이름': '이다한', '나이': 99, '인사': [Function (anonymous)] }
}

// 생성자 함수 (constructor)
const 샘 = new 사람_템플릿('이다한', 99);
// const 새던 = new 사람_템플릿('새던', 123);
// const 밍 = new 사람_템플릿('밍', 456);

// TypeScript
const obj = {
  arguments: null,
  caller: null,
  length: 0,
  name: 'f',
};
obj();
