"use strict";
(function () {
    const inputForm = document.getElementById('guess-form');
    const userNumberPath = document.getElementById('guess');
    const min = 1;
    const max = 22;
    console.log(typeof (userNumberPath));
    if (inputForm === null) {
        return alert(`Please enter a number between ${min} and ${max}!`);
    }
    else {
        inputForm.addEventListener("submit", compareUserGuess);
    }
    function compareUserGuess(event) {
        event.preventDefault();
        const secretNumber = generateSecretNumber();
        const userNumber = Number(userNumberPath.value);
        if (userNumberPath === null || userNumber > max || userNumber < min || isNaN(userNumber)) {
            return alert(`Please enter a number between ${min} and ${max}!`);
        }
        else {
            if (secretNumber === userNumber) {
                alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
            }
            else {
                alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
            }
        }
    }
    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary();
        return secretNumber;
    }
    function getRandomArbitrary() {
        return Math.round(Math.random() * (max - min) + min);
    }
})();
