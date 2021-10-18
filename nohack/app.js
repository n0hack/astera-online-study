// 1. 프로토타입
// 2. strict mode
// 3. 자바스크립트 엔진의 동작 과정
// 4. 렉시컬 스코프 (this)
// 5. 실행 컨텍스트 (<-- 중요해서 오래 걸릴 수 있음)

// 실행컨텍스트:
// 자바스크립트 엔진이 실행하기 위해 코드 관리 정보들이 담긴 어느 상자?
var x = 123;

function foo() {
  console.log(this);
  let a = 456;
  function bar() {
    const b = 789;
    console.log(x, a, b);
  }
  bar();
}
foo();
