$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 560) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 561) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});