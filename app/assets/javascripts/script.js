$(document).ready(function(){

	//Init for the whole page
	$(function(){
		window.addEventListener('scroll' , function(e){
			var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 0,
			header = document.querySelector(".header-content");
			if (distanceY > shrinkOn) {
        classie.add(header,"smaller-header");
      } else {
        if (classie.has(header,"smaller-header")) {
            classie.remove(header,"smaller-header");
        }
      }
		});
	});

	$('#menu_btn').click(function(event) {
	  $('.right-nav').toggleClass('active');
	});

});