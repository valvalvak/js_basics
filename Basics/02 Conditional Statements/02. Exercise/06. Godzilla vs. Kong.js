function solve(budget, extraCrewCount, crewClothingPrice){
    
    budget = Number(budget)
    extraCrewCount = Number(extraCrewCount)
    crewClothingPrice = Number (crewClothingPrice)
    
    deocration = budget * 0.1
    if (extraCrewCount > 150){
        crewClothingPrice *= 0.9
    }
    expenses = deocration + extraCrewCount*crewClothingPrice
    diffrence = Math.abs(budget-expenses).toFixed(2)

if (budget < expenses){
        console.log("Not enough money!")    
        console.log(`Wingard needs ${diffrence} leva more.`)
    }
    else{
        console.log("Action!")
        console.log(`Wingard starts filming with ${diffrence} leva left.`)
    }
}
solve("9587.88",
"222",
"55.68")