const adviceDiv = document.querySelector('.advice');
let adviceHeading = document.querySelector('.card__heading');
const button = document.querySelector('.dice');
button.addEventListener('click', fetchAdvice);

function fetchAdvice () {
    fetch('	https://api.adviceslip.com/advice') 
        .then((response) => response.json())
        .then((data) => {
            adviceDiv.textContent = '"' + data.slip.advice + '"';
            adviceHeading.textContent = "ADVICE #" + data.slip.id;
        }
    );
}

fetchAdvice();