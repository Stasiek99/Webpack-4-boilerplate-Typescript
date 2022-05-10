export const formButton = document.getElementById("showForm") as HTMLButtonElement;

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
export function formSwich(){
    if (formButton.classList.contains("hideForm")){
        showForm();
        changeFormButton();
    }
    else {
        hideForm();
        changeFormButtonToDefault();
    }
}