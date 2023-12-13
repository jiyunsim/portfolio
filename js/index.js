$(function () {
  $(".visual1").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 100,
  });
});
