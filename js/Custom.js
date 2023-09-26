$(document).ready(function () {
  //spinner
  $(".spinner ").fadeOut("slow");

  // odometer
  $('.odometer').appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  //navbar animation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if ((appScroll > 60) && (appScroll < 99999999999)) {
      $("#Header").addClass("animatedNav");
    };
    if ((appScroll > 0) && (appScroll < 60)) {
      $("#Header").removeClass("animatedNav");
    };
  });
  //MainSlider
  var swiper = new Swiper('.MainSlider-container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // partnersSlider
  var swiper = new Swiper(".partnersSlider", {
    effect: "cards",
    grabCursor: true,
    speed: 700,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // testimonials
  var swiper = new Swiper('.testimonialsSlider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
    observer: true,
    observeParents: true,
  });
  //blogs
  var swiper = new Swiper('.blogs-container', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
    },
  });
  // tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  // job form
  $(".JoinBtn").click(function () {
    $(".joinForm").slideToggle(300);
  });
  //select2
  $('.select2').select2();
  //WOW js
  new WOW().init();
  //dropify
  $('.dropify').dropify();
});