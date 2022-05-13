import {gameButtonSelector} from "./styles/modules/element-selectors";
import {gradientColorSelector} from "./styles/modules/element-selectors";
export {gameButtonSelector}
export {gradientColorSelector}

export function chooseNumber(): void {
    const drawTicket = Math.floor((Math.random() * 100) + 1);
    let number;
    let howMany = 0;

    do {
        number = parseInt(prompt("Podaj liczbe !"));
        howMany = howMany + 1

        if (number > drawTicket) {
            console.log("To za duzo")
        } else if (number < drawTicket) {
            console.log("To za malo")
        } else if (number == drawTicket) {
            console.log("Wygraleś")
            let dec = prompt("Czy chcesz zagrac jeszcze raz ? T/N");
            if (dec == "T") {
                howMany = 0;
                continue;
            } else {
                break;
            }
        }

        if (howMany == 20 && number != drawTicket) {
            console.log("Przegrales")
            let dec = prompt("Czy chcesz zagrac jeszcze raz ? T/N");
            if (dec == "T") {
                howMany = 0;
            } else {
                break;
            }
        }
    } while(number != drawTicket)
}
export function cursorOnButton(){
    console.log("Cursor on the button");
}
export function changeColor(){
    gameButtonSelector.style.background = "#79462C";
}
export function getPersonalData(){
    let firstName = prompt("Type your First Name!");
    let lastName = prompt("Type your Last Name!");
    console.log(`Hello ${firstName} ${lastName}!`);

}
export function gradientColorChange(){
    gradientColorSelector.className ="gradientChange";
}
export function changeCSSClass() {
    document.getElementById("simpleGame").className = "btn btn-danger";
}
export function backToNormal() {
    document.getElementById("simpleGame").className = "btn btn-secondary";
}
export function submitFormHandler(event:Event){
     event.preventDefault();
     console.log("Submitted!");
}