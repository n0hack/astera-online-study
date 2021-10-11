// 1. 반복문을 이용해 구구단 만들기
// 2. 구구단을 함수로 만들기
// 3. 덧셈(Addition), 뺄셈(Subtraction), 곱하기(Multiplication), 나누기(Division), 거듭제곱(Power), 제곱근(Square Root)을 구하는 함수를 추가로 만들기
// ㄴ 제곱근은 Math.sqrt(x) 메소드로 만들 수 있음 < 이거를 함수 안에 넣으란 얘기
// 4. 계산기라는 객체를 만들고, 그 안에 지금까지 만든 함수들을 넣어 메소드로 만들기
// 5. 각 함수의 매개변수를 체크하면서, 데이터 타입(number)이 올바른지 확인하기 (typeof 연산자 사용)
// ㄴ 함수에 들어온 매개변수의 타입을 체크해서, number가 아니라면 그냥 return; 시키기

function timesTable() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

function typeCheck(a, b) {
  if (typeof a === 'number' && typeof b === 'number') return true;
  else return false;
}

const calculator = {
  addition(a, b) {
    if (!typeCheck(a, b)) return;
    return a + b;
  },
  subtraction: function (a, b) {
    if (!typeCheck(a, b)) return;
    return a - b;
  },
};

// 다양한 재귀함수 실습
// 1. 입력받은 숫자의 높은 자릿수부터 차례대로 출력하기
function printNumber(num) {
  if (num === 0) {
    return;
  } else {
    printNumber(Math.floor(num / 10));
    console.log(num % 10);
  }
}
// 2. 팩토리얼 (Factorial)
function factorial(num) {
  if (num === 1) return 1;
  else return num * factorial(num - 1);
}
// 3. 삼각수 (Triangle Number)
function triangleNumber(num) {
  if (num === 1) return 1;
  else return num + triangleNumber(num - 1);
}
// 4. N번째 피보나치 수열 (N-th Fibonacci Sequence)
function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}
// 5. n개의 수를 입력받아 그 중에서 최댓값을 출력하기
function printMaximum(numbers, pointer) {
  if (numbers.length === pointer) return -999;
  else {
    const m = printMaximum(numbers, pointer + 1);
    if (m > numbers[pointer]) {
      return m;
    } else {
      return numbers[pointer];
    }
  }
}
// 6. 하노이의 탑 (Tower of hanoi)
function towerOfHaoni(numOfDisk, a, b, c) {
  if (numOfDisk === 1) {
    console.log(`${a} --> ${c}`);
  } else {
    towerOfHaoni(numOfDisk - 1, a, c, b);
    console.log(`${a} --> ${c}`);
    towerOfHaoni(numOfDisk - 1, b, a, c);
  }
}
