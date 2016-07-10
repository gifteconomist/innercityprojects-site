$(window).load(function() {
    $('.nav').sticky({ topSpacing: 0})
});

$(document).ready(function() {
    //hamburger
    $('#hamburger, #hamburger-works').click(function() {
      $(this).toggleClass("ham-open");
      $('.side-nav').toggleClass('show');
      $('.side-nav-works').toggleClass('show');
      $('.main-wrapper').toggleClass('move');
      $('.main-wrapper-works').toggleClass('move');
      $('.hams').toggleClass('show')
    });
    
    //nav scroll
    $("#about").click(function() {
		$('html, body').animate({
         scrollTop: $("#about-anchor").offset().top
      }, 200);
	});
    
    $("#works").click(function() {
		$('html, body').animate({
         scrollTop: $("#works-anchor").offset().top
      }, 200);
	});
    
    $("#news").click(function() {
		$('html, body').animate({
         scrollTop: $("#news-anchor").offset().top
      }, 200);
	});
    
    $("#contact").click(function() {
		$('html, body').animate({
         scrollTop: $("#contact-anchor").offset().top
      }, 600);
	});
    
    //side scroll
    $("#about2").click(function() {
		$('html, body').animate({
         scrollTop: $("#about-anchor").offset().top
      }, 200);
         $('#hamburger').toggleClass("ham-open");
      $('.side-nav').toggleClass('show');
      $('.main-wrapper').toggleClass('move');
      $('.hams').toggleClass('show')
	});
    
    $("#works2").click(function() {
		$('html, body').animate({
         scrollTop: $("#works-anchor").offset().top
      }, 200);
         $('#hamburger').toggleClass("ham-open");
          $('.side-nav').toggleClass('show');
          $('.main-wrapper').toggleClass('move');
          $('.hams').toggleClass('show')
	});
    
    $("#news2").click(function() {
		$('html, body').animate({
         scrollTop: $("#news-anchor").offset().top
      }, 200);
         $('#hamburger').toggleClass("ham-open");
      $('.side-nav').toggleClass('show');
      $('.main-wrapper').toggleClass('move');
      $('.hams').toggleClass('show')
	});
    
    $("#contact2").click(function() {
		$('html, body').animate({
         scrollTop: $("#contact-anchor").offset().top
      }, 600);
         $('#hamburger').toggleClass("ham-open");
      $('.side-nav').toggleClass('show');
      $('.main-wrapper').toggleClass('move');
      $('.hams').toggleClass('show')
	});
    
//    if($('#sticky-wrapper').hasClass('is-sticky')) {
//        $('.nav-list').css('margin', '0');
//        console.log('sticky!')
//    }
});