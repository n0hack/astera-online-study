// 1. 반복문을 이용해 구구단 만들기
// 2. 구구단을 함수로 만들기
// 3. 덧셈(Addition), 뺄셈(Subtraction), 곱하기(Multiplication), 나누기(Division), 거듭제곱(Power), 제곱근(Square Root)을 구하는 함수를 추가로 만들기
// 4. 계산기라는 객체를 만들고, 그 안에 지금까지 만든 함수들을 넣어 메소드로 만들기
// 5. 각 함수의 매개변수를 체크하면서, 데이터 타입(number)이 올바른지 확인하기 (typeof 연산자 사용)

console.log('samhentai');
/*
//1. 반복문을 이용해 구구단 만들기
for (let i = 2; i <= 9; i++) {
  console.log(i + '단');
  for (let j = 1; j <= 9; j++) {
    console.log(i + ' x ' + j + ' = ' + i * j);
  }
}

//2. 구구단을 함수로 만들기
// 템플릿으로 만들면 좀 더 쉬울 거 같아요
// `   문자 내용 ${변수나 결과값} ${변수나 결과값}    `
function timestable() {
  for (let i = 2; i <= 9; i++) {
    console.log(i + '단');
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
timestable();
// backtick

// 3. 덧셈(Addition), 뺄셈(Subtraction), 곱하기(Multiplication), 나누기(Division), 거듭제곱(Power),
//제곱근(Square Root)을 구하는 함수를 추가로 만들기
*/
/*
//덧셈
function add(x, y) {
  return x + y;
}
//뺄셈
function subtract(x, y) {
  return x - y;
}
//곱셈
function multiply(x, y) {
  return x * y;
}
//나눗셈
function divide(x, y) {
  return x / y;
}
//거듭제곱
// search mdn
function power(x, y) {
  return x ** y;
}

//제곱근
function squareroot(x, y) {
  return x ** (1 / y);
}
*/
/*
const obj = {
  test() {},
  add(x, y){ return x + y }
};
obj.test();

*/
/*
//4. 계산기라는 객체를 만들고, 그 안에 지금까지 만든 함수들을 넣어 메소드로 만들기
const calculator = {
  add: function (i, j) {
    return i + j;
  },
  sub: function (i, j) {
    return i - j;
  },
  times: function (i, j) {
    return i * j;
  },
  divide: function (i, j) {
    return i / j;
  },
  power: function (i, j) {
    return i ** j;
  },
  sqrroot: function (i, j) {
    return i ** (1 / j);
  },
};

console.log(calculator.add(32, 64));
console.log(calculator.sub(128, 64));
console.log(calculator.times(1024, 64));
console.log(calculator.divide(65536, 2));
console.log(calculator.power(2, 16));
console.log(calculator.sqrroot(65536, 16));

*/

//5. 각 함수의 매개변수를 체크하면서, 데이터 타입(number)이 올바른지 확인하기 (typeof 연산자 사용)

// 괄호 잘 붙여 주세용 if(){} else {}
// semicolon은 항상 머ㅏ무리를 의미합니당
/*
if ( 조건 ) {

} else {
    
}
&& and
|| or 
! not
*/
function add(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    return 'error';
  }
}

function sub(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x - y;
  } else {
    return 'error';
  }
}

function times(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x * y;
  } else {
    return 'error';
  }
}

function divide(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x / y;
  } else {
    return 'error';
  }
}
