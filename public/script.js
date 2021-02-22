"use strict";
(function () {
    const inputForm = document.getElementById('guess-form');
    const min = 1;
    const max = 22;
    if (inputForm === null) {
        return alert("Please enter a number between 1 and 22!");
    }
    else {
        inputForm.addEventListener("submit", compareUserGuess);
    }
    function compareUserGuess(event) {
        event.preventDefault();
        const secretNumber = generateSecretNumber();
        const userNumberPath = document.getElementById('guess');
        const userNumber = Number(userNumberPath.value);
        if (userNumberPath === null) {
            return alert("Please enter a number between 1 and 22!");
        }
        else {
            if (secretNumber == userNumber) {
                alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
            }
            else {
                alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
            }
        }
    }
    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary(1, 22);
        return secretNumber;
    }
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();
