function solve(hoursInput, minutesInput){
    hoursInput = Number (hoursInput) * 60
    minutesInput = Number (minutesInput)
    timeSum = hoursInput + minutesInput + 15
    hoursOut = Math.floor(timeSum / 60)
    minutesOut = timeSum % 60
    if (hoursOut == 24){
        hoursOut = 0
    }
    if (minutesOut == 60){
        minutesOut = 0
    }
    if (minutesOut < 10){
        console.log(`${hoursOut}:0${minutesOut}`)
    }
    else{
        console.log(`${hoursOut}:${minutesOut}`)
    }
}
solve("12", "49")