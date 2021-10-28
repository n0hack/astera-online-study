function makeNotSelfNumber(n) {
  const ret = [];

  for (let i = 1; i <= n; i++) {
    let temp = 0;
    let num = i;
    temp += num;

    while (num !== 0) {
      temp += num % 10;
      num = Math.floor((num /= 10));
    }

    ret.push(temp);
  }
  console.log(ret);

  return ret;
}

function printSelfNumber(n, notSNList) {
  for (let i = 1; i <= n; i++) {
    if (!notSNList.includes(i)) console.log(i);
  }
}

printSelfNumber(100, makeNotSelfNumber(100));
// printSelfNumber(10000, makeNotSelfNumber(10000));
