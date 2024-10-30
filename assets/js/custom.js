$(document).ready(function () {

  // show details of emp days off and time
  // $('.showAddend').click(function(){
  //   $('.attendance').toggleClass('showDetails')
  // })
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
    $('.NTF').click(function(event) {
      event.stopPropagation(); 
      $(this).next('.notificationMenu').toggle(); 
  });

  $(document).click(function(event) {
 
      if (!$(event.target).closest('.notificationMenu').length && !$(event.target).is('.NTF')) {
          $('.notificationMenu').hide();  
      }
  });
  
  $('.notificationMenu').click(function(event) {
      event.stopPropagation(); 
  });
    
  // end  delegation online
  $('.changeDelegation').click(function(){
    $("#IdEndDele").attr('class', 'online');
    $(this).parent().hide()
  })
    // play video
    $('.videoClass').click(function(){
      $(this).addClass('removeIcon')
      var video = $(this).find('video');
      video[0].play();
      video.attr('controls', true); 
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





});





if( $("#RibbonContainer").length === 0 ) {
  $('#s4-ribbonrow').css('display','none')
}

if (window.matchMedia("(max-width: 1800px)").matches) {
  $('.sideMenuToggle').click(function() {
    $(".container-fluid .row").toggleClass('FullWidthDash')
  })
 
} 

