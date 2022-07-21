
const form = document.querySelector('#form');

let rateButtons = document.getElementsByClassName("rate-btn");
let rating = 0;


function checkRating(event) {
    let rateBtns = document.getElementsByClassName('rate-btn');
    for (let i = 0; i < rateBtns.length; i++) {
        if (rateBtns[i].checked == true) {
            rating = rateBtns[i].value;
            console.log(rating);
        }
    }
     return true;
}

function displayMessage() {
   
    document.querySelector('.rating__score').textContent = rating;
    document.querySelector('.thank-you-card').style.display = "block";
    document.querySelector('.rating-card').style.display = "none";
    return false;
}
// console.dir(rateButtons);


// const check = (e) => {
//     const form = new FormDataEvent(e.target);
//     const rating = form.get("rating");
//     console.log();
//     return false;
//     }
    

// const check = (e) => {
//     const form = new FormData(e.target);
//     const rating = form.get("rating");
//     console.log(rating);
//     return false;
// }


function check(e) {
    console.log(e.target);
    return false;
}

