$(document).ready(function(){
  $('.btn-menu').click(function(){
    if($(this).find('.menu').hasClass('active') === false){
      $('.btn-menu').find('.menu').removeClass('active');
      $(this).find('.menu').addClass('active')
    } else {
      $(this).find('.menu').removeClass('active')
    }
})
})
