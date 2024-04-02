/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Creamos variables con el contenido de la carta
const naipe = ["♥", "♣", "♦", "♠"];
const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function generateRandomCard() {
  const suit = naipe[Math.floor(Math.random() * naipe.length)];
  const number = numbers[Math.floor(Math.random() * numbers.length)];
  const suitColor = suit === "♥" || suit === "♦" ? "text-danger" : "text-black";
  return `
    <div class="card-font align-self-start ${suitColor}">${suit}</div>
    <div class="card-font fw-bold">${number}</div>
    <div class="rotated card-font align-self-end ${suitColor}">${suit}</div>
  `;
}

function generateCard() {
  const card = document.getElementById("card");
  card.innerHTML = generateRandomCard();
}
//Button to generate a card
const button = document.getElementById("button");
button.addEventListener("click", generateCard);
//Timer of 10seconds to generate card
let countStart = 10;
const counter = document.getElementById("counter");

const countDown = setInterval(() => {
  counter.textContent = countStart;
  countStart--;
  if (countStart < 0) {
    generateCard();
    countStart = 10;
  }
}, 1000);

window.onload = generateCard();
