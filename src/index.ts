import './styles/style.scss';

console.log('hello, world');

const testMessage: string = 'TypeScript works';

console.log(testMessage);

function chooseNumber() {
    const los = Math.floor((Math.random() * 100) + 1);
    let liczba;
    let ile = 0;

    do {
        liczba = parseInt(prompt("Podaj liczbe !"));
        ile = ile + 1

        if (liczba > los) {
            console.log("To za duzo")
        } else if (liczba < los) {
            console.log("To za malo")
        } else if (liczba == los) {
            console.log("Wygraleś")
            let dec = prompt("Czy chcesz zagrac jeszcze raz ? T/N");
            if (dec == "T") {
                ile = 0;
                continue;
            } else {
                break;
            }
        }

        if (ile == 20 && liczba != los) {
            console.log("Przegrales")
            let dec = prompt("Czy chcesz zagrac jeszcze raz ? T/N");
            if (dec == "T") {
                ile = 0;
            } else {
                break;
            }
        }
    } while (liczba != los)
}
chooseNumber()
