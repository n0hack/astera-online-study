console.log("\\    /\\ \n )  ( ') \n(  /  )\n \\(__)|");
//escape sequences

//2. 사칙연산

function cal (x,y) {
    function add(x,y) {
        return x+y;
    }
    function sub(x,y) {
        return x-y;
    }
    function times(x,y) {
        return x*y;
    }
    function divd(x,y) {
        return x/y;
    }
    function rest(x,y) {
        return x%y;
    }
    console.log('덧셈 : '+ add(x,y));
    console.log('뺄셈 : '+ sub(x,y));
    console.log('곱셈 : '+ times(x,y));
    console.log('나눗셈 : '+ divd(x,y));
    console.log('나머지 : '+ rest(x,y));
}

cal(5,2);


//3. 나머지

function rest (x,y,z) {
    const a = (x+y)%z;
    const b = ((x%z) + (y%z))%z;
    const c = (x*y)%z;
    const d = ((x%z)*(y%z))%z;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

rest(5,8,4);