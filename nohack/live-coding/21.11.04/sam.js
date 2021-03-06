// Q1. 평균 구하기
// 정수를 담고 있는 배열 arr의 평균값을
// return하는 함수, solution을 완성해 주세요.

// function solution(arr) {
//   // 평균 = 모든 요소의 합 / 사이즈
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
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를
// n개 지니는 배열을 반환해야 합니다. 조건을 만족하는 solution을 완성해 주세요.

// function solution(x, n) {
//   let answer = [];

//   for (let i = 1; i <= n; i++) {
//     answer.push(i * x);
//   }
//   return answer;
// }

// console.log(solution(2, 5));
// console.log(solution(4, 3));
// console.log(solution(-4, 2));

// Q3. 행렬의 덧셈
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// function solution(arr1, arr2) {
//   let answer = [];
//   for (let i = 0; i < arr1.length; i++) {
//     answer.push([]);

//     for (let j = 0; j < arr1[0].length; j++) {
//       answer[i][j] = arr1[i][j] + arr2[i][j];
//     }
//   }
//   return answer;
// }

// console.log(
//   solution(
//     [
//       [1, 2],
//       [2, 3],
//     ],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );

// console.log(solution([[1], [2]], [[3], [4]]));

// Q4. 제일 작은 수 제거하기
// 정수를 저장한 배열인 arr에서 가장 작은 수를 제거한 배열을 반환하는 함수 solution을 완성해 주세요.
// 단, 반환하는 배열이 빈 배열인 경우 -1을 채워 반환해 주세요.

// function solution(arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
    
//   }
// }

// console.log(solution([4, 3, 2, 1]));
// console.log(solution([10])); // indexOf를 활용하여 배열에 요소가 없으면 -1로 반환되도록 유도해보기
////////////////////////////////
// const q4 = (arr) => {
//   let minValue = arr[0]; // 첫 요소가 제일 작다고 가정
//   const answer = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (minValue > arr[i]) minValue = arr[i];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== minValue) answer.push(arr[i]);
//   }
//   if (answer.length === 0) {
//     console.log([-1]);
//   } else {
//     console.log(answer);
//   }
// };

// q4([4, 3, 2, 1]);
// q4([10]);

//Q5. 자연수 뒤집어 배열로 만들기
//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 반환해 주세요.

// function solution(n){
//   let answer = [];
//   do{
//     answer.push(n % 10);
//     n = Math.floor(n / 10);
//     }while(n > 0);
//   return answer;
// }

// console.log(solution(12345));

// Q6. 버블 정렬
// 배열의 순서가 너무 지저분해서 정렬하려 합니다. 정렬 방법에는 많은 것들이 있는데요. 
// 우리는 그 중 좌우의 값을 하나씩 비교하는 버블 정렬을 사용하려 합니다. 
// 버블 정렬 알고리즘을 사용해서 배열을 오름차순으로 정렬하는 함수 solution을 완성해 주세요.

function bubbleSort(arr){
	/* 배열은 객체 타입이므로 내부에서 수정하면 원본에 영향이 갑니다. */
	for(let i = 0; i < arr.length - 1; i++){
		let value;
		for(let j = 0; j < arr.length - 1 - i; j++){
			if(arr[j]>arr[j+1]){
				value = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=value;
			}
        }
	}
	return arr;
}

console.log(bubbleSort([1,3,5,2,4]));