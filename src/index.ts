import './styles/style.scss';

console.log('hello, world');

const testMessage: string = 'TypeScript works';

console.log(testMessage);

console.log("zamiast gry");
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


const btn = document.getElementById('responsiveButton')

    function fn(btn:any):void {
        btn.onclick = chooseNumber

    }
    // html szkielet aplikacji ->

        // .ts logika aplikacji + dostep do całego szkieletu => wezElement(button) ,
        // napisac polaczenie szkieletu z logika infrastruktury
        //
fn(btn)

function getPersonalData(){
        let firstName = prompt("Type your First Name!");
        let lastName = prompt("Type your Last Name!");
        console.log(`Hello ${firstName} ${lastName}!`)

}
const btn2 = document.getElementById('responsiveButton2')

    function hello(btn2:any) {
        btn2.onclick = getPersonalData
    }
hello(btn2)
function cursorOnButton(){
    console.log("Cursor on the button");
}
document.getElementById("responsiveButton").onmouseover = function() {cursorOnButton()};