
function leapYear(year) {
    if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
        console.log("1")
    }else{
        console.log("0")
    }
}

leapYear(2000)
leapYear(1999)