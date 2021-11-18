HTML

1. HTML은 HyperText Markup Language의 약어입니다.
   여기서 HyperText란 무엇을 의미하는지 파악하고,
   이를 바탕으로 HTML이 무엇인지 설명하세요.

Hyper(=above,beyond) + Text
web에서 documents간 immediately access가 가능할 수 있게 하는 도구
On the other words, HYPERTEXT는 한 webpage에서 다른 webpage에 연결할 수 있게 하는 link

Therefore, Hypertext + MarkupLanguage = 이러한 Hypertext를 표현하기 위해 markup을 사용한 Language.
Markup : Mark(≒Tag) : ex) <head>,<body>,<p>,<img>,<span>...etc 를 'up(≒present)'
To sum it up, HTML : Hypertext를 표현하기 위해 Mark를 사용해 up하는 language

//markdown : 간단, 간편 표현
//markup ⊃ markdown \*github readme

2. HTML, CSS를 포함한 프론트엔드 영역은 뛰어난 도큐먼트(Document)가 존재합니다. 그 중 대표적인 곳은 어디이고, 검색할 때 어떤 식으로 검색하면 좋을까요?

MDN Web Docs - (舊. Mozilla Developer Network)
검색 시 : <검색어> + mdn

3. HTML의 기본 구조를 간단히 채워 주세요. (태그 2개)

<!doctype html>
<html>
    <head></head>
    <body></body>
</html>

4.★ meta 태그가 의미하는 것은 무엇이고, 페이지의 내용을 utf-8로 인코딩하려면 어떻게 작성해야 할까요?

meta태그에 대해 접근하기 전에, 'metadata'에 대해서 이해가 필요한데
meta데이터는 '데이터에 대한 데이터' + '근데 그 데이터가 어떤 목적을 가지고 만들어진 data'라고 할 수 있는데,

간단히 말해, '사진' 이라는 data가 있으면 그에 수반하는 '촬영 일자' '촬영 장소' '해상도' '사진의 크기(용량)'과 같은 data가 따라붙는데,
이를 metadata로 이해하면 쉽다.

우리가 보는 data 이외에, pc가 이 data를 해석하기 위해 존재하는 또 하나의 hidden data로 이해하자

하여튼간에, 그래서 meta태그는 이 metadata를 포함하는 tag로 받아들이면 쉬운데,
간단히 meta태그 안에 들어가는 여러 요소들을 보면,

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

이러이러한 다양한 것들이 있는데, 간단히 말해 이 html 문서(=파일, 데이터)에 수반되는 metadata를 정의해주는 것이다.
charset은 문서 인코딩에 사용하는 수단을 보여주는 metadata이고,
name은 metadata의 이름을, 그리고 content는 그 이름 아래에 있는 metadata의 내용물을 표현한다!

그러니까, metadata 중, 페이지 내용을 utf-8로 인코딩하라는 metadata를 남기려면,

<meta charset="UTF-8">
와 같이 작성하면 된다.

5. HTML5 이전에는 페이지의 구조를 단순 div 태그만으로 나눴습니다. 하지만 HTML5부터 시맨틱 태그가 등장했는데,
   시맨틱 태그가 무엇인지 작성하고, 아래 구조를 모던 웹에 맞춰 시맨틱하게 변경해 보세요.

semantic tag : Put it plain, 문서를 보기만 해도 그 의미를 짐작할 수 있는 Tag
EX. div = 그냥 나눠둔 것? but, Header = 이 부분은 header이라고 짐작 가능
즉, 타인(협업자/code를 보는 사람들 + SEO:검색 엔진 최적화)은 물론, 본인에게도 해당 Code의 이해도를 높여줄 수 있다! document/content를 명확하게 표기 가능
특히 이 SEO라는 녀석은 semantic tag를 읽을 줄 알아서, 단순히 div div div 로 나뉘어진 문서는 이해하기 힘들어도,
header, nav, article, footer 등 문서를 좀 더 체계적으로 읽어, 사용자에게 제공할 수 있는 능력이 있다!

```html
<!doctype html>
<html>
	<head>
		<title>div to semantic tags</title>
	</head>
	<body>
		<header>
			<h1>Title</h1>
			<nav>
				<ul>
					<li>Menu 1</li>
					<li>Menu 2</li>
					<li>Menu 3</li>
					<li>Menu 4</li>
				</ul>
			<nav>
		</header>

		<main>
			<article>
				<div class="section"></div>
				<div class="section"></div>
			</article>
			<article>
				<div class="section"></div>
				<div class="section"></div>
			</article>
		<main>

		<footer>
		<footer>
	</body>
</html>
```

