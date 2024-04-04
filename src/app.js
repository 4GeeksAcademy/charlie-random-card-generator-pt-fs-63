/* eslint-disable */
import "bootstrap";
import "./style.css";

const suit = ["♥", "♣", "♦", "♠"];
const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function generateRandomCard() {
  const randomSuit = suit[Math.floor(Math.random() * suit.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  const suitColor = randomSuit === "♥" || randomSuit === "♦" ? "text-danger" : "text-black";
  return `
    <div class=" card-font align-self-start ${suitColor}">${randomSuit}</div>
    <div class="card-font fw-bold">${randomNumber}</div>
    <div class="rotated card-font align-self-end ${suitColor}">${randomSuit}</div>
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

//Function to adjust card size
function adjustSize() {
  const inputW = document.getElementById("inputW");
  const inputH = document.getElementById("inputH");
  const card = document.getElementById("card");

  // Get sizes from the inputs
  const selectedWidth = inputW.value;
  const selectedHeight = inputH.value;

  const parsedWidth = parseInt(selectedWidth, 10);
  const parsedHeight = parseInt(selectedHeight, 10);

  const validWidth = Math.max(150, parsedWidth);
  const validHeight = Math.max(214, parsedHeight);

  card.style.width = validWidth + "px";
  card.style.height = validHeight + "px";
}

const inputW = document.getElementById("inputW");
inputW.addEventListener("input", adjustSize);

const inputH = document.getElementById("inputH");
inputH.addEventListener("input", adjustSize);

window.onload = generateCard();
