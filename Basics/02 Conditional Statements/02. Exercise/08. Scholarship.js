function solve(income, currentGrade, socialMinimum){
    income = Number (income)
    currentGrade = Number (currentGrade)
    socialMinimum = Number (socialMinimum)
    socialScholarship = socialMinimum * 0.35
    excellentScholarship = currentGrade * 25

    if(income >= socialMinimum){
        if(currentGrade >= 5.50){
            if (excellentScholarship >= socialScholarship){
                console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`)
            } else {
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
            }
        }else{
            console.log("You cannot get a scholarship!") 
        }   
    }else if(income < socialMinimum){ 
        if (currentGrade >= 5.50){
            if (excellentScholarship >= socialScholarship){
                console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`)
            }else{
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
            }
        }else if(currentGrade > 4.50){
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
        }else{
            console.log("You cannot get a scholarship!")
        }
    }else{
        console.log("You cannot get a scholarship!")
    }
}
solve("450.00",
"4.60",
"450.00")
