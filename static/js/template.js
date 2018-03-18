jQuery(document).ready(function($) {

	var initio_parallax_animation = function() { 
        $('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
                var background_pos = -1 * window.pageYOffset / speed + "px";
				$(this).css( 'background-position', 'center ' + background_pos);
			}
		});
	};
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		if ($(window).width() > 800)
			initio_parallax_animation();
	});

	var bgImgs = [
		"/images/towers.png",
		"/images/desk.png",
		"/images/alaitz.png"
	];

	setInterval(function () {
		var head = $("#head");

		if (head.length) {
			head = head.eq(0);
			bgIndex = bgImgs.findIndex(function (img) {
				return head.css("background-image").indexOf(img) > -1
			});
			bgNextIndex = bgImgs[bgIndex+1] ? bgIndex+1 : 0
			head.css("background-image", head.css("background-image").replace(bgImgs[bgIndex], bgImgs[bgNextIndex]))
		}
	}, 5000)

});