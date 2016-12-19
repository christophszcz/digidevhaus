$(window).scroll(function() {
	var aboutScroll = $('#about-scroll').offset().top,
	 	margin = $('#about-scroll').outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
  if (windowScroll < (aboutScroll + margin - windowHeight)){ 
    $("video")[0].play();
  }
  if (windowScroll > (aboutScroll + margin - windowHeight)){
  	$("video")[0].pause();
  }
});
 
 