# 문제1. 함수 만들기

- 더하기, 빼기, 곱하기, 나누기 기능을 갖고 있는 4개의 함수 만들기
- 각 함수는 2개의 매개변수를 받고, 정의한 기능에 따라 계산 후 반환한다.
- 각 함수를 호출해보고, 그 값을 콘솔에 출력해 본다.
  ANS))
  function addition(x, y) {
  let add = 2 + 3;
  return add;
  }
  console.log(add);

function subtraction(x, y) {
let sub = 4 - 3;
return sub;
}
console.log(sub);

function multiplication(x, y) {
let multi = 6 \* 2;
return multi;
}
console.log(multi);

function division(x, y) {
let div = 6 / 3;
return div;
}
//console.log(div);

# 문제2. 다음 링크의 글을 읽고, 호이스팅을 간단하게 설명하기

[🔥🕺🏼 JavaScript Visualized: Hoisting](https://dev.to/lydiahallie/javascript-visualized-hoisting-478h)

function, var, let, const에 대해 일어나는 호이스팅 현상들

ANS)) 호이스팅(Hoisting)이란, 함수와 변수를 실행하기 전에 실행 컨텍스트를 위해 메모리에 저장하는 것을 의미한다.
var로 선언한 변수의 경우엔 호이스팅 시, 변수를 undefined로 초기화하지만 let과 const의 경우엔 변수를 초기화 하지 않는다.

# 문제3. 함수형 프로그래밍이란 무엇인가?

- 순수함수, 일급객체(함수)를 포함하여 설명하기
- 어떤 장점이 있는지 설명하기

ANS-01)) 함수형 프로그래밍은 선언형 프로그래밍의 일종으로 거의 모든 것을 순수함수로 나누어 문제를 해결하는 기법이다. 대입문을 사용하지 않으며 부수효과가 없는 순수함수를 1급 객체로 간주하여 파라미터로 넘기거나 반환값으로 사용할 수 있고 참조 투명성을 지킬 수 있다.
ANS-02)) 대표적인 장점으론

1.  높은 수준의 추상화를 제공
2.  함수 단위의 코드 재사용이 수월
3.  불변성을 지향하기 때문에 프로그램의 동작을 예측하기 쉬움
    등이 있다.

< 순수함수 >

- 사이드 이펙트가 없는 함수

# 문제4. 팩토리얼을 구하는 함수를 재귀(Recursive)로 구현하기

- input: 5 --> factorial(5);
- output:

< hint >
컴퓨터의 메모리 구조는 스택(Stack)인 것을 떠올리면 된다.
스택 구조라 함은 아래에서 위로 쌓이며, 제거할 때는 그 반대인 위에서 아래로 제거된다.
이를 Last In, First Out(LIFO) 또는 First In, Last Out(FILO)이라 부른다.

최초로 팩토리얼 함수를 호출하면, 스택에 그 함수가 쌓일 것이다.
그리고 내부에서 호출할 때마다, 최초로 호출된 함수 위에 계속해서 새롭게 호출한 함수들이 쌓일 것이다.
더 이상 호출할 함수가 없다면, 스택에 더 쌓일 것이 없기에,
하나씩 제거가 되면서 해당 함수의 결과를 아래의 함수(자신을 호출한 함수)에게 반환할 것이다.

이 힌트를 보고 구현해 본다면,

1. 팩토리얼 함수 내부에서 팩토리얼 함수를 호출할 것이다.
   --> factorial(5), factorial(4), ...
2. 조건을 걸어 어느 순간에는 더 이상 팩토리얼 함수를 호출되지 않도록 할 것이다.
   --> factorial(1)은 1이니까, if를 걸어 매개변수를 체크하면 될 것

ANS))
function factorial(num){
if(num === 1){
return 1;
}else{
return num \* factorial(num - 1)
}
}
print(factorial(5)); // 120
print(factorial(4)); // 24
