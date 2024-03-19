document.getElementById("currentYear").innerText = new Date().getFullYear();


// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");
var li = document.querySelectorAll("li");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("mouse-hover");
    cursorinner.classList.add("mouse-hover1");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("mouse-hover");
    cursorinner.classList.remove("mouse-hover1");
  });
});

li.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("mouse-hover");
    cursorinner.classList.add("mouse-hover1");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("mouse-hover");
    cursorinner.classList.remove("mouse-hover1");
  });
});

// loader

let main = document.querySelector("main");
let body = document.querySelector("body");

function hideSpinner() {
  var spinner = document.querySelector(".loadingio-spinner-ball-2dccwsqkjsy");
  spinner.style.display = "none";
  // main.style.display = "block";
  body.style.overflow = "auto";
}

// Show the spinner initially
window.onload = function () {
  // main.style.display = "none";
  var spinner = document.querySelector(".loadingio-spinner-ball-2dccwsqkjsy");
  spinner.style.display = "block";
  body.style.overflow = "hidden";

  // Hide the spinner when the content is loaded
  hideSpinner();
};
