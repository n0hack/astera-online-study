this.name = '검둥이';

const dog = {
    name: '흰둥이',
    greeting: () => {
        console.log(`안뇽! 내 이름은 ${this.name}야!`); //
    },
    greeting2() {
        console.log(`아령하세연 제 이름은 ${this.name}에연!`);
    },
};

dog.greeting();
dog.greeting2();

// 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적(static) 으로 결정되고, 화살표 함수의 this는
// 항상 상위 스코프의 this를 가리킨다. 이걸 Lexical this라고 함.