export function chooseCardToClone() {
    const cardNumber = parseInt(prompt("Select the number of a card you want to clone!"));
    return cardNumber;
}
export function getChildrenById(){
    const listOfCards = document.getElementById("cards");
    const cardChildren = listOfCards.children;
    return cardChildren;
}
export function cloneChosenCard(cardNumberByUserInput:number){
    const chosenIDNumber = getChildrenById();
    const chosenCard = chosenIDNumber[cardNumberByUserInput-1];
    const copyCard = chosenCard.cloneNode(true);
    return copyCard;
}
export function insertCard(cardNumberByUserInput: number){
    const cloneCard = cloneChosenCard(cardNumberByUserInput);
    document.getElementById("cards").appendChild(cloneCard);
}
export function checkCardNumber(){
    const cardNumberByUserInput = chooseCardToClone();
    const result = Number.isInteger(cardNumberByUserInput);
    if (result && cardNumberByUserInput>=0 && cardNumberByUserInput<=9){
        insertCard(cardNumberByUserInput);
    }
    else {
        console.log("There is no card with such a number");
    }
}