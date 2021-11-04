
function compare(A,B){
    if(A < B){
        console.log("<");
    }else{
        if(A > B){
            console.log(">");
        }else{
            if(A === B){
                console.log("===");
            }
        }
    }
}

compare(1,2)
compare(10,2)
compare(5,5)
