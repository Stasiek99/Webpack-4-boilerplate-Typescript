import './styles/style.scss';
import {cursorOnButton} from './event-side-effects';
import {submitFormSelector} from "./styles/modules/element-selectors";
import {changeColor} from "./event-side-effects";
import {getPersonalData} from "./event-side-effects";
import {gradientColorChange} from "./event-side-effects";
import {gameButtonSelector} from "./event-side-effects";
import {connectorButtonSelector} from "./styles/modules/element-selectors";
import {gradientColorSelector} from "./event-side-effects";
import {chooseNumber} from "./event-side-effects";
import {changeCSSClass} from "./event-side-effects";
import {backToNormal} from "./event-side-effects";
import {cloneCardButtonSelector} from "./styles/modules/element-selectors";
import {checkCardNumber} from "./clone-card-function";
import {submitFormHandler} from "./event-side-effects";
import {formButtonSelector} from "./new-form-function";
import {formSwitch} from "./new-form-function";
//import {getFormData} from "./new-form-function";

const testMessage: string = 'TypeScript works';
console.log(testMessage);

gameButtonSelector.addEventListener('mouseover', cursorOnButton)
gameButtonSelector.addEventListener('click', chooseNumber);
gameButtonSelector.addEventListener('click', changeColor);
connectorButtonSelector.addEventListener('click', getPersonalData);
gradientColorSelector.addEventListener('click', gradientColorChange);
gameButtonSelector.addEventListener("mouseover", changeCSSClass);
gameButtonSelector.addEventListener("mouseout", backToNormal);
cloneCardButtonSelector.addEventListener("click", checkCardNumber);
submitFormSelector.addEventListener('submit', submitFormHandler);
formButtonSelector.addEventListener('click', formSwitch);
//submitFormSelector.addEventListener('submit', getFormData);
console.log(document.querySelector('hideForm').value);