6. HTML 요소는 인라인(inline)과 블럭(block) 요소로 나뉩니다. 두 차이를 설명하세요.
   inline : 콘텐츠의 흐름을 끊지 않고, 요소를 구성하는 태그에 할당된 공간만 차지
   block : 부모 요소의 전체 공간을 차지하여 "블록"을 형성

ex]

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .highlight {
        background-color: #ee3;
      }
    </style>
  </head>
  <body>
    <div>
      다음 span은 <span class="highlight">인라인 요소</span>로, 영향 범위의
      시작과 끝을 알 수 있도록 배경색을 지정했습니다.
    </div>
    <div>
      다음 p는
      <p class="highlight">블록 레벨 요소</p>
      로, 영향 범위의 시작과 끝을 알 수 있도록 배경색을 지정했습니다.
    </div>
  </body>
</html>
```

를 실행시켜보면, background-color의 range가 inline요소인 <span>과 block 요소인 <p>가 각각 다른 것을 볼 수 있음 ->
inline은 해당 범위 내에서, 개행 없이(일반적으로)
block은 부모 요소의 전체 공간 내의 블록을 형성, 개행이 발생(일반적으로)

7. HTML 요소들은 많은 속성들을 가지고 있습니다. 다음 요소들이 가진 속성을 바탕으로 어떤 의미를 갖고 있는지 설명하세요.

<div id="wrapper"></div>
id = 해당 태그에 id를 부여

<main class="bd-grid"></main>
class = 해당 태그에 class를 부여

<img src="urlToImage" alt="thumbnail" />
src = img의 source(local file / image link 등), alt = img 부연 대체 설명 텍스트

<a href="www.naver.com" target="_blank">...</a>
href : Hyperlink URL, target : Link를 표시할 위치(\_self의 경우 현재창, \_blank는 새 창 또는 탭;이는 사용자 브라우저 설정에 따라 다름)

8. id와 class 속성의 역할은 무엇인가요?

On the Q7, 해당 태그에 id와 class를 부여한다고 상술한 바가 있다.
ID : 1 ID for 1 tag , 1 요소
Class : 1 Class for n tags
대체로 전역적으로 비슷한 style을 정의할 때는 class를 사용하고,
각각의 세부적인 style을 정의해줄 때 ID를 사용한다.

- 모든 곳에 ID를 사용해 동일한 style을 Copy&Paste 하는 것은 시간적으도, code의 길이로도 낭비가 될 수 있는데,
  이것을 동일한 style을 갖는 class 하나로 지정, 하나의 class를 여러 군데에 부여하면 효율적인 code를 작성할 수 있다.

==================================================================

CSS

1. CSS가 무엇의 약어이고, 왜 그런 이름을 가졌는지 특징을 바탕으로 설명하세요. (Hint. CSSOM)

Cascading Style Sheet
위에서부터 코드를 읽어 내려가며 표기하기 때문에 Cascading이라는 수식어가 붙었고,
Style Sheet는 Html에 style을 붙이는 역할을 한다는 의미에서 작명됨

PPT "DOM"

2. ★HTML 요소들은 기본적으로 static한 포지션(position)을 가지고 있습니다.
   이 속성을 변경하는 방법과 어떤 값들이 있는지 최소 세 가지 설명하고, 각각 어떻게 동작하는지 설명하세요.

relative : 상대적 - 태그의 위치를 변경하는 것으로, top/right/bottom/left 속성을 사용해 위치를 조절한다
각각의 방향을 static(기본값) 기준으로 '상대적' 위치를 변경하는 것!

absolute : 절대적 - 태그의 위치를 변경하는 것은 같으나, 상위 태그에 static을 포함하지 않는(relative, absolute, fixed를 포함한) 조상을 기준으로 움직인다.
다시 말해, 상위 태그 안에서 '절대적'인 위치를 정해서 움직이는 것. 만약 상위 태그가 따로 없다면 body가 기준!

fixed : 고정된 - 항상 '어딘가'에 fixed content를 만들 때 사용됩니다

3. CSS는 Box 개념이 정말 중요한데요. 요소의 외부 간격, 내부 여백을 의미하는 두 속성은 무엇일까요?

```css
margin: 14px 7px; /* 외부 간격 */
padding: 14px 7px; /* 내부 여백 */
```

4. 기본적으로 요소가 차지하는 공간은 다음과 같이 계산 됩니다. 하지만 이렇게 계산하게 되면 나중에 여백이나 선을 추가했을 때,
   요소의 크기가 생각했던 것보다 훨씬 커지게 됩니다. 이럴 때 사용하는 속성이 box-sizing입니다. 이 값의 기본값은 무엇이고, 어떤 값을 지정해야 이러한 문제를 해결할 수 있을까요?

```html
/* 50px을 고려했는데, padding이 늘어나면 요소가 더 커지는 문제가 있음 */ 요소의
크기 = padding(14px*2) + border(1px*2) + width(50px) = 80px
```

default value : content-box
지정하는 값)
box-sizing: border-box;

5. HTML 파트의 6번에서 인라인과 블럭 요소에 대해 언급했습니다. 이들은 display 속성으로 변경할 수 있는데요.
   그렇다면 인라인과 블럭 두 특성을 모두 가질 수 있도록 만들어 주기 위해서는 이 속성의 값을 어떻게 해야 할까요?

display: inline-block

6. 다음의 div는 블럭 요소이기 때문에 각 요소마다 한 줄을 차지합니다. 이 블럭들의 사이즈를 각각 20px \* n으로 하고, (가로)일렬로 만든 다음, 무지개처럼 색상도 입혀보세요.

```html
<div
  id="box1"
  style="width: 20px; height: 20px; background-color: red; display :inline-block;"
