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
//collectData to verify and apply various names based on data input 
function collectData() {
    let birthday = document.getElementById('date').value
    const d = new Date(birthday)
    const today = new Date()
    let day = d.getDay()
    let gender = document.getElementById('gender').value;
    let form = document.querySelector('form')
    let modal = document.getElementById('modal')
    let text = document.querySelector('.description')
    let footer = document.querySelector('.footer')
    let a = document.createElement('a'); 
    let link; 
    if (d > today) {
        //warning
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = "Wow! Are you from the future."
        footer.classList.add('footer-hide')  
        a.classList.add("link-style")
        link =document.createTextNode("Retry")   
        a.appendChild(link); 
        a.href = "index.html"; 
        modal.appendChild(a); 
    }
    else if (isNaN(d) || gender == '') {
        // warning
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = "You havent entered either your gender or birthday."
        footer.classList.add('footer-hide')
        a.classList.add("link-style")
        link =document.createTextNode("Retry")    
        a.appendChild(link); 
        a.href = "index.html"; 
        modal.appendChild(a); 
    }
    else if (gender == "male" && day == 0) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[0]}.Your Akan Name is : ${maleAkans[0]}.`
        footer.classList.add('footer-hide')
        a.classList.add("link-style")
        link =document.createTextNode("Back Home")    
        a.appendChild(link); 
        a.href = "index.html"; 
        modal.appendChild(a); 
    }
    else if (gender == 'female' && day == 0) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[0]}.Your Akan Name is : ${femaleAkans[0]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'male' && day == 1) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[1]}.Your Akan Name is : ${maleAkans[1]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'female' && day == 1) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[1]}.Your Akan Name is : ${femaleAkans[1]}.`
        footer.classList.add('footer-hide')

    }
    else if (gender == 'male' && day == 2) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[2]}.Your Akan Name is : ${maleAkans[2]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'female' && day == 2) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[2]}.Your Akan Name is : ${femaleAkans[2]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'male' && day == 3) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[3]}.Your Akan Name is : ${maleAkans[3]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'female' && day == 3) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[3]}.Your Akan Name is : ${femaleAkans[3]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'male' && day == 4) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[4]}.Your Akan Name is : ${maleAkans[3]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'female' && day == 4) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[4]}.Your Akan Name is : ${femaleAkans[4]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'male' && day == 5) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[5]}.Your Akan Name is : ${maleAkans[5]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'female' && day == 5) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[5]}.Your Akan Name is : ${femaleAkans[5]}.`
        footer.classList.add('footer-hide')
    }
    else if (gender == 'male' && day == 6) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[6]}.Your Akan Name is : ${maleAkans[6]}.`
        footer.classList.add('footer-hide')
        console.log(maleAkans[6])
    }
    else if (gender == 'female' && day == 6) {
        form.classList.add('form-hidden')
        text.classList.add('hide-description')
        modal.classList.add('modal-display')
        modal.textContent = `You were born on ${days[6]}.Your Akan Name is : ${femaleAkans[6]}.`
        footer.classList.add('footer-hide')
    }
}








