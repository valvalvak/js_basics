function solve(inputNumber){
    inputNumber = Number (inputNumber)
    if (inputNumber < 100){
        console.log("Less than 100")
    }
    else if (inputNumber <=200){
        console.log("Between 100 and 200")
    }
    else{
        console.log("Greater than 200")
    }
}
solve("90")