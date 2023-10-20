const ul = document.getElementById("ul");
const btn = document.getElementById("btn");

const scrollLeftButton = document.getElementById("left");
const scrollRightButton = document.getElementById("right");
const scrollContainer = document.querySelector(".advantage_card_container");

let scrollPosition = 0;
const cardWidth = '350px'; // Adjust to your card width

scrollLeftButton.addEventListener("click", () => {
  scrollPosition -= cardWidth;
  scrollContainer.style.left = scrollPosition;
});

scrollRightButton.addEventListener("click", () => {
  scrollPosition += cardWidth;
  scrollContainer.style.right = scrollPosition;
});

let menuVisible = false;

btn.addEventListener("click", () => {
  if (menuVisible) {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
  menuVisible = !menuVisible;
});
