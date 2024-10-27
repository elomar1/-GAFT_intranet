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
    $('.NTF').click(function(){
      $(this).next().toggle()
    })
    
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




// $('.eventActive1').each(function() {
//   // Get the background color of the current td element
//   var bgColor = $(this).css('background-color');
//   console.log(bgColor);
  
//   // Check if the background color is #007066 (which is rgb(0, 112, 102) in RGB)
//   if (bgColor === ' rgb(0, 112, 102)') {

//       $(this).css('background-color', '').find('span').css('background-color',' rgb(0, 112, 102)'); 
//   }else if(bgColor === 'rgb(204, 160, 121)') {
//     $(this).css('background-color', '').find('span').css('background-color','rgb(204, 160, 121)'); 
//   } 
// });

if( $("#RibbonContainer").length === 0 ) {
  $('#s4-ribbonrow').css('display','none')
}

$('.dark-Mode').click(function() {
  // $('body').toggleClass('Dark');
  let isDarkMode = $('body').hasClass('Dark');
  
  $('.socialMedia a img').each(function() {
    let currentSrc = $(this).attr('src');

    let newSrc = currentSrc.replace(/(\.[\w\d_-]+)$/i, 'Dark$1'); 
  
      if (isDarkMode) {
          $(this).attr('src', newSrc); 
      } else {
        let lightSrc = currentSrc.replace('Dark', '');  
          $(this).attr('src', lightSrc);  
      }

  });

});