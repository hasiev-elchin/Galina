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


var certificate1 = document.querySelector(".certificate__1");
var certificate2 = document.querySelector(".certificate__2");
var certificate3 = document.querySelector(".certificate__3");
var certificate4 = document.querySelector(".certificate__4");
var certificate5 = document.querySelector(".certificate__5");
var certificateModal1 = document.querySelector(".certificate-modal--1");
var certificateModal2 = document.querySelector(".certificate-modal--2");
var certificateModal3 = document.querySelector(".certificate-modal--3");
var certificateModal4 = document.querySelector(".certificate-modal--4");
var certificateModal5 = document.querySelector(".certificate-modal--5");
var certificateModalClose1 = document.querySelector(".certificate-modal__close1");
var certificateModalClose2 = document.querySelector(".certificate-modal__close2");
var certificateModalClose3 = document.querySelector(".certificate-modal__close3");
var certificateModalClose4 = document.querySelector(".certificate-modal__close4");
var certificateModalClose5 = document.querySelector(".certificate-modal__close5");

certificate1.addEventListener("click", function (e) {
	e.preventDefault();
	certificateModal1.classList.add("block");
});

certificate2.addEventListener("click", function (e) {
	e.preventDefault();
	certificateModal2.classList.add("block");
});

certificate3.addEventListener("click", function (e) {
	e.preventDefault();
	certificateModal3.classList.add("block");
});

certificate4.addEventListener("click", function (e) {
	e.preventDefault();
	certificateModal4.classList.add("block");
});

certificate5.addEventListener("click", function (e) {
	e.preventDefault();
	certificateModal5.classList.add("block");
});


certificateModalClose1.addEventListener("click", function (event) {
	event.preventDefault();
	certificateModal1.classList.remove("block");
});

certificateModalClose2.addEventListener("click", function (event) {
	event.preventDefault();
	certificateModal2.classList.remove("block");
});

certificateModalClose3.addEventListener("click", function (event) {
	event.preventDefault();
	certificateModal3.classList.remove("block");
});

certificateModalClose4.addEventListener("click", function (event) {
	event.preventDefault();
	certificateModal4.classList.remove("block");
});

certificateModalClose5.addEventListener("click", function (event) {
	event.preventDefault();
	certificateModal5.classList.remove("block");
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
