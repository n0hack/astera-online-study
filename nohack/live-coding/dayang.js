// 1. 반복문을 이용해 구구단 만들기
// 2. 구구단을 함수로 만들기
// 3. 덧셈(Addition), 뺄셈(Subtraction), 곱하기(Multiplication), 나누기(Division), 거듭제곱(Power), 제곱근(Square Root)을 구하는 함수를 추가로 만들기
//      ㄴ 제곱근은 Math.sqrt(x) 메소드로 만들 수 있음 < 이거를 함수 안에 넣으란 얘기
// 4. 계산기라는 객체를 만들고, 그 안에 지금까지 만든 함수들을 넣어 메소드로 만들기
// 5. 각 함수의 매개변수를 체크하면서, 데이터 타입(number)이 올바른지 확인하기 (typeof 연산자 사용)

/*
//1.
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}

//2.
function gugudan(){
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
          console.log(`${i}x${j}=${i * j}`);
        }
      }

      console.log(gugudan);
}
*/

//3.
function addition(x, y) {
  let add = x + y;
  return add;
}
//console.log(typeof addition(2, 2));

function subtraction(x, y) {
  let sub = x - y;
  return sub;
}
//console.log(typeof subtraction(2, 2));

function multiplication(x, y) {
  let multi = x * y;
  return multi;
}
//console.log(typeof multiplication(2, 2));

function division(x, y) {
  let div = x / y;
  return div;
}
//console.log(typeof division(2, 2));
// javascript power mdn
// mdn 이라는 사이트가 나올 거임
function power(x, y) {
  let pwr = Math.pow(x, y);
  return pwr;
}
//console.log(typeof power(2, 2));

function squareRoot(x) {
  let sqrt = Math.sqrt(x);
  return sqrt;
}
//console.log(typeof squareRoot(2));

//5.
function addCheck(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    return 'typeMismatch error';
  }
}
// t라는 식별자가 뭔지 모르죠 프로그램은
console.log(addCheck('string', 4));
