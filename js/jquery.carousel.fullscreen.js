/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
	// $('.carousel').carousel({		// passed by data- field
  //   	pause: "false",
  //   	interval: 2000
	// });

	var mousewheelevt = (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";

	$("#slides").bind( mousewheelevt,
		function(e){
			if( mousewheelevt == "mousewheel" ){
				if(e.originalEvent.wheelDelta / 120 > 0) {	$(this).carousel('prev');	}
				else {	$(this).carousel('next');	}
			}
			else if( mousewheelevt == "DOMMouseScroll" ){
				if(e.originalEvent.detail / 120 > 0) {	$(this).carousel('next');	}
				else {	$(this).carousel('prev');	}
			}
		}
	);

	$("#slides").on('slide.bs.carousel', function(e){
		var nextActiveSlide = $(e.relatedTarget).index();
		var $btns = $('#carousel-buttons');
		var $active = $btns.find("[data-slide-to='" + nextActiveSlide + "']");
		$btns.find('.active').removeClass('active');
		$active.addClass('active');
		$("#next").focus();
	});

	$('.carousel').css({'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	$('.carousel .item').css({'position': 'fixed', 'width': '100%', 'height': '100%'});
	$('.carousel-inner div.item img').each(function() {
		if( $(this).attr('id') != 'axis_img'){
			var imgSrc = $(this).attr('src');
			$(this).parent().css({'background': 'url('+imgSrc+') center center no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover'});
			$(this).remove();
		}
	});

	$(window).on('resize', function() {
		$('.carousel').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	});
});
