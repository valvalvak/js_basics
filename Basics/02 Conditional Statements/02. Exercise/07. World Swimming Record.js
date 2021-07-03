function solve(worldRecordInSeconds, distanceInMeters, secondsPerMeter){
    
    worldRecordInSeconds = Number (worldRecordInSeconds)
    distanceInMeters = Number (distanceInMeters)
    secondsPerMeter = Number (secondsPerMeter)

    swimmerProgress = distanceInMeters * secondsPerMeter
    slowdown = Math.floor(distanceInMeters / 15) * 12.5

    achievment = (swimmerProgress+slowdown).toFixed(2)
    difference = (Math.abs(worldRecordInSeconds-achievment)).toFixed(2)

    if (worldRecordInSeconds>achievment){
        console.log(`Yes, he succeeded! The new world record is ${achievment} seconds.`)
    }
    else{
        console.log(`No, he failed! He was ${difference} seconds slower.`)
    }
}
solve("55555.67",
"3017",
"5.03")
