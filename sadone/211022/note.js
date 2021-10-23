// Level 무한하게 제가 만들어 드림
// 주제: 반복문
// * (할당문; 조건식; 증감식)

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

 
[SOLVE LEVEL 1]
=============================================================

function solve(m) {
  for (let n = 1; n < 6; n++) process.stdout.write(`${m}`);
  console.log();
}

solve(2);
solve(1);
solve(5);
=============================================================
*/

/**
 * [LEVEL 2] N 이상 M 이하의 합 구하기
 *
 * < input >
 *   3  5
 * < output >
 *   12
 [SOLVE LEVEL 2]
 =============================================================
 */
/*
function solve(n, m) {
  let sum = 0;
  // n을 받아왔는데, 반복문 안에서 새로운 n을 만들었음
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  console.log(sum);
}

solve(3, 5); // 3+4+5 = 12
solve(10, 12); // 10+11+12 = 33

=============================================================
*/
/**
 * [LEVEL 3] N 이하의 숫자 중 3의 배수가 아닌 것만 출력하기
 *
 * < input >
 *   10
 * < output >
 *   1 2 4 5 7 8 10
  [SOLVE LEVEL 3]
 =============================================================
*/
/*
function solve(n) {

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) continue;
    process.stdout.write(`${i} `);
  }
  console.log();
}

solve(10);
solve(16);

=============================================================
*/

/**
 * [LEVEL 4] N 이하의 숫자 중 3의 배수가 아닌 것만 합을 구하기
 *
 * < input >
 *   10
 * < output >
 *   37
 */

// [SOLVE LEVEL 4]
// =============================================================
/*
function solve(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) continue;
    sum += i;
  }
  console.log(sum);
}

solve(10);
solve(12); //solve(10) + 11 = 48
*/
//=============================================================
/*
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
// [SOLVE LEVEL 5]
// =============================================================
/*
function solve(f) {
  let lane = ''; // 초기값은 아무것도 없음, 줄을 나타낼 변수
  for (let i = 1; i <= f; i++) {
    for (let j = 1; j <= i; j++) {
      lane = lane + '*'; // i의 수에 해당하는 만큼 별 갯수 찍어주기
    }
    lane = lane + '\n'; // 별 갯수 찍었으니 한칸 띄어주기
  }
  console.log(lane); // for문 밖에서 console.log해서 다시 lane값 초기화
}

solve(5);
solve(7);
*/
// =============================================================

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

// [SOLVE LEVEL 6]
// =============================================================
/*
function solve(f) {
  let lane = ''; // 초기값은 아무것도 없음, 줄을 나타낼 변수
  for (let i = 1; i <= f; i++) {
    for (let j = i; j <= f - 1; j++) {
      // ⭐️못 찾고 있었던 부분 j=1 -> j=i
      lane = lane + ' ';
    }
    for (let k = 1; k <= i; k++) {
      lane = lane + '*'; // i의 수에 해당하는 만큼 별 갯수 찍어주기
    }
    lane = lane + '\n'; // 별 갯수 찍었으니 한칸 띄어주기
  }
  console.log(lane); // for문 밖에서 console.log해서 다시 lane값 초기화
}
solve(5);
*/
// =============================================================

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
 *   ********* 2f-1개의 *
 *
 * a = 4 3 2 1 0
 * b = 4 3 2 1 0
 *   = f-1 f-2 f-3 f-4 f-5
 *
 *   결과는 5층까지만 나오는 게 아닌, input 값에 따라서 삼각형의 형태가 달라져야 합니다.
 */
// [SOLVE LEVEL 7]
// =============================================================
/*
function solve(f) {
  let lane = '';
  for (let i = 1; i <= f; i++) {
    for (let k = 1; k <= f - i; k++) {
      lane = lane + ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      lane = lane + '*';
    }
    lane = lane + '\n';
  }
  console.log(lane);
}

solve(5);
// =============================================================

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
 * n 3 5 7 9 11
 * f 3 5 7 9 11
 * 
 * n i
 * n-2(i-1)
 *   결과는 5층까지만 나오는 게 아닌, input 값에 따라서 삼각형의 형태가 달라져야 합니다.
 */

// Math.floor <<<<<

function solve(n) {
    let lane = '';
    for (let i = 1; i <= n; i++) {
      for (let j = i; j < Math.abs(Math.floor(n / 2) - i); j++) {
        // 조건을 걸어서 n의 절반을 지났으면, 증감식을 -든 +든 반전시켜 계산할 듯
        lane = lane + ' ';
      }
      for (let k = 1; k <= i; k++) {
        lane = lane + '*';
      }
      console.log(lane);
    }
  }
  
  solve(5);
  
  console.log(Math.abs(Math.floor(5 / 2) - 3));
  
  