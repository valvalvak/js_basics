function solve(strawberriesPrice, bananas, oranges, raspberries, strawberries){
    strawberriesPrice = Number(strawberriesPrice)
    raspberriesPrice = strawberriesPrice / 2
    raspberriesSum = raspberriesPrice * Number(raspberries)
    orangesSum = raspberriesPrice * 0.6 * Number(oranges)
    bananasSum = raspberriesPrice * 0.2 * Number (bananas)
    strawberriesSum = Number(strawberries) * strawberriesPrice
    totalSum = raspberriesSum + orangesSum + bananasSum + strawberriesSum
    console.log(totalSum)
}
solve("48",
"10",
"3.3",
"6.5",
"1.7")
