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

    //   console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

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
//   console.log("Screen Width: " + screenWidth + " pixels");

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
  // console.log("Slide after change ", event, slick, direction);
  // var myElement = document.getElementById("pageSlide");
  // // Add the 'highlight' class to the element
  // direction == 1
  //   ? myElement.classList.add("animate__slideInUp")
  //   : myElement.classList.remove("animate__slideInUp");
  slick_2_is_animating = false;
});

slick_2.on("beforeChange", function (index) {
  // console.log("Slide before change " + index);
  slick_2_is_animating = true;
});

slick_2.on("wheel", function (e) {
  slick_handle_wheel_event_debounced(
    e.originalEvent,
    slick_2,
    slick_2_is_animating
  );
});

// const images = [
//   "https://res.cloudinary.com/dd9ni3lpr/image/upload/v1720725374/Ceat_Collage_screen_1_result_lyoi5u.webp",
//   "https://res.cloudinary.com/dd9ni3lpr/image/upload/v1720725374/Ceat_Collage_screen_2_result_mqmbtu.webp",
//   "https://res.cloudinary.com/dd9ni3lpr/image/upload/v1720725374/Ceat_Collage_screen_3_result_zfkneo.webp",
// ];
// let currentIndex = 0;
// const slideshowElement = document.getElementById("video-png-ceat");

// function showNextImage() {
//   // Remove the active class to fade out the current image
//   slideshowElement.classList.remove("active");

//   setTimeout(() => {
//     // Change the image source
//     currentIndex = (currentIndex + 1) % images.length;
//     slideshowElement.src = images[currentIndex];

//     // Add the active class to fade in the new image
//     slideshowElement.classList.add("active");
//   }, 2500); // Match this duration with the CSS transition duration
// }
// // Start with the first image visible
// window.onload = () => {
//   slideshowElement.classList.add("active");
// };

// // Change image every 1 seconds
// setInterval(showNextImage, 1500);
