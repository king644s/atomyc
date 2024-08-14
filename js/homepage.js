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

const slideshowElement = document.getElementById("video-png-ceat");
if(slideshowElement){
  const images = [
    "https://res.cloudinary.com/dd9ni3lpr/image/upload/v1720725374/Ceat_Collage_screen_1_result_lyoi5u.webp",
    "https://res.cloudinary.com/dd9ni3lpr/image/upload/v1720725374/Ceat_Collage_screen_2_result_mqmbtu.webp",
    "https://res.cloudinary.com/dd9ni3lpr/image/upload/v1720725374/Ceat_Collage_screen_3_result_zfkneo.webp",
  ];
  let currentIndex = 0;
  
  function showNextImage() {
    // Remove the active class to fade out the current image
    slideshowElement.classList.remove("active");
    
    setTimeout(() => {
      // Change the image source
      currentIndex = (currentIndex + 1) % images.length;
      slideshowElement.src = images[currentIndex];
      
      // Add the active class to fade in the new image
      slideshowElement.classList.add("active");
    }, 2500); // Match this duration with the CSS transition duration
  }
  // Start with the first image visible
  window.onload = () => {
    slideshowElement.classList.add("active");
  };
  
  // Change image every 1 seconds
  setInterval(showNextImage, 1500);
}


const slideshowElement_Sector = document.getElementById("video-png-ceat");
const slideshowElement_GC_desktop = document.getElementById("video-png-gc");
if (slideshowElement_GC_desktop) {
  // Generate the image URLs
  const images = Array.from({ length: 735 }, (_, i) => {
    const imageNumber = i.toString().padStart(5, '0');
    return `https://res.cloudinary.com/dd9ni3lpr/image/upload/v1723542034/Website-collages-15-03-24_0000_GC-Collage-15-03-24_${imageNumber}.webp`;
  });

  let currentIndex = 0;
  let imagesLoaded = 0;

  // Preload images
  const preloadedImages = images.map((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        startSlideshow(); // Start the slideshow after all images are loaded
      }
    };
    return img;
  });

  function startSlideshow() {
    // Show the first image
    slideshowElement_GC_desktop.classList.add("active");
    slideshowElement_GC_desktop.src = preloadedImages[currentIndex].src;

    // Change image rapidly to simulate video
    const frameRate = 1000 / 24; // 24 frames per second (adjust as needed)

    setInterval(showNextImage, frameRate);
  }

  function showNextImage() {
    // Simply change the image source to the next image
    currentIndex = (currentIndex + 1) % preloadedImages.length;
    slideshowElement_GC_desktop.src = preloadedImages[currentIndex].src;
  }
}

const slideshowElement_sb_desktop = document.getElementById("video-png-sb");
if (slideshowElement_sb_desktop) {
  // Generate the image URLs
  const images = Array.from({ length: 699 }, (_, i) => {
    const imageNumber = i.toString().padStart(3, '0');
    return `https://res.cloudinary.com/dd9ni3lpr/image/upload/v1723620798/Video_Mask${imageNumber}.webp`;
  });

  let currentIndex = 0;
  let imagesLoaded = 0;

  // Preload images
  const preloadedImages = images.map((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        startSlideshow(); // Start the slideshow after all images are loaded
      }
    };
    return img;
  });

  function startSlideshow() {
    // Show the first image
    slideshowElement_sb_desktop.classList.add("active");
    slideshowElement_sb_desktop.src = preloadedImages[currentIndex].src;

    // Change image rapidly to simulate video
    const frameRate = 1000 / 24; // 24 frames per second (adjust as needed)

    setInterval(showNextImage, frameRate);
  }

  function showNextImage() {
    // Simply change the image source to the next image
    currentIndex = (currentIndex + 1) % preloadedImages.length;
    slideshowElement_sb_desktop.src = preloadedImages[currentIndex].src;
  }
}


const slideshowElement_sector_desktop = document.getElementById("video-png-sector");
if (slideshowElement_sector_desktop) {
  // Generate the image URLs
  const images = Array.from({ length: 287 }, (_, i) => {
    const imageNumber = i.toString().padStart(3, '0');
    return `https://res.cloudinary.com/dd9ni3lpr/image/upload/v1723629848/PNG_Seq${imageNumber}.webp`;
  });

  let currentIndex = 0;
  let imagesLoaded = 0;

  // Preload images
  const preloadedImages = images.map((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        startSlideshow(); // Start the slideshow after all images are loaded
      }
    };
    return img;
  });

  function startSlideshow() {
    // Show the first image
    slideshowElement_sector_desktop.classList.add("active");
    slideshowElement_sector_desktop.src = preloadedImages[currentIndex].src;

    // Change image rapidly to simulate video
    const frameRate = 1000 / 24; // 24 frames per second (adjust as needed)

    setInterval(showNextImage, frameRate);
  }

  function showNextImage() {
    // Simply change the image source to the next image
    currentIndex = (currentIndex + 1) % preloadedImages.length;
    slideshowElement_sector_desktop.src = preloadedImages[currentIndex].src;
  }
}



