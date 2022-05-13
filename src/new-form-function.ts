import {formButtonSelector, submitFormSelector} from "./styles/modules/element-selectors";
export {formButtonSelector};
import {submitFormHandler} from "./event-side-effects";
export {submitFormHandler};

export function showForm(){
    document.getElementById("form").className = "showForm";
}
export function changeFormButton(){
    document.getElementById("showFormButton").innerHTML = "Hide Form";
}
export function hideForm(){
    document.getElementById("form").className = "hideForm";
}
export function changeFormButtonToDefault(){
    document.getElementById("showFormButton").innerHTML = "Show Form";
}
export function formSwitch(){
    if (formButtonSelector.classList.contains("hideForm")){
        formButtonSelector.addEventListener('click', showForm);
        formButtonSelector.addEventListener('click', changeFormButton);
    }
    else if (formButtonSelector.classList.contains("showForm")) {
        formButtonSelector.addEventListener('click', hideForm);
        formButtonSelector.addEventListener('click', changeFormButtonToDefault);
    }
}
interface formOptions {
    fullName: string;
    gender: string;
    password: string;
    nationality: string;
    animal: boolean;
    image?: undefined;
}

// const form: formOptions = {
//     fullName: document.getElementById("inputFullName"),
//
// };

const fullName = document.getElementById("inputFullName");
const gender = document.getElementById("selectGender");
const password = document.getElementById("inputPassword");
const nationality = document.getElementById("selectNationality");
const animal = document.getElementById("animalCheck");
const image = document.getElementById("inputFile");

// const section = document.querySelector('.formSection');
// const form = section.querySelectorAll('.hideForm');
// const submitInput = form[0].querySelector("button[id='submitButton']");
//
// export function getFormData(event:Event){
//     event.preventDefault();
//     let formData = new FormData(form[0]);
//     console.log(`${formData.get('inputFullName')} - ${formData.get('selectGender')} - ${formData.get('inputPassword')}) - ${formData.get('selectNationality')} - ${formData.get('animalCheck')}`)
// }
// export function submitData(){
//     submitInput.addEventListener('click', getFormData, false);
// }
//
//
// //    alert(form);
// //    const inputFormData = document.getElementById('form').innerHTML;
// //    console.log(inputFormData);

