
function quadrant(x,y){
    if(x > 0 && y > 0){
        console.log("Quadrant 1")
    }else{
        if(x < 0 && y > 0){
            console.log("Quadrant 2")
        }else{
            if(x < 0 && y < 0){
                console.log("Quadrant 3")
            }else{
                if(x > 0 && y < 0){
                    console.log("Quadrant 4")
                }else{
                    if(x === 0 && y === 0){
                        console.log("Center")
                    }
                }
            }
        }
    }
}

quadrant(9,-13)
quadrant(12,5)
quadrant(-12,-5)
quadrant(-12,5)