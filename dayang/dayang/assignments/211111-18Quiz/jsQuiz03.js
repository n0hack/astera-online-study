// 얕은 복사(shallow copy)와 깊은 복사(deep copy)

// 객체는 대부분의 프로그래밍언어에서 참조에 의한 호출로 생성된다. class는 해당 객체의 뼈대만 정의를
// 내릴뿐 객체 그 자체가 아니기 때문이다. -출처: 나라 꺼무위키

// 얕은 복사
let obj1 = {name: 'nohack', age: 28};
let obj2 = obj1;
// 객체를 직접 대입하는경우 참조에 의한 할당이 이루어짐.
// 현재 위 두 객체는 같은 데이터(주소)를 가지고 있음. 
obj2.name = 'sadone'; // 이렇게 수정하면 obj1.name도 함께 변경됨.

console.log(obj1); // {name: 'sadone', age: 28}

// name: nohack과 age: 28 속성을 동일하게 가졌지만, 완전 새로운 obj2를 만들고 싶다!

// ...(spread) 연산자 사용.

let yuigahama = {name: 'yui', age: 19};
let yukinoshita = {...yuigahama};

yukinoshita.name = 'yukino';
yukinoshita.age = 18;

console.log(yuigahama); // {name: 'yui', age, 19} 
// 서로 다른 주소를 가지게 됐기 때문에 값이 안바뀜!



