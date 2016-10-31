$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 608) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 609) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});