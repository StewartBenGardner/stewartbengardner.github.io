$('a[href^="#"]').click(function(event) {
  var target = $(this.getAttribute('href'));
  event.preventDefault();
  $('html, body').stop().animate({
    scrollTop: target.offset().top
  }, 2000);
});
