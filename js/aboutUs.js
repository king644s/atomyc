$(document).ready(function () {
  $(".ourTeamSlider").slick({
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    // centerMode: true,
    centerPadding: "160px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
