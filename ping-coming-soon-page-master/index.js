//developer: santiago morales

//get form and values
const form = document.querySelector('form')
const email = document.getElementById('email')
const error = document.getElementById('error')

error.style.display = 'none'
email.addEventListener('blur', () =>{
    console.log(email.value)

    if(!email.value){
        email.classList.add('form-invalid')
        email.placeholder = 'email@example/com'
        error.style.display = 'block'
    }else{
        email.classList.remove('form-invalid')
        error.style.display = 'none'
    }
})