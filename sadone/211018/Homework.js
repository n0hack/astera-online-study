function compare(a,b) {
    if ((a-b)>0) {
        console.log(">");
    }
    else {
        if ((a-b)<0) {
        console.log("<");
    }
    else {
        console.log("===");
    }
}
}

compare(1,2);
compare(10,2);
compare(5,5);

function grade (a) {
    if (a>=90) {
        console.log("A");
    }
    else {
        if (a>=80) {
            console.log("B");
        }
        else {
            if (a>=70) {
                console.log("C");
            }
            else {
                if (a>=60) {
                    console.log("D");
            }
            else {
                console.log("F");
            }
        }
    }
}
}

grade(90);
grade(83);
grade(77);
grade(61);
grade(55);

function leapyear (x) {
    if (x % 400 !== 0) {
        if (x % 4 === 0) {
            if (x % 100 !== 0) {
                console.log("1");
            }
            else {
                console.log("0");
            }
        }
        else {
            console.log("0");
        }
}
else {
    console.log("1")
}
}
        
leapyear(2012);
leapyear(2013);
leapyear(1900);
leapyear(2000);
leapyear(2400);
leapyear(1800);

//1. 입력변수를 4로 나누었을 때 나머지가 0일 경우 다음 단계로
//2. 입력변수를 400으로 나누었을 때 나머지가 0일 경우 다음 단계로
//3. 입력변수를 100으로 나누었을 때 나머지가 0이 아닐 경우 "1" 출력
//4. 이외의 경우 전부 "0"을 출력한다.

// 2000 -> 1. 400으로 나눔 ->  나머지가 0임
// 2. 4로 나눔 -> 나머지가 0이니 다음 단계로
// 3. 100으로 나눔 -> 나머지가 0이 아니니 1 출력

function quarter (x,y) {
    if (x>0) {
        if (y>0) {
            console.log("1");
        }
        else {
            console.log("4");
        }
    }
    else {
        if (y>0) {
            console.log("2");
        }
        else {
            console.log("3");
        }
    }
}

quarter(9,-13);
quarter(12,5);
quarter(-9,13);
quarter(-1,-1);

// 1.x가 양수일 때
// 1-1. y가 양수 -> "1사분면"
// 1-2. y가 음수 -> "4사분면"
// 2. 그 외의 경우(x가 음수)
// 2-1. y가 양수 -> "2사분면"
// 2-2. y가 음수 -> "3사분면"



function alram (h,m) {
    if (m>=45) {
        console.log(`${h} ${m-45}`);
    }
    else {
        if (h !== 0) {
            console.log(`${h-1} ${m+15}`);
        }
        else {
            console.log(`${23} ${m+15}`);
        }
    }
}


alram(9,50);
alram(10,10);
alram(23,40);
alram(0,30);
