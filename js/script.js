/**************************
  * SCRIPT
**************************/
console.log('script file is connected');
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    dotsClass: 'slider-dashs',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
    nextArrow: '<button type="button" class="slick-next">&gt;</button>',
    customPaging: function(slider, i) {
      return '<button class="slider-dash">' + i + '</button>'; // Customize the dots as underscores
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Get hamburger menu from the DOM
  const hamburger_menu = document.getElementById('hamburger-menu');

  // Get menu items container
  const menu = document.getElementById('menu');

  hamburger_menu.addEventListener('click', function() {
      // Toggle the 'close' class on hamburger menu
      this.classList.toggle('close');
      // Toggle the 'active' class on menu to show/hide it
      menu.classList.toggle('active');
  });
});