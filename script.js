    //akan data
let maleAkans = [
    "Sunday: Kwasi",
    "Monday: Kwadwo",
    "Tuesday: Kwabena",
    "Wednesday: Kwaku",
    "Thursday: Yaw",
    "Friday: Kofi",
    "Saturday: Kwame"
]
let femaleAkans = [
    "Sunday: Akosua",
    "Monday: Adwoa",
    "Tuesday: Abenaa",
    "Wednesday: Akua",
    "Thursday:  Yaa",
    "Friday: Afua",
    "Saturday: Ama"
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


function collectData(){
    //collect input date
    let birthday = document.getElementById('date').value
    //convert to date format
    const d = new Date(birthday)
    // get the day in index
    let day = d.getDay()
    // get the gender
}







