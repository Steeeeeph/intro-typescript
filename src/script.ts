(function() {
    const  inputForm = document.getElementById('guess-form');
    const userNumberPath = <HTMLInputElement>document.getElementById('guess');
    const min: number = 1;
    const max: number = 22;
    console.log(typeof(userNumberPath));
    if (inputForm === null) {
        return alert(`Please enter a number between ${min} and ${max}!`);
    } else {
    inputForm.addEventListener("submit", compareUserGuess);
    }
    function compareUserGuess (event: any){
        event.preventDefault();

        const secretNumber: number = generateSecretNumber();
        const userNumber: number = Number(userNumberPath.value);

        if (userNumberPath === null || userNumber > max || userNumber < min || isNaN(userNumber)) {
            return alert(`Please enter a number between ${min} and ${max}!`);
        } else {
            if (secretNumber === userNumber) {
                alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
            } else {
                alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
            }
        }

    }

    function generateSecretNumber(): number {
        const secretNumber = getRandomArbitrary();

        return secretNumber;
    }

    function getRandomArbitrary(): number {
        return Math.round(Math.random() * (max - min) + min);
    }
})();