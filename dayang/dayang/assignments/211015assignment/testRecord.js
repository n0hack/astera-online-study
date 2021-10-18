
function record(R){
    if(R >= 90 && R <=100){
        console.log(" Your Record is 'A' ")
    }else{
        if(R >= 80 && R <= 89){
            console.log(" Your Record is 'B' ")
        }else{
            if(R >= 70 && R <= 79){
                console.log(" Your Record is 'C' ")
            }else{
                if(R >= 60 && R <= 69){
                    console.log(" Your Record is 'D' ")
                }else{
                    if(R >= 0 && R <= 59){
                        console.log(" Your Record is 'F' ")
                    }else{
                        console.log(" please reEnter record ")
                    }
                }
            }
        }
    }
}

record(100) // A
record(89)  // B  
record(77)  // C
record(65)  // D
record(15)  // F
record(102) // reEnter