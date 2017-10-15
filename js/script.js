;(function ($) {
	$(document).ready(function(){
		$('.slider').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						arrows: false
					}
				}
			]
		});
	});
})(jQuery);