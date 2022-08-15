const form = document.querySelector('#form');
const rateButtons = document.getElementsByClassName("rate-btn");

//validates form to check if a rating has been selected
function checkRating(event) {
    console.log(document.querySelector('input[name="rating"]:checked').value);
    let rateBtns = document.getElementsByClassName('rate-btn');
    for (let i = 0; i < rateBtns.length; i++) {
        if (rateBtns[i].checked == true) {
            return true;
        }
    }
    return false;    
}
     
// calls getRating() and displays the "thank you" message 
function displayMessage() {
    const rating = getRating();
    document.querySelector('.rating__score').textContent = rating;
    document.querySelector('.thank-you-card').style.display = "block";
    document.querySelector('.rating-card').style.display = "none";
    return false;
}

//retrieves the value of the checked radio button
function getRating() {
    return document.querySelector('input[name="rating"]:checked').value;
}


