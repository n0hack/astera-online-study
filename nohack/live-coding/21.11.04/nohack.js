const q4 = (arr) => {
  let minValue = arr[0]; // 첫 요소가 제일 작다고 가정
  const answer = [];

  for (let i = 1; i < arr.length; i++) {
    if (minValue > arr[i]) minValue = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== minValue) answer.push(arr[i]);
  }
  if (answer.length === 0) {
    console.log([-1]);
  } else {
    console.log(answer);
  }
};

q4([4, 3, 2, 1]);
q4([10]);

// const q1 = (arr) => {
//   console.log(arr.reduce((a, b) => a + b) / arr.length);
// };
// console.log('===== Q1 =====');
// q1([1, 2, 3, 4]);
// q1([5, 5]);
// console.log('\n');

// const q2 = (x, n) => {
//   console.log(Array.from({ length: n }, (_, i) => x * (i + 1)));
// };
// console.log('===== Q2 =====');
// q2(2, 5);
// q2(4, 3);
// q2(-4, 2);
// console.log('\n');

// const q3 = (arr1, arr2) => {
//   console.log(arr1.map((iv, i) => iv.map((jv, j) => jv + arr2[i][j])));
// };
// console.log('===== Q3 =====');
// q3(
//   [
//     [1, 2],
//     [2, 3],
//   ],
//   [
//     [3, 4],
//     [5, 6],
//   ]
// );
// q3([[1], [2]], [[3], [4]]);
// console.log('\n');

// const q4 = (arr) => {
//   const min = arr.reduce((a, b) => (a < b ? a : b));
//   arr.splice(
//     arr.findIndex((v) => v === min),
//     1
//   );
//   console.log(arr.length === 0 ? [-1] : arr);
// };
// console.log('===== Q4 =====');
// q4([4, 3, 2, 1]);
// q4([10]);
// console.log('\n');

// const q5 = (n) => {
//   console.log(
//     Array.from(String(n), (v) => Number(v))
//       .sort()
//       .reverse()
//   );
// };
// console.log('===== Q5 =====');
// q5(12345);
// console.log('\n');

// const q6 = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
//   console.log(arr);
// };
// console.log('===== Q6 =====');
// q6([1, 3, 5, 2, 4]);