></div>
<div
  id="box2"
  style="width: 40px; height: 40px; background-color: orange; display :inline-block;"
></div>
<div
  id="box3"
  style="width: 60px; height: 60px; background-color: yellow; display :inline-block;"
></div>
<div
  id="box4"
  style="width: 80px; height: 80px; background-color: green; display :inline-block;"
></div>
<div
  id="box5"
  style="width: 100px; height: 100px; background-color: blue; display :inline-block;"
></div>
<div
  id="box6"
  style="width: 120px; height: 120px; background-color: indigo; display :inline-block;"
></div>
<div
  id="box7"
  style="width: 140px; height: 140px; background-color: violet; display :inline-block;"
></div>
```

7. display 속성 중 flex는 정말 중요하고, 많이 사용합니다.
   다음 사이트(Flexbox Froggy)는 flex를 연습할 수 있는 곳인데, 끝까지 클리어한 다음 인증을 캡처해 남겨 주세요.

Ref. Discord

==================================================================

JS

1. 다음 클래스를 요구조건에 따라 단계적으로 확장해 주세요.

```jsx
class Person {}
```

- 사람은 일반적으로 이름과 나이를 갖습니다. 이를 생성자를 만들어 인자로 받고, 할당해 주세요.
- Person 클래스를 기반으로 person1, person2 인스턴스(객체)를 만들어 주세요.
- 사람은 이름과 나이라는 상태(변수) 외에도 보편적인 행동(메서드)을 갖습니다. move와 say라는 메서드를 만들고, 각각 호출 시 console.log를 통해 어떤 객체가 호출했으며, 함수의 이름은 무엇인지를 함께 찍어 주도록 만들어 주세요.
- person1 객체를 통해 move 메서드를 호출하면 'person1 call move'와 같은 식으로 콘솔에 출력되어야 하고, person2 객체를 통해 호출하면 'person2 call move'처럼 출력되어야 합니다. 두 객체를 통해 메서드를 사용해 보세요.
- Teacher 클래스를 만들어, Person 클래스를 상속 받도록 합니다.
- Teacher 클래스는 job이라는 멤버 변수를 추가로 갖고, teach라는 메서드도 추가로 갖습니다. 이를 각각 생성자와 메서드를 통해 구현해 주세요.
- Teacher 클래스를 기반으로 teacher라는 인스턴스(객체)를 만들어 주세요.
- teacher 객체를 통해 teach와 say 메서드를 호출해 보세요.

```jsx
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move() {
    console.log(`${this.name} call move`);
  }

  say() {
    console.log(`${this.name} call say`);
  }
}
const person1 = new person("person1", "15");
const person2 = new person("person2", "18");

class Teacher extends person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  teach() {
    console.log(`${this.name} call teach`);
  }
}
const teacher = new Teacher("teacher", "30", "otaku");

teacher.teach();
teacher.say();
```

2. ★자바스크립트에서 함수를 정의하는 방법(new Function, eval, arrow, literal 등)은 많습니다.
   저는 개인적으로 간편하기 때문에 화살표 함수를 선호합니다.
   하지만 이 방식은 기존 함수 정의 방법을 대체할 수 없는 이유가 있는데,
   대표적으로 this 바인딩과 export입니다. 모듈을 다루지 않았다면 export는 건너 뛰셔도 좋지만,
   this의 차이는 알 필요가 있습니다. 두 차이를 눈으로 직접 확인하면서, 어떤 차이가 있는지 설명하세요.

```jsx
// 리액트의 클래스에서도 this 바인딩이 문제이므로, 반드시 이해해야 합니다.
this.name = "검둥이";

