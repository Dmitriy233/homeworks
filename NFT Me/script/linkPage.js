$('#artists-link').on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
      scrollTop: $('#artists').offset().top
   }, 1000);
   document.getElementById('checkbox-menu').checked = false;
});

$('#contact-link').on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
      scrollTop: $('#contact').offset().top
   }, 1000);
   document.getElementById('checkbox-menu').checked = false;
})

$('#marketplace-link').on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
      scrollTop: $('#marketplace').offset().top
   }, 1000);
   document.getElementById('checkbox-menu').checked = false;
})