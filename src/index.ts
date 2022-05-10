import './styles/style.scss';
import {cursorOnButton, formSubmitButton} from './event-side-effects';
import {changeColor} from "./event-side-effects";
import {getPersonalData} from "./event-side-effects";
import {gradientColorChange} from "./event-side-effects";
import {gameButton} from "./event-side-effects";
import {connectorButton} from "./event-side-effects";
import {gradientColor} from "./event-side-effects";
import {chooseNumber} from "./event-side-effects";
import {changeCSSClass} from "./event-side-effects";
import {backToNormal} from "./event-side-effects";
import {cloneCardButton} from "./event-side-effects";
import {checkCardNumber} from "./clone-card-function";
import {formSubmitted} from "./event-side-effects";

const testMessage: string = 'TypeScript works';
console.log(testMessage);

gameButton.addEventListener('mouseover', cursorOnButton)
gameButton.addEventListener('click', chooseNumber);
gameButton.addEventListener('click', changeColor);
connectorButton.addEventListener('click', getPersonalData);
gradientColor.addEventListener('click', gradientColorChange);
gameButton.addEventListener("mouseover", changeCSSClass);
gameButton.addEventListener("mouseout", backToNormal);
cloneCardButton.addEventListener("click", checkCardNumber);
formSubmitButton.addEventListener('submit', formSubmitted);