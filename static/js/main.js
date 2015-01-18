$(function() {
	var $menuButton = $('#menuButton'),
		$nav = $('nav'),
		$body = $('body')[0],
		mq = window.matchMedia('(max-width: 678px)');
		hammerBody = new Hammer($body),
		$arrow = $('nav i');

		//initialize slider
	$(".rslides").responsiveSlides();


	//menu functionality

	function showMenu() {
		$nav.css('left', '0');
		$arrow.css('transform','rotateY(180deg)');
	}
	function hideMenu() {
		$nav.css('left', '-200px');
		$arrow.css('transform','rotateY(0)');
	}

	//callback for width viewport changes
	function widthChange(mq) {
		if(mq.matches) {
			$nav.css('left','-200px');
		} else {
			$nav.css('left','0');
		}
	}

	hammerBody.on('panright', showMenu);
	hammerBody.on('panleft', hideMenu);

	mq.addListener(widthChange);

});