
function alarm(h,m){
        if(m - 45 > 0){ //조건 1 : minute - 45 가 0보다 클 때
            console.log(`${h} : ${m-45}`)
        }else{
            if(h !== 0){ //조건 2 : hour가 0이 아닐 때
                console.log(`${h-1} : ${m+15}`)
            }else{
                console.log(`${23} : ${m+15}`)
            }
        }
    }

    alarm(10, 10)
    alarm(0, 30)
    alarm(23, 40)