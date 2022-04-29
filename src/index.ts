import './styles/style.scss';
import {cursorOnButton} from './event-side-effects';
import {changeColor} from "./event-side-effects";
import {getPersonalData} from "./event-side-effects";
import {gradientColorChange} from "./event-side-effects";
import {gameButton} from "./event-side-effects";
import {connectorButton} from "./event-side-effects";
import {gradientColor} from "./event-side-effects";
import {chooseNumber} from "./event-side-effects";

const testMessage: string = 'TypeScript works';

console.log('hello, world');
console.log(testMessage);

document.getElementById("simpleGame").onmouseover = function() {cursorOnButton()};

gameButton.addEventListener('click', chooseNumber);
gameButton.addEventListener('click', changeColor);
connectorButton.addEventListener('click', getPersonalData);
gradientColor.addEventListener('click', gradientColorChange);
