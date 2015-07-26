$( document ).ready(function() {
  	
  	//shuffle grid
	var $grid = $('#grid');

	//item for shuffle
	$grid.shuffle({
	itemSelector: '.picture-item'
	});

	//highlighting the selected
	$('#filter a').click(function (e) {
	e.preventDefault();
	 
	// set active class
	$('#filter a').removeClass('active');
	$(this).addClass('active');
	 
	// get group name from clicked item
	var groupName = $(this).attr('data-group');
	 
	// reshuffle grid
	$grid.shuffle('shuffle', groupName );
	});
	
	//pushing page when clicked on down-arrow at header
	$(".down-arrow").on('click', function(){
		$('html,body').animate({
			scrollTop: 680
		}, 800);
	});


	//navigating to the respective sections
	function smoothScroll() {
		$('a[href^="#"]').on('click', function(event) {
		    var target = $($(this).attr('href'));
		    if (target.length) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, 800);
		    }
		});
	}
	
	function animateNumber(textValue, id){
		// Animate the element's value from 0% to 110%:
		jQuery({textValue: 0}).animate({textValue: textValue}, {
		duration: 3000,
		easing:'swing',
		step: function() {
			// Update the element's text with rounded-up value:
			$('#'+ id).text(Math.ceil(this.textValue));
		}
		});
	}

	//show the numbers animating for all 3 stats at right time
	$(window).on('scroll', (function(event){
		var y = $(this).scrollTop();
		var target = $('#contact').offset().top;
		if(y >= target ){
			$(window).off('scroll');
			animateNumber(500, 'clients-served-stat');
			animateNumber(800, 'projects-done-stat');
			animateNumber(110000, 'lines-coded-stat');
		}
	}));

});