new VenoBox({
  selector: ".my-video-links",
});

window.onload = function () {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 100); // Small delay to ensure it happens after content loads
};

$(document).ready(function () {
  // Ensure page starts at the top on load
  window.scrollTo(0, 0);

  $(".sliders").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
    appendDots: $("#bannerSlide"), // Move dots inside .slides
    customPaging: function (slider, i) {
      let images = [
        "images/61.jpg", // Replace these with your dot images
        "images/62.jpg",
        "images/63.jpg",
        "images/64.jpg",
      ];
      return '<img src="' + images[i] + '" class="custom-dot">';
    },
  });

  $('.sliders').on('afterChange', function (event, slick, currentSlide) {
    let activeSlide = $('.slick-active');

    // Remove animation class from all slides
    $('.bannerHeading, h1, p, .btnIcon, .realEstate h3, .socialMediaIcons').removeClass('animate');

    // Apply animation with delay and slide-up effect
    setTimeout(() => activeSlide.find('.bannerHeading').addClass('animate'), 500);
    setTimeout(() => activeSlide.find('h1').addClass('animate'), 1000);
    setTimeout(() => activeSlide.find('p').addClass('animate'), 1500);
    setTimeout(() => activeSlide.find('.btnIcon').addClass('animate'), 2000);
    setTimeout(() => activeSlide.find('.real').addClass('animate'), 2500);
    setTimeout(() => activeSlide.find('.socialMediaIcons').addClass('animate'), 3000);
  });

  // Trigger animation on first slide initially
  setTimeout(() => {
    $('.slick-active .bannerHeading').addClass('animate');
    setTimeout(() => $('.slick-active h1').addClass('animate'), 250);
    setTimeout(() => $('.slick-active p').addClass('animate'), 500);
    setTimeout(() => $('.slick-active .btnIcon').addClass('animate'), 1000);
    setTimeout(() => $('.slick-active .real').addClass('animate'), 1500);
    setTimeout(() => $('.slick-active .socialMediaIcons').addClass('animate'), 2000);
  }, 1000);



  $(document).on("keydown", function (e) {
    if (e.key === "ArrowRight") {
      $(".sliders").slick("slickNext"); // Go to next slide
    }
    if (e.key === "ArrowLeft") {
      $(".sliders").slick("slickPrev"); // Go to previous slide
    }
  });
});

//==== Back-to-top button
let backToTop = $(".back-to-top");
  backToTop.hide();
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//==== Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

//  Stykey Header
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 200) {
    $(".navbar").addClass("sticky_header");
  } else {
    $(".navbar").removeClass("sticky_header");
  }
});

$(".serviceSlider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  dots: true,
  prevArrow: '<i class="fa-solid fa-circle-arrow-left leftArrow"></i>',
  nextArrow: '<i class="fa-solid fa-circle-arrow-right rightArrow"></i>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
