$(document).ready(function () {
    let swiperBannerMain = new Swiper(".swiperBannerMain", {
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: ".mainBanner .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".mainBanner .swiper-button-next",
        prevEl: ".mainBanner .swiper-button-prev",
      },
    });
    // end slider
    let servSwiper = new Swiper(".servSwiper0", {
      spaceBetween: 25,
      slidesPerView: 4,
      pagination: {
        el: ".servSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".servSwiper0 .swiper-button-next",
        prevEl: ".servSwiper0 .swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });

    let servSwiper2 = new Swiper(".servSwiper1", {
      spaceBetween: 25,
      slidesPerView: 4,
      pagination: {
        el: ".servSwiper1 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".servSwiper1 .swiper-button-next",
        prevEl: ".servSwiper1 .swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });

    let offerSwiper = new Swiper(".offerSwiper", {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".offerSwiper .swiper-button-next",
        prevEl: ".offerSwiper .swiper-button-prev",
      },
      
    });
    let newsHome = new Swiper(".newsHome", {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".newsHome .swiper-button-next",
        prevEl: ".newsHome .swiper-button-prev",
      },
      
    });
    let QuestionSwiper = new Swiper(".QuestionSwiper", {
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".QuestionSwiper .swiper-button-next",
        prevEl: ".QuestionSwiper .swiper-button-prev",
      },
      
    });
    let empNews = new Swiper(".empNews", {
      direction: 'vertical',
      loop: false,
      slidesPerView: 1,
      height: 185,
      slidesPerGroup: 2,
      spaceBetween: 35,
      navigation: {
        nextEl: ".empNews .swiper-button-next",
        prevEl: ".empNews .swiper-button-prev",
      },
      
    });
  
  
    if (window.matchMedia("(min-width: 1400px)").matches) {
      if( $('.mainBanner').length ) {
        $('.col-md-9.paddingRight').addClass('home')
      }
    }
  
  
  
  });
  

