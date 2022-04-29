import './styles/style.scss';
import { htmlElementConnector } from './utils';

console.log('hello, world');

const testMessage: string = 'TypeScript works';

console.log(testMessage);

const addEventListenerButton= document.getElementById("addEventListenerButton") as HTMLButtonElement
const connectorButton= document.getElementById("connectorButton") as HTMLButtonElement

function cursorOnButton(){
    console.log("Cursor on the button");
}
function changeColor(){
    addEventListenerButton.style.background = "#79462C";
}
function chooseNumber(): void {
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

function getPersonalData(){
    let firstName = prompt("Type your First Name!");
    let lastName = prompt("Type your Last Name!");
    console.log(`Hello ${firstName} ${lastName}!`)

}

    // html szkielet aplikacji ->

        // .ts logika aplikacji + dostep do całego szkieletu => wezElement(button) ,
        // napisac polaczenie szkieletu z logika infrastruktury
        //
document.getElementById("addEventListenerButton").onmouseover = function() {cursorOnButton()};

addEventListenerButton.addEventListener('click', chooseNumber);
addEventListenerButton.addEventListener('click', changeColor);
htmlElementConnector(connectorButton, 'click', getPersonalData)


