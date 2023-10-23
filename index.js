const ul = document.getElementById("ul");
const btn = document.getElementById("btn");

const scrollLeftButton = document.getElementById("left");
const scrollRightButton = document.getElementById("right");
const scrollContainer = document.querySelector(".advantage_card_container");

let scrollPosition = 0;
const cardWidth = 410; // Adjust to your card width

scrollLeftButton.addEventListener("click", () => {
  if(scrollPosition > 0)scrollPosition -= cardWidth;
  scrollContainer.style.right = `${scrollPosition}px`;
});

scrollRightButton.addEventListener("click", () => {
  if(scrollPosition < 1600)
    scrollPosition += cardWidth;
    scrollContainer.style.right = `${scrollPosition}px`;
 console.log(scrollContainer.style.right)
  
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
