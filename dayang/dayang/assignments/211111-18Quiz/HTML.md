1. HTML은 HyperText Markup Language의 약어입니다. 여기서 HyperText란 무엇을 의미하는지 파악하고, 이를 바탕으로 HTML이 무엇인지 설명하세요.
ANS)
HTML: Hypertext Markup Language
	웹을 이루는 가장 기초적인 구성 요소로 웹 콘텐츠의 의미와 구조를 정의할 때 사용함.
Hypertext 란 웹페이지를 다른 페이지로 연결하는 링크를 뜻함. 
	링크는 웹의 근본적인 속성

HTML은 콘텐츠의 서로 다른 부분을 씌우거나(wrap) 감싸서(enclose) 다른 형식으로 보이게 하거나 특정 방식으로 동작하는
일련의 요소(elements)들로 이루어져 있음. 태그(tags)로 감싸는 것으로 단어나 이미지를 다른 어딘가로 하이퍼링크할 수 있음.

ex) <p>techtaku save the world!</p>
<p> = opening tag
</p> = closing tag
techtaku save the world! = contents
위 세가지를 통틀어 하나의 요소(element)라고 함.
<p>tag 요소는 문자의 문단을 포함하기 위한 것


2. HTML, CSS를 포함한 프론트엔드 영역은 뛰어난 도큐먼트(Document)가 존재합니다. 그 중 대표적인 곳은 어디이고, 검색할 때 어떤 식으로 검색하면 좋을까요?
ANS)
MDN이 교과서라고 생각합니다. HTML을 검색하고 싶을땐 HTML mdn으로 검색하면 됩니다.

3. HTML의 기본 구조를 간단히 재춰 주세요. (태그 2개)
ANS)
<!doctype html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>

4. meta 태그가 의미하는 것은 무엇이고, 페이지의 내용을 utf-8로 인코딩하려면 어떻게 작성해야 할까요?
ANS)
웹서버와 웹브라우저간에 상호 교환되는 정보를 정의하는 공간. 문서가 어떤 내용을 담고있는지, 문서의 키워드는 무엇인지, 제작자 등 문서 자체의 특성을 담고 있는 공간이라고함.

- charset 특성을 지정하면 문서 인코딩에 사용한 문자 인코딩을 나타내는 "문자집합선언" 이 됨. 여러가지 종류가 존재하지만 대표적으로 전세계의 모든 문자를 동일하게 표현하기 위한 산업표준으로 유니코드(Unicode)프로젝트를 통해 제정된 UTF(Unicode Transformation Format)을 가장 많이 사용함.
<!-- utf-8 encoding 방법-->
<meta charset="UTF-8"/> <!-- 이 외에도 16, 32 버전 등이 있는듯 하다.-->

5. HTML5 이전에는 페이지의 구조를 단순 div 태그만으로 나눴습니다. 하지만 HTML5부터 시맨틱 태그가 등장했는데, 시맨틱 태그가 무엇인지 작성하고, 아래 구조를 모던 웹에 맞춰 시맨틱하게 변경해 보세요.
ANS)
프로그래밍에서 시맨틱이란 코드조각을 의미한다. 기존의 div, span tag에 id, class 를 통해 구역을 나누고 스타일을 지정하는 방식은 다른 사람이 보기에 명확하게 이해시키기 힘들었지만 시맨틱 태그를 활용하면 한눈에 보기에도 명확한 태그제목으로 다른 개발자가 보아도 무슨 기능을 하기위해 나눠놓은 태그인지 쉽게 구별이 가능하다.
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
			</nav>
		</header>		
		<main>
			<article>
				<section></section>
                <section></section>
			</article>
			<article>
				<section></section>
                <section></section>
			</article>
		</main>
		<footer></footer>
	</body>
</html>

6. HTML 요소는 인라인(inline)과 블럭(block) 요소로 나뉩니다. 두 차이를 설명하세요.
ANS)
inline element
- 사용가능한 필요한 만큼의 영역을 사용(지정한 컨텐츠 크기만큼)
- 요소들이 수평으로 쌓임(한줄에 쌓이는 방식)
- 크기값을 가질 수 없으며 상하 margin 적용이 불가능함(다만 좌우 margin, 상하좌우 padding은 가능하다)
- 보통 text를 작업하는 요소로 적합함

block element
- 최대 가로너비를 사용함(기본 너비값을 100%로 하고 한줄을 다사용함)
- 요소들이 수직으로 쌓임(한줄에 한개씩)
- 크기값을 가질 수 있음(가로 너비와 세로 길이 지정이 가능함)
- 상하좌우 margin 과 padding을 가질 수 있음.
- 레이아웃을 작업하는 요소로 적합함.

7. HTML 요소들은 많은 속성들을 가지고 있습니다. 다음 요소들이 가진 속성을 바탕으로 어떤 의미를 갖고 있는지  설명하세요.
<div id="wrapper"></div> 
<main class="bd-grid"></main>
<img src="urlToImage" alt="thumbnail" />
<a href="www.naver.com" target="_blank">...</a>
ANS)
id - name 속성을 대체할 수 있는 id 속성 wrapper 라는 스타일을 지정
class - bd-grid라는 그룹으로 묶은 스타일 지정
src - urlTOImage 라는 이미지 소스의 URL을 명시함.
alt - Alternate(대채하다) 이미지의 대안을 나타내고 외부주소이기 때문에 주소가 잘못됐거나 해당 위치의 서버에 문제가 있다면 이미지를 못 읽어올수도 있음.
href - hypertext reference 로 링크를 참조하고 싶을 때 사용
ex) <a href="https://www.naver.com">네이버 페이지로 가려면 여기를 클릭</a>
target - 해당 링크를 현재 어떠한 방식으로 열지 결정하는 속성 (이 구문에선 새로운 창이나 탭에서 페이지가 열리도록 설정됨.)
_self: 링크된 문서를 링크가 위치한 현재 프레임에서 오픈(default값으로 생략이 가능하다.)
_parent: 현재 프레임의 부모 프레임에서 오프함.
_top: 현재 창 전체에서 오픈함.


8. id와 class 속성의 역할은 무엇인가요?
ANS)
id - 문서 내에서 해당 태그를 유일하게 식별하는 역할을 함. 동일한 문서 내에서 동일한 이름을 중복하여 사용 불가

class - 공백으로 구분하여 여러개의 클래스명을 지정할 수 있으며 동일한 문서 안에 있는 여러 개의 태그에 동일한 이름으로 지정 가능하고 스타일 시트를 적용할 경우엔 셀렉터로도 이용이 가능하다.