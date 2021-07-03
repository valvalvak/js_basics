function solve(firstRuner, secondRuner, thirdRuner){
    firstRuner = Number (firstRuner)
    secondRuner = Number (secondRuner)
    thirdRuner = Number (thirdRuner)

    totalTime = firstRuner + secondRuner + thirdRuner
    minutes = Math.floor(totalTime / 60)
    seconds = (totalTime % 60)
    if (seconds < 10){
        console.log(`${minutes}:0${(seconds)}`)
    }
    else {
        console.log(`${minutes}:${(seconds)}`)
    }
}
solve("35", "45", "44")