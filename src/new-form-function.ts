export const formButton = document.getElementById("showFormButton") as HTMLButtonElement;

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
    if (formButton.classList.contains("hideForm")){
        formButton.addEventListener('click', showForm);
        formButton.addEventListener('click', changeFormButton);
    }
    else {
        formButton.addEventListener('click', hideForm);
        formButton.addEventListener('click', changeFormButtonToDefault);
    }
}