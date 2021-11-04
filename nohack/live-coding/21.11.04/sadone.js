// Q1. 평균 구하기

// function solution(arr) {
//   let answer;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   answer = sum / arr.length;
//   return answer;
// }
// console.log(solution([1, 2, 3, 4]));
// console.log(solution([5, 5]));

// Q2. x만큼 간격이 있는 n개의 숫자

// function solution(x, n) {
//   const answer = [];
//   for (let i = 1; i <= n; i++) {
//     answer.push(i * x);
//   }
//   return answer;
// }

// console.log(solution(2, 5));
// console.log(solution(4, 3));
// console.log(solution(-4, 2));

// Q3. 행렬의 덧셈

// function solution(arr1, arr2) {
//   let answer = [];
//   for (i = 0; i < arr1.length; i++) {
//     answer.push([]);
//     for (j = 0; j < arr1[i].length; j++) {
//       answer[i].push(arr1[i][j] + arr2[i][j]);
//     }
//   }
//   return answer;
// }

// console.log(
//   // prettier-ignore
//   solution(
//     [[1, 2], [2, 3]],
//     [[3, 4], [5, 6]]
//   )
// );

// console.log(solution([[1], [2]], [[3], [4]]));

// Q4. 제일 작은 수 제거하기

function solution(arr) {
  let answer = [];
  // return -1 if answer array is emthy
  if (arr.length == 1) {
    answer.push(-1);
  }
  // finding minimum number in array
  let min = arr[0]; // 0번이 제일 작다 가정하고 찾아보세요 Good 👍
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  answer = arr;
  return answer;
}
console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
// const array = [1, 2, 3, 4];
// array.splice(2, 1);
// console.log(array);
