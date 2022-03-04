

let inputDate = document.getElementById('dd')
let inputMonth = document.getElementById('mm')
let inputYear = document.getElementById('yy')
let inputGender = document.getElementById('gender')


let userDD;
let userMM;
let userYY;
let userGender;




//collect data and parse the integers
function collectData(){
     userDD = inputDate.value
     userMM = inputMonth.value
     userYY = inputYear.value
     userGender = inputGender.value
     console.log(userDD, userMM, userYY, userGender)
}
