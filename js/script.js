new VenoBox({
    selector: '.my-video-links',
});


$('.serviceSlider').slick({
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
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        }
      ]
  })
$('.sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
    appendDots: $('#bannerSlide'), // Move dots inside .slides
    customPaging: function(slider, i) {
        let images = [
            'images/61.jpg',
            'images/62.jpg', // Replace these with your dot images
            'images/63.jpg',
            'images/64.jpg',
        ];
        return '<img src="' + images[i] + '" class="custom-dot">';
    }
  })

  $(document).on('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        $('.sliders').slick('slickNext'); // Go to next slide
    }
    if (e.key === 'ArrowLeft') {
        $('.sliders').slick('slickPrev'); // Go to previous slide
    }
});




//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});



//  Stykey Header  
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_header');
    }
    else {
         $('.navbar').removeClass('sticky_header');
    }
    });  