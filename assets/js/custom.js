$(document).ready(function () {

  // show details of emp days off and time
  $('.showAddend').click(function(){
    $('.attendance').toggleClass('showDetails')
  })
    // open menu
    $('.openMenu').click(function(){
      $(this).children().toggleClass('menuOpen')
      $('.customMenu .menu').toggle()
    })
    // open sub menu
    $('.toggleSub').click(function(){
      $(this).toggleClass('subOpen').next().slideToggle('fast').parent().siblings().find('.subUl').slideUp('fast')
    })
    // open notifications
    $('.NTF').click(function(){
      $(this).next().toggle()
    })
    
  // end  delegation online
  $('.changeDelegation').click(function(){
    $("#IdEndDele").attr('class', 'online');
    $(this).parent().hide()
  })

  let favLinks = new Swiper(".favLinks", {
    // slidesPerView: 9,
    spaceBetween: 20,
    slidesPerView: 2,
    pagination: {
      el: ".sliderFav .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".sliderFav .swiper-button-next",
      prevEl: ".sliderFav .swiper-button-prev",
    },
  });
  // end slider

$(".dark-Mode").on("click", function (e) {
  if($('body').hasClass("Dark")) {
  	setLightMode();
  }else {
  	setDarkMode();
  }
  e.stopPropagation();
  function setLightMode(){
    if($('body').hasClass("Dark")) {
        $("body").toggleClass("Dark");
        $(".dark-Mode").toggleClass("dark-here");
        $('.circle').circleProgress({  emptyFill:"rgba(0, 112, 103, 0.99)", fill: { color: ' rgba(204, 160, 121, 0.99)' }});
        $('.colorTwo').circleProgress({  emptyFill:"rgba(204, 160, 121, 0.99)", fill: { color: ' rgba(0, 112, 103, 0.99)' }});
    }
    document.cookie = "darkMode=0;path=/";
  }
  function setDarkMode(){
    if($('body').hasClass("Dark") == false) {
        $("body").toggleClass("Dark");
        $(".dark-Mode").toggleClass("dark-here");
        $('.circle').circleProgress({ emptyFill:"rgba(0, 154, 189, 0.99)", fill: { color: 'rgba(187, 187, 187, 0.99)' }});
        $('.colorTwo').circleProgress({ emptyFill:"rgba(187, 187, 187, 0.99)", fill: { color: 'rgba(0, 112, 103, 0.99)' }});
    }
    document.cookie = "darkMode=1;path=/";
  }
  
});




});
