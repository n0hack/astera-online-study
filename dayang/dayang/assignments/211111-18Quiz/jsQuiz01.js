class Person {  // person class 생성
    constructor(name, age){ // 생성자를 만든 후 name과 age를 인자로 받고 할당
        this.name = name;
        this.age = age;
    }

    move(){ // 행동 메서드 move 생성
        console.log(`${this.name} call move`);
    } 

    say(){  // 행동 메서드 say 생성
        console.log(`${this.name} call say`)
    }
}

const person1 = new Person("person1", "18"); // person1 객체 생성
const person2 = new Person("person2", "19"); // person2 객체 생성
person1.move(); // person1 객체를 통한 move 호출

class Teacher extends Person {
    constructor(name, age, job) {
        super(name, age); // 부모 클래스의 생성자 호출?
        this.job = job;
    }

    teach(){
        console.log(`${this.job} call person1`);
    }
}

const teacher = new Teacher("person3", "29", "teacher");

teacher.teach();
teacher.say();