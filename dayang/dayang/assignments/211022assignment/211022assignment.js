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

// function solve(j) {
//   for (let i = 1; i < 6; i++) process.stdout.write(`${j}`);
//   console.log();
// }
// solve(1);
// solve(2);
// solve(3);


/**
 * [LEVEL 2] N 이상 M 이하의 합 구하기
 *
 * < input >
 *   3  5
 * < output >
 *   12
 */


// function solve(n, m) {
//   let num = 0;
//   for (let i = n; i <= m; i++) {
//     num += i;
//     process.stdout.write(`${num}`);
//     console.log();
//   }
// }

// solve(3, 5);


/**
 * [LEVEL 3] N 이하의 숫자 중 3의 배수가 아닌 것만 출력하기
 *
 * < input >
 *   10
 * < output >
 *   1 2 4 5 7 8 10
 */


// function solve(j) {
//   for (let i = 0; i <= j; i++) {
//     if (i % 3 == 0) continue;
//     process.stdout.write(`${i} `);
//   }
//   console.log();
// }
// solve(10);


/**
 *  * [LEVEL 4] N 이하의 숫자 중 3의 배수가 아닌 것만 합을 구하기
 *
 * < input >
 *   10
 * < output >
 *   37
 */



// LEVEL 4
// function solve(j) {
//   let sum = 0;
//   for (let i = 1; i <= j; i++) {
//     if (i % 3 == 0) continue;
//     sum += i;
//   }
//   console.log(sum);
// }

// solve(10);

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


// function solve(k) {
//   let line = ''; //초기화
//   for (let i = 0; i <= k; i++) {
//     for (let j = 0; j < i; j++) {
//             line = line + '*';
//     }
//     line = line + '\n';
//   }
//   console.log(line);
// }

// solve(4);

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


//  function solve(l) {
//     let line = '';
//     for(let i = 1; i <= l; i++){
//         for(j = i; j < l; j++){
//             line = line + ' ';
//         }
//         for(let k = 1; k <= i; k++){
//             line = line + '*';
//         }
//         line = line + '\n';
//     }
//     console.log(line);
//  }

// solve(4);


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

// function solve(l){
//     let line = '';
//     for(let i = 1; i <= l; i++){
//         for(let j = i; j <= l; j++){
//             line = line + ' ';
//         }
//         for(let k = 1; k <= 2 * i - 1; k++){
//             line = line + '*';
//         }
//         line = line + '\n';
//     }
//     console.log(line);
// }

// solve(5);


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
