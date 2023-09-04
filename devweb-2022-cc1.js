"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let maxNumber = 0;
let secretNumber = 0;
let maxAttempts = 0;
let nbAttempts = 1;
let answer = 0;
let results = "";

function launchGame() {
    /*
    Cette fonction récupère les paramètres du jeu et génère le nombre à trouver.
    */
    maxNumber = $maxUsr.value;
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    nbAttempts = 1;
    maxAttempts = Math.ceil(Math.log(maxNumber)) + 1;
    $guessBtn.removeAttribute("disabled");
    results += `Partie lancée, trouvez le nombre secret en au plus ${maxAttempts} coups.\n`;
    $output.innerText = results;
}

$startBtn.addEventListener("click", launchGame);

function playGame() {
    /*
    Cette fonction vérifie la réponse entrée par le joueur.
    */
    answer = $numUsr.value;
    if (nbAttempts <= maxAttempts) {
        if (answer > secretNumber) {
            results += `${answer} est trop haut.\n`;
        } else if (answer < secretNumber) {
            results += `${answer} est trop bas.\n`;
        } else {
            results += `Bravo, vous avez trouvé en ${nbAttempts} coups !\n`;
            $guessBtn.setAttribute("disabled", "");
        }
    } else {
        results += `Perdu... Le nombre était ${secretNumber}.\n`;
        $guessBtn.setAttribute("disabled", "");
    }
    nbAttempts++;
    $output.innerText = results;
}

$guessBtn.addEventListener("click", playGame);
$numUsr.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        playGame();
    }
});

function addCow(evt) {
    const $img = document.createElement("img");
    $img.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg";
    $img.classList.add("cow");
    $img.style = `left: ${evt.pageX-25}px; top: ${evt.pageY-25}px; transform: rotate(${Math.random()}turn)`;
    document.body.appendChild($img);
}

function toggleCow(_evt) {
    if (document.onmousedown instanceof Function) {
        document.onmousedown = null;
    } else {
        document.onmousedown = addCow;
    }
}
$cowBtn.addEventListener("click", toggleCow);

