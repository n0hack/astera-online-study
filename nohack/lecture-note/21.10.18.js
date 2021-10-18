var x = 1;
const y = 2;

function foo(a) {
  let x = 3;
  let y = 4;
  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}
foo(20);

const bar함수실행컨텍스트 = {
  bar함수렉시컬환경: {
    함수환경레코드: {
      b: 10,
      z:
    },
    외부렉시컬참조: foo함수실행컨텍스트,
  },
}

// 호출되면서 EC가 생성되고 스택에 들어감
const foo함수실행컨텍스트 = {
  foo함수렉시컬환경: {
    함수환경레코드: {
      a: 20,
      x: 3,
      y: 4,
      bar: '<function>',
    },
    외부렉시컬참조: 전역실행컨텍스트,
  },
};

const 전역실행컨텍스트 = {
  전역렉시컬환경: {
    전역환경레코드: {
      // 변수들이 담기는 곳
      객체환경레코드: {
        바인딩오브젝트: {
          x: 1,
          foo: '<function>',
          // 그 외 전역에서 사용 가능한 애들
        },
      },
      // let과 const로 선언된 변수들이 담기는 공간
      선언적환경레코드: {
        y: 2,
      },
    },
    외부렉시컬참조: null,
  },
};
