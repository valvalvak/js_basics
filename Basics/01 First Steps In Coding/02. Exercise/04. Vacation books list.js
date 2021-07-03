// Вход
// Функцията получава 3 аргумента:
// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000];
// 2.	Страници, които може да прочита за 1 час – цяло число в интервала [1…1000];
// 3.	Броя на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000];

function solve(currentPages, pagesPerHour, daysPerBook){
    currentPages = Number(currentPages)
    pagesPerHour = Number(pagesPerHour)
    daysPerBook = Number(daysPerBook)
    
    let readHours = (currentPages / pagesPerHour) / daysPerBook
    console.log(readHours)

}
solve("432",
"15",
"4")
