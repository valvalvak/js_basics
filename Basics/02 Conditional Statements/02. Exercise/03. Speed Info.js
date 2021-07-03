function solve(speedIs){
    speedIs = Number (speedIs)
    if (speedIs <= 10){
        console.log("slow")
    }
    else if (speedIs <=50){
        console.log("average")
    }
    else if (speedIs <=150){
        console.log("fast")
    }
    else if (speedIs <=1000){
        console.log("ultra fast")
    }
    else{
        console.log("extremely fast")
    }
}
solve("3500")