document.getElementById("currentYear").innerText = new Date().getFullYear();

// carousel
// debounce from underscore.js
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// use x and y mousewheel event data to navigate flickity
function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
  // do not trigger a slide change if another is being animated
  if (!slick_is_animating) {
    // pick the larger of the two delta magnitudes (x or y) to determine nav direction
    var direction =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

    if (direction > 0) {
      // next slide
      slick_instance.slick("slickNext");
    } else {
      // prev slide
      slick_instance.slick("slickPrev");
    }
  }
}

// debounce the wheel event handling since trackpads can have a lot of inertia
var slick_handle_wheel_event_debounced = debounce(
  slick_handle_wheel_event,
  100,
  true
);

var screenWidth = window.innerWidth;

// Log the screen width to the console
console.log("Screen Width: " + screenWidth + " pixels");

// init slider
const slick_2 = $(".slides");
var slides = $(".slides > div");
slick_2
  .slick({
    dots: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: false,
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (screenWidth > 767) {
      slides.removeClass("animate__slideInUp fadeOutUp zoomOut zoomIn");

      // Only apply animations when moving to the next slide
      if (nextSlide > currentSlide) {
        slides.eq(currentSlide).addClass("fadeOutUp zoomOut");
        slides.eq(nextSlide).addClass("animate__slideInUp");
      }
    }
  });
var slick_2_is_animating = false;

slick_2.on("afterChange", function (event, slick, direction) {
  console.log("Slide after change ", event, slick, direction);
  // var myElement = document.getElementById("pageSlide");
  // // Add the 'highlight' class to the element
  // direction == 1
  //   ? myElement.classList.add("animate__slideInUp")
  //   : myElement.classList.remove("animate__slideInUp");
  slick_2_is_animating = false;
});

slick_2.on("beforeChange", function (index) {
  console.log("Slide before change " + index);
  slick_2_is_animating = true;
});

slick_2.on("wheel", function (e) {
  slick_handle_wheel_event_debounced(
    e.originalEvent,
    slick_2,
    slick_2_is_animating
  );
});

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
