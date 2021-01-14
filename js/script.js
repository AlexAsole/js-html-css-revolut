$(document).ready(function(){
//   $('.btn-menu').click(function(){
//     if($(this).find('.menu').hasClass('active') === false){
//       $('.btn-menu').find('.menu').removeClass('active');
//       $(this).find('.menu').addClass('active')
//     } else {
//       $(this).find('.menu').removeClass('active')
//     }
// })
// Ho cambiato, passando a next piuttosto che find perché il menù che si apre se ci clicco sopra,
// essendo parte del <li> si richiude e non so come evitarlo se non così 
$('.btn-menu').click(function(){
  if($(this).next().hasClass('active') === false){
    $('.btn-menu').next().removeClass('active');
    $(this).next().addClass('active')
  } else {
    $(this).next().removeClass('active')
  }
})
})
