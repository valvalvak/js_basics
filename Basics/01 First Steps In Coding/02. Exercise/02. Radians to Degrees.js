function radiansToDegrees (input){
    let radians = Number(input)
    let degrees = input * 180 / Math.PI
    console.log(degrees.toFixed(0))
}
radiansToDegrees(6.2832)
