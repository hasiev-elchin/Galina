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

var enter = document.querySelector(".enter");
var feedBackPopup = document.querySelector(".modal-window");
var winCloseBtn = document.querySelector(".modal-window__close");

enter.addEventListener("click", function (event) {
	event.preventDefault();
	feedBackPopup.classList.add("block");
});

winCloseBtn.addEventListener("click", function (event) {
	event.preventDefault();
	feedBackPopup.classList.remove("block");
});

var map;
function initMap() {

	var myLatLng = {lat: 46.6681861, lng: 32.6658393};

	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 15,
		disableDefaultUI: true
	});
}
