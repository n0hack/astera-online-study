/**
 * [ Level 1]
 * 숫자 1을 넣으면
 * 11111
 * 2를 넣으면
 * 22222
 * 3을 넣으면
 * 33333
 *
 * 기본적으로 문제에 대한 해답은 solve라는 이름의 함수로 만들기
 * 매개변수는 알아서 정하면 됩니다.
 *
 * > input
 *   2
 * > output (input 숫자가 5번 찍히게 끔)
 *   22222
 * console.log하면 자동으로 개행(new lione)됨
 * process.stdout.write(값); 개행되지 않고 한 줄에 입력됩니다.
 *
 */
const solve1 = (n) => {
  for (let i = 0; i < 5; i++) {
    process.stdout.write(`${i}`);
  }
  console.log();
};

/**
 * [LEVEL 2] N 이상 M 이하의 합 구하기
 *
 * < input >
 *   3  5
 * < output >
 *   12
 */
const solve2 = (n, m) => {
  let sum = 0;
  for (; n <= m; n++) {
    sum += n;
  }
  console.log(sum);
};

/**
 * [LEVEL 3] N 이하의 숫자 중 3의 배수가 아닌 것만 출력하기
 *
 * < input >
 *   10
 * < output >
 *   1 2 4 5 7 8 10
 */
const solve3 = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0) process.stdout.write(`${i} `);
  }
  console.log();
};

/**
 * [LEVEL 4] N 이하의 숫자 중 3의 배수가 아닌 것만 합을 구하기
 *
 * < input >
 *   10
 * < output >
 *   37
 */
const solve4 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0) sum += i;
  }
  console.log(sum);
};

/**
 * [LEVEL 5] 직각삼각형 만들기 🔥
 *
 * < input >
 *   4
 * < output >
 *   *
 *   **
 *   ***
 *   ****
 *
 *   결과는 4층까지만 나오는 게 아닌, input 값에 따라서 삼각형의 형태가 달라져야 합니다.
 *   HINT! 반복문 2개 이상 중첩해서 써야 함
 */
const solve5 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let star = 0; star < i; star++) {
      process.stdout.write(`*`);
    }
    console.log();
  }
};

/**
 * [LEVEL 6] LEVEL5에서 가로 반전 된 직각삼각형 만들기
 *
 * < input >
 *   4
 * < output >
 *      *
 *     **
 *    ***
 *   ****
 *
 *   결과는 4층까지만 나오는 게 아닌, input 값에 따라서 삼각형의 형태가 달라져야 합니다.
 */
const solve6 = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let space = 0; space < n - i; space++) {
      process.stdout.write(' ');
    }
    for (let star = 0; star < i; star++) {
      process.stdout.write(`*`);
    }
    console.log();
  }
};

/**
 * [LEVEL 7] 피라미드 만들기
 *
 * < input >
 *   5
 * < output >
 *       *
 *      ***
 *     *****
 *    *******
 *   *********
 *
 *   결과는 5층까지만 나오는 게 아닌, input 값에 따라서 삼각형의 형태가 달라져야 합니다.
 */
const solve7 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let space = 0; space < n - i - 1; space++) {
      process.stdout.write(' ');
    }
    for (let star = 0; star < i * 2 + 1; star++) {
      process.stdout.write(`*`);
    }
    console.log();
  }
};

/**
 * [LEVEL 8] 마름모 만들기
 *
 * < input > N은 1이상의 홀수
 *   5
 * < output >
 *     *
 *    ***
 *   *****
 *    ***
 *     *
 *
 *   결과는 5층까지만 나오는 게 아닌, input 값에 따라서 삼각형의 형태가 달라져야 합니다.
 */
const solve8 = (n) => {
  let space = Math.floor(n / 2);
  let star = 1;

  for (let i = 0; i < n; i++) {
    for (let sp = 0; sp < space; sp++) {
      process.stdout.write(' ');
    }
    for (let st = 0; st < star; st++) {
      process.stdout.write('*');
    }
    console.log();

    if (i >= Math.floor(n / 2)) {
      star -= 2;
      space += 1;
    } else {
      star += 2;
      space -= 1;
    }
  }
};
