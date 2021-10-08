$(function(){
  $('.slider__box').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/ArrowLeft.svg" alt="Arrow left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/ArrowRight.svg" alt="Arrow right">',
  });

  $('.menu-btn').on('click', function() {
    $('.menu__list').toggleClass('active');
  });
});