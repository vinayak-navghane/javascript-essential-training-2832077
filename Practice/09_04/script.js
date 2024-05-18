/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const cellOne = document.querySelector(".cell01");
cellOne.addEventListener("mouseenter", () => {
  cellOne.style.outline = "6px solid red";
});

cellOne.addEventListener("mouseleave", () => {
  cellOne.style.outline = "";
});

const cellTwo = document.querySelector(".cell02");
cellTwo.addEventListener("mousemove", () => {
  cellTwo.style.backgroundColor === ""
    ? (cellTwo.style.backgroundColor = "green")
    : (cellTwo.style.backgroundColor = "");
});

const cellThree = document.querySelector(".cell03");
cellThree.addEventListener("click", () => {
  cellThree.style.backgroundColor === ""
    ? (cellThree.style.backgroundColor = "yellow")
    : (cellThree.style.backgroundColor = "");
});

const cellFour = document.querySelector(".cell04");
cellThree.addEventListener("dbleclick", () => {
  cellFour.style.backgroundColor === ""
    ? (cellFour.style.backgroundColor = "yellow")
    : (cellFour.style.backgroundColor = "");
});
