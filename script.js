//akan data
let maleAkans = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
]
let femaleAkans = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
]
let days = [
    'Sunday',
    'Monday',
    'Tuesdday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]


//add event listener
let inputAction = document.getElementById('btn').addEventListener('click', collectData)
function collectData() {
    let birthday = document.getElementById('date').value
    const d = new Date(birthday)
    const today = new Date()
    let day = d.getDay()
    let gender = document.getElementById('gender').value;
    if (d > today){
        console.log("Seems like you havent been born yet")
    }
    else if (isNaN(d) || gender == ''){
        console.log('You havent entered your gender or birthday')
    }
    else if (gender == "male" && day == 0){
        console.log(maleAkans[0])
    }
    else if (gender == 'female' && day  == 0){
        console.log(femaleAkans[0])
    }
    else if (gender == 'male' && day  == 1){
        console.log(maleAkans[1])
    }
    else if (gender == 'female' && day  == 1){
        console.log(femaleAkans[1])
    }
    else if (gender == 'male' && day  == 2){
        console.log(maleAkans[2])
    }
    else if (gender == 'female' && day  == 2){
        console.log(femaleAkans[2])
    }
    else if (gender == 'male' && day  == 3){
        console.log(maleAkans[3])
    }
    else if (gender == 'female' && day  == 3){
        console.log(femaleAkans[3])
    }
    else if (gender == 'male' && day  == 4){
        console.log(maleAkans[4])
    }
    else if (gender == 'female' && day  == 4){
        console.log(femaleAkans[4])
    }
    else if (gender == 'male' && day  == 5){
        console.log(maleAkans[5])
    }
    else if (gender == 'female' && day  == 5){
        console.log(femaleAkans[5])
    }
    else if (gender == 'male' && day  == 6){
        console.log(maleAkans[6])
    }
    else if (gender == 'female' && day  == 6){
        console.log(femaleAkans[6])
    }

    
}








