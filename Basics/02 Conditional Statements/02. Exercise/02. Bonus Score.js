function solve(value){
    
    value = Number(value)
    
    let bonusScore = Number (0)
   
    if (value <= 100){
        bonusScore += 5
    }
    else if (value <= 1000){
        bonusScore = value * 0.2
    }
    else{
        bonusScore = value * 0.1
    }
    if (value % 2 == 0){
        bonusScore += 1
    }
    else if (value % 10 == 5){
        bonusScore += 2
    }
    
    let scoreSum = bonusScore + value
    
    console.log(`${bonusScore}`)
    console.log(`${scoreSum}`)
}
solve("15875")