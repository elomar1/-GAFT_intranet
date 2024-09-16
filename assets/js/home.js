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
    let servSwiper = new Swiper(".servSwiper", {
      spaceBetween: 25,
      slidesPerView: 4,
      pagination: {
        el: ".servSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".servSwiper .swiper-button-next",
        prevEl: ".servSwiper .swiper-button-prev",
      },
      
    });
    let servSwiper2 = new Swiper(".servSwiper2", {
      spaceBetween: 25,
      slidesPerView: 4,
      pagination: {
        el: ".servSwiper2 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".servSwiper2 .swiper-button-next",
        prevEl: ".servSwiper2 .swiper-button-prev",
      },
      
    });
  
    let offerSwiper = new Swiper(".offerSwiper", {
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".offerSwiper .swiper-button-next",
        prevEl: ".offerSwiper .swiper-button-prev",
      },
      
    });
    let newsHome = new Swiper(".newsHome", {
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
  
    if( $('.mainBanner').length ) {
      $('.col-md-9.paddingRight').addClass('home')
    }

  
  
  
  });
  