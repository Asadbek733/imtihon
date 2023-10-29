const featureSimple = document.querySelector(".simple");
const featureSpeed = document.querySelector(".speed");
const featureEasy = document.querySelector(".easy");
const features01 = document.querySelector(".features01");
const features02 = document.querySelector(".features02");
const features03 = document.querySelector(".features03");
const featureSpan01 = document.querySelector(".liner01");
const featureSpan02 = document.querySelector(".liner02");
const featureSpan03 = document.querySelector(".liner03");
const openModal = document.querySelectorAll(".fa-arrow-down");
const closeModal = document.querySelectorAll(".fa-arrow-up");
const answer = document.querySelectorAll(".answer-text");

let openModal01 = openModal[0];
let openModal02 = openModal[1];
let openModal03 = openModal[2];
let openModal04 = openModal[3];

let closeModal01 = closeModal[0];
let closeModal02 = closeModal[1];
let closeModal03 = closeModal[2];
let closeModal04 = closeModal[3];

let answer01 = answer[0];
let answer02 = answer[1];
let answer03 = answer[2];
let answer04 = answer[3];

openModal01.addEventListener("click", () => {
  answer01.style.display = "block";
  openModal01.style.display = "none";
  closeModal01.style.display = "inline-block";
});

closeModal01.addEventListener("click", () => {
  answer01.style.display = "none";
  openModal01.style.display = "block";
  closeModal01.style.display = "none";
});
openModal02.addEventListener("click", () => {
  answer02.style.display = "block";
  openModal02.style.display = "none";
  closeModal02.style.display = "inline-block";
});

closeModal02.addEventListener("click", () => {
  answer02.style.display = "none";
  openModal02.style.display = "block";
  closeModal02.style.display = "none";
});

openModal03.addEventListener("click", () => {
  answer03.style.display = "block";
  openModal03.style.display = "none";
  closeModal03.style.display = "inline-block";
});

closeModal03.addEventListener("click", () => {
  answer03.style.display = "none";
  openModal03.style.display = "block";
  closeModal03.style.display = "none";
});

openModal04.addEventListener("click", () => {
  answer04.style.display = "block";
  openModal04.style.display = "none";
  closeModal04.style.display = "inline-block";
});

closeModal04.addEventListener("click", () => {
  answer04.style.display = "none";
  openModal04.style.display = "block";
  closeModal04.style.display = "none";
});

featureSimple.addEventListener("click", () => {
  featureSpan01.style.display = "block";
  featureSpan02.style.display = "none";
  featureSpan03.style.display = "none";
  features02.style.display = "none";
  features01.style.display = "flex";
  features03.style.display = "none";
});

featureSpeed.addEventListener("click", () => {
  featureSpan01.style.display = "none";
  featureSpan02.style.display = "block";
  featureSpan03.style.display = "none";
  features02.style.display = "flex";
  features01.style.display = "none";
  features03.style.display = "none";
});

featureEasy.addEventListener("click", () => {
  featureSpan01.style.display = "none";
  featureSpan02.style.display = "none";
  featureSpan03.style.display = "block";
  features02.style.display = "none";
  features01.style.display = "none";
  features03.style.display = "flex";
});
