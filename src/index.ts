import './styles/style.scss';
import { htmlElementConnector } from './utils';

console.log('hello, world');

const testMessage: string = 'TypeScript works';

console.log(testMessage);

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
// chooseNumber()

const addEventListenerButton= document.getElementById("addEventListenerButton") as HTMLButtonElement
const connectorButton= document.getElementById("connectorButton") as HTMLButtonElement

function hello() {
    console.log('hello')
}


function hello2() {
    console.log('hello2')
}


addEventListenerButton.addEventListener('click', hello)
htmlElementConnector(connectorButton,'click',hello2)




