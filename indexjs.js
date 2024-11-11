// prva kocikca
var randomBroj = Math.floor(Math.random() * 6) + 1;

var randSlika = "dice" + randomBroj + ".png";

var randSource = "images/" + randSlika;

var slika1 = document.querySelectorAll("img")[0];

slika1.setAttribute("src" , randSource);

// druga kocika
var randBroj = Math.floor(Math.random() * 6) + 1;

var randSlika2 = "dice" + randBroj + ".png"; 

var randSource2 = "images/" + randSlika2;

var slika2 = document.querySelectorAll("img")[1];

slika2.setAttribute("src" , randSource2);

// if verovatno
if(randBroj > randomBroj) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (randBroj < randomBroj) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randBroj == randomBroj) {
    document.querySelector("h1").innerHTML = "Draw!";
}