const dog = {
  name: "흰둥이",
  greeting: () => {
    console.log(`안녕! 내 이름은 ${this.name}야`);
  },
  greeting2() {
    console.log(`안녕! 내 이름은 ${this.name}야`);
  },
};

dog.greeting();
dog.greeting2();
```

this : this.xx 에서 xx(object)는 항상 '무엇이다!' 하고 정해지는게 아니라는 사실
몰?루 그러면 어떻게 결정되나요?
함수가 호출되는 '방식' 에 따라서 뒤의 this 바인딩이 결정된다
개념부터 말하면,

1. 일반 함수 호출 방식 -> this는 포함되어 있는 범위(스코프?) 내에서 정의해준 xx를 가리킨다
2. 화살표 함수 호출 방식 -> this는 언제나 '상위 스코프'의 this를 가리키고 반드시 얘로 정해진다

그러니까, 위의 예문으로 설명하려들면,
greeting2 함수는 일반적인 함수 호출 방식으로 정의되어, const dog 내에서 정의해주었던 name:'흰둥이'로 정해져 this.name이 '흰둥이'가 되고
greeting 함수는 화살표 함수 호출 방식으로 정의되어, 더욱 상위, 여기서는 '전역 스코프'에서 정의해준 this.name = '검둥이'를 받아와 '검둥이'가 되는 것!

3. ★원시 타입의 값은 그대로 다른 변수에 복사를 하면, 값 자체를 복사하는 것이므로 서로 독립적인 값을 갖게 됩니다.
   하지만 객체 타입은 주소를 복사하는 것이므로, 다음 코드처럼 작성하면 서로 같은 것을 가리키게 됩니다. 이를 얕은 복사(Shallow Copy)라고 하는데,
   서로 독립적으로 만드는 깊은 복사(Deep Copy)를 하려면 어떻게 해야 할까요?

```jsx
let obj1 = { name: "nohack", age: 28 };
let obj2 = obj1;

obj2.name = "sadone"; // 이렇게 수정하면 obj1.name도 함께 변경된다.

// name: nohack과 age:28 속성을 동일하게 가졌지만, 완전 새로운 obj2를 만들고 싶다.
```

code와 내용을 주석을 통해 후술합니다.

```jsx
let obj1 = { name: "nohack", age: 28 };
let obj2 = obj1;

obj2.name = "sadone"; // 이렇게 수정하면 obj1.name도 함께 변경된다.

// name: nohack과 age:28 속성을 동일하게 가졌지만, 완전 새로운 obj2를 만들고 싶다.
// 이렇게 복사하는 것이 'shallow copy'
console.log(obj1); // { name: 'sadone', age: 28};

// 그렇다면, 'deep copy'를 하는 방법은?

let obj3 = { name: "sam", feat: "hentai" };
// obj3을 만들었고, 이와 독립적으로 작동하는 obj4를 만들고 싶다. sam이 hentai인 것은 불변의 진리니까
// 하여튼, obj4의 name이든, feat이든 무엇을 수정하든 간에 obj3을 건드리지 않는 객체를 copy하려면,

let obj4 = Object.assign({}, obj3);
//참고로 이 'O'bject의 O는 대문자 O
//그리고 매서드에서 보다시피, 속성을 복사/정의 한다기 보다는 할당(assgin)하는 것에 부합한다.
//참고2로 출처에 obj3 대신 null이나 undefined가 있어도 예외는 발생하지 않는다

let objex = Object.assign({}, null);
console.log(objex); // {}

obj4.name = "yamgool";
obj4.feat = "otaku";

console.log(obj3); // { name: 'sam', feat: 'hentai' }
console.log(obj4); // { name: 'yamgool', feat: 'otaku' }

//매서드의 힘을 빌려, sam이 hentai임도 그대로 고정된 채, yamgool이 오타쿠인 새 object를 만들 수 있었다.
```

다만 위의 Object.assign을 사용하는 방법은 추천되지 않아(airbnb style guide 3.8) ... (spread 연산자)를 사용하는 방법이 더욱 선호되는데, 그 방법은 후술한다.

```jsx
let obj5 = { name: "andhi", job: "developer" };
let obj6 = { ...obj5, status: "sloth" };

obj6.name = "soa";
obj6.job = "nogada";

console.log(obj5); // {name: 'andhi', job: 'developer'}
console.log(obj6); // {name: 'soa', job: 'nogada', status: 'sloth'};
```
