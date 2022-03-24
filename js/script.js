$(function(){
  $('.burger').click(function(){
    $('body').toggleClass('lock');
    $('.burger, .header__list').toggleClass('active');
  });
});
