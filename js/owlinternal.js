function loadscroler(){
	$('body').prepend('<a href="#" class="bottom-top"><i class="icofont icofont-bubble-up"></i></a>');
	var amountScrolled = 300;
	$(window).on('scroll',function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.bottom-top').fadeIn('slow');
		} else {
			$('a.bottom-top').fadeOut('slow');
		}
	});
	$('a.bottom-top').on('click',function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
}
$(document).ready(function(){
    "use strict"
	
	loadscroler();
	
	
	
	/*slideshow script code start here*/
	$('.slideshow').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: 5000,
		smartSpeed: 1500,
		dots: true,
		nav:true,
		navText: ['<i class="icofont icofont-scroll-bubble-left fa1"></i>', '<i class="icofont icofont-scroll-bubble-right fa2"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			991: {
				items: 1
			},
			1180: {
				items: 1
			}
		}
	});
	/*slideshow script code end here*/
	
	/*dish script code start here*/
	$('.dish').owlCarousel({
		loop: true,
		margin: 0,
		items: 5,
		autoplay: true,
		smartSpeed: 2500,
		dots: true,
		nav:false,
		navText:['<i class="fa fa-angle-double-left fa1"></i>', '<i class="fa fa-angle-double-right fa2"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1180: {
				items: 5
			}
		}
	});
	/*dish script code end here*/
	
	/*testimonail1 script code start here*/
	$('.testimonails').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		autoplay: true,
		smartSpeed: 2500,
		dots: true,
		nav:true,
		navText: ['<i class="icofont icofont-scroll-bubble-left fa1"></i>', '<i class="icofont icofont-scroll-bubble-right fa2"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			991: {
				items: 1
			},
			1180: {
				items: 1
			}
		}
	});
	/*testimonail1 script code end here*/
	
	
	/*blogs script code start here*/
	$('.blogs').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		smartSpeed: 1500,
		dots: true,
		nav:true,
		navText: ['<i class="icofont icofont-long-arrow-left fa1"></i> Prev', 'Next <i class="icofont icofont-long-arrow-right fa2"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			991: {
				items: 1
			},
			1180: {
				items: 1
			}
		}
	});
	/*blogs script code end here*/
	
	// Product Grid
	$('#grid-view').on('click',function(){
		
		$('.mainpage .row > .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
		localStorage.setItem('display', 'grid');
	});
	$('#list-view').on('click',function(){
		
		$('.mainpage .row > .product-grid').attr('class', 'product-layout product-list col-xs-12');
		localStorage.setItem('display', 'list');
	});
	
		
	//quantity code
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
				$qty.val(currentVal + 1);
		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
			$qty.val(currentVal - 1);					
		});
	});
	
});