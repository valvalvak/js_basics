function solve(depositedAmount, timePeriod, annualInterest){
    depositedAmount = Number(depositedAmount)
    timePeriod = Number(timePeriod)
    annualInterest= Number(annualInterest) / 100

    // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let totalSum = depositedAmount + timePeriod * ((depositedAmount * annualInterest) / 12)
    
    console.log(`${totalSum}`)
}

solve("2350",
"6",
"7")
