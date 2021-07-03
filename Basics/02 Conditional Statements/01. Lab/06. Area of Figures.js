function solve(figureType, firstValue, secondValue){
    firstValue = Number (firstValue)
    secondValue = Number (secondValue)

    squareFace = firstValue ** 2
    rectangleFace = firstValue * secondValue
    circleFace = Math.PI * (firstValue ** 2)
    triangleFace = (firstValue * secondValue) / 2

    if (figureType == "square"){
        console.log((squareFace).toFixed(3))
    }
    else if (figureType == "rectangle"){
        console.log((rectangleFace).toFixed(3))
    }
    else if (figureType == "circle"){
        console.log((circleFace).toFixed(3))
    }
    else if (figureType == "triangle"){
        console.log((triangleFace).toFixed(3))
    }
}
solve("circle",
"6")
