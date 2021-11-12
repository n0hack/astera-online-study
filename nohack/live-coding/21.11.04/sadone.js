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

// function solution(arr) {
//   let answer = [];
//   // finding minimum number in array
//   let min = arr[0]; // 0번이 제일 작다 가정하고 찾아보세요 Good 👍
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   // push the value which are not same with "min" value
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min) {
//       answer.push(arr[i]);
//   }
// }
//   // when the array length is 0, return -1
//   if (answer.length === 0) {
//     console.log([-1]);
//   } else {
//     console.log(answer);
//   }
// }
// solution([4, 3, 2, 1]);
// solution([10]);

// Q5. 자연수 뒤집어 배열로 만들기

// function solution(n){
//   let answer = [] 
//   do {
//     answer.push(n%10);
//     n = Math.floor(n/10);
//   }
//   while (n>0);
//   return answer;
// }

// console.log(solution(12345));
// console.log(solution(152));

// [5]
// [5,4] <- push를 했으므로 배열의 끝에 들어감
// ...
// [5,4,3,2,1]

// [5]
// [4,5] <- unshift를 할 경우엔 배열의 처음에 들어감
// ...
// [1,2,3,4,5]


// Q6. 버블 정렬

function bubblesort(arr) {
  for(let i = 0; i<arr.length - 1; i++){
    let changeNum;
    for(let j = 0; j<arr.length - 1 - i; j++){
      if (arr[j]>arr[j+1]){
        changeNum = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=changeNum;
        // console.log(arr);
    }
  }
}
return arr;
}

console.log(bubblesort([1,3,5,2,4]));