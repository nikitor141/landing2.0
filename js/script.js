$(function () {
  //slider ------------------------------------------------
  $('.portfolio__row').slick({
    draggable: false,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
  });
  //burger ------------------------------------------------
  $('.burger').click(function () {
    $('body,.burger, .header__list').toggleClass('active');
  });
  $('.list__link').click(function () {
    $('body,.burger,.header__list').removeClass('active')
  });
  //popup form---------------------------------------------
  $('.popup__input').blur(function () {
    if (!$(this).val()) {
      $(this).addClass('error');
    }
    else {
      $(this).removeClass('error');
    }
  });
  $(".popup__input_tel").mask("+7(999) 999-99-99");

  $('.header__mobile-call-order,.call-order,.btn').click(function () {
    $('body,.popup,.popup__body').addClass('active');
  });
  $('.popup').on('mousedown', function (event) {
    if (event.target === this) {
      $('body,.popup,.popup__body').removeClass('active');
      $('.popup__input').val('').removeClass('error');
    }
  });


  // test 
  $('.tel-mail').click(function (event) {
    event.preventDefault();
    const TEXT_TO_COPY = $(this).data('tel-mail');
    const COPY_TO_CLIPBOARD = (text) =>
      navigator.clipboard.writeText(text);
    COPY_TO_CLIPBOARD(TEXT_TO_COPY);
    $('.tel-mail span').text('Скопированно!')
    $('.tel-mail').mouseleave(function () {
      $('.tel-mail span').text('Скопировать')

    });
  });












});

