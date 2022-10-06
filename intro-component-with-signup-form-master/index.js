//developer: santiago morales

//get the form and form values
const form = document.querySelector('form');
const formValues = document.querySelectorAll('input');

//at start, turn off the error icons
formValues.forEach(element =>{
    element.classList.remove('feedback-input');
});
const errorIcons = document.getElementsByClassName('feedback');


for(let i=0; i<errorIcons.length; i++){
    errorIcons[i].classList.add('hide');
}

for(let i=0; i< formValues.length; i++){
    formValues[i].addEventListener('blur',function(){

        if(!this.value){
            this.classList.add('feedback-input');
            errorIcons[i].classList.remove('hide');

            if(this.id == "email"){
                this.placeholder = "email@example/com";
                this.classList.add('show');
            }
        }else{
            this.classList.remove('feedback-input');
            errorIcons[i].classList.add('hide');
        }
    });
}
