(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
    
  // Smooth scrolling on the navbar links
  $(".nav-item").on('click', function (event) {
    console.log("nav-item clicked")
      if (this.hash !== "") {
          event.preventDefault();
          
          $('html, body, main').animate({
              scrollTop: $(this.hash).offset().top - 70
          }, 1500, 'easeInOutExpo');
          
          if ($(this).parents('.navbar-nav').length) {
              $('.navbar-nav .active').removeClass('active');
              $(this).closest('a').addClass('active');
          }
      }
  });  
  
  // Typed Initiate
  if ($('.hero .hero-text h2').length == 1) {
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
          strings: typed_strings.split(', '),
          typeSpeed: 100,
          backSpeed: 20,
          smartBackspace: false,
          loop: true
      });
  }  
  
})(jQuery);

