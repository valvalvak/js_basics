function solve (travelCost, puzzels, dolls, tedyBears, minions, trucks){
   
    travelCost = Number(travelCost)
    puzzels = Number(puzzels)
    dolls = Number (dolls)
    tedyBears = Number (tedyBears) 
    minions = Number (minions)
    trucks = Number (trucks)

    puzzelsSum = puzzels * 2.60
    dollsSum = dolls * 3
    tedyBearsSum = tedyBears * 4.10
    minionsSum = minions * 8.20
    trucksSum = trucks * 2
    
    toysCount = puzzels + dollsSum + tedyBears + minions + trucks
    
    toysSum = puzzelsSum + dollsSum + tedyBearsSum + minionsSum + trucksSum
    
    if (toysCount >= 50){
        toysSum *= 0.75
    }
    
    totalSum = toysSum * 0.90

    difference = Math.abs(totalSum-travelCost).toFixed(2)
    
    if (totalSum >= travelCost){
        console.log(`Yes! ${difference} lv left.`)
    }
    else{
        console.log(`Not enough money! ${difference} lv needed.`)
    }

}
solve("320", "8", "2", "5", "5", "1")