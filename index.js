let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * (6 - 1) + 1);
let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * (6 - 1) + 1);

let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let dice1 = document.getElementsByClassName("img1")[0];
let dice2 = document.getElementsByClassName("img2")[0];

dice1.setAttribute("src", randomImageSource1);
dice2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerText = "🚩 Player1 Wins";
} else if(randomNumber2 > randomNumber1) {
    document.getElementsByTagName("h1")[0].innerText = "Player2 Wins 🚩";
} else {
    document.getElementsByTagName("h1")[0].innerText = "🚩 Aw! It's a Draw!!  ";
}


// function getRandomNumber() {
//     let high = 6;
//     let low = 1;
//     let randomNumber1 = Math.random();
//     randomNumber1 = Math.floor(randomNumber1 * (high - low) + low);
//     return randomNumber1;
// }

// function getRandomImageSource() {
//     let randomDigit = getRandomNumber();
//     let randomImageSource = "images/dice" + randomDigit + ".png";
//     return randomImageSource;
// }

// function setImageSource(className) {
//     let dice = document.getElementsByClassName(className)[0];
//     dice.setAttribute("src", getRandomImageSource());
// }

// function getResult(className) {
//     setImageSource(className);
//     let dice1 = 
// } 


