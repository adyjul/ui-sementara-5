(function ($) {
  "use strict";

  // if ($(".carousel-item .active")) {
  //   console.log("hai");
  // } else if ($(".carousel-item")) {
  //   console.log("kk");
  // }\



  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });
 

  var elementWindow = $(document).width();
  if (979 >= elementWindow) {
    $(".modal-dialog").css("height","70%");    
  } else {
    $(".modal-dialog").css("height","100%");    
  }

  $(window).resize(function () {
    // console.log($(document).width())
    var element = $(document).width();
    if (979 >= element) {
      $(".modal-dialog").css("height","70%");  
    } else {
      $(".modal-dialog").css("height","100%");  
    }
  });

  // var id = $(".navbar-toggler")




  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });

  $(".berita").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    margin: 80,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".guru").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });

  // Window Resize Mobile Menu Fix

  // Scroll animation init

  // Window Resize Mobile Menu Fix

  // Window Resize Mobile Menu Fix
})(window.jQuery);
