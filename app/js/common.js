jQuery(document).ready(function() {

	/* Wow */

	// new WOW().init();

	/* Phone input mask */

	// $(".phone").mask("+380 999 999 999");

	/* Inits */

	// Navbar (sticky)

	UIkit.navbar(element, options);

	// Navigation canvas ( mobile )

	UIkit.nav(element).toggle(index, animate);
	UIkit.nav(element, options);

	// Slider

	UIkit.slider(element, options);

	//Modal

	UIkit.modal(element, options);

	// Countdown ( timer )

	UIkit.countdown(element, options);

	// Scroll

	UIkit.scroll(element, options);

	//Notifications

	UIkit.notification(options);
	UIkit.notification(message, status);

	//Lightboxes

	UIkit.lightbox(element, options);
	UIkit.lightboxPanel(panelOptions);

	// Leader

	UIkit.leader(element, options);

	// Filter

	UIkit.filter(element, options);

	//Accordion

	UIkit.accordion(element, options);

	// Dropdown

	UIkit.dropdown(element, options);

});

// Burger

$(".happy-meal").click(function() {
	$(".burger").toggleClass('i-hate-burger');
})

// Form float button

$('#js-yr-float-button__wrapper').click(function() {
	$('.call_form').addClass('in').animate({width: "toggle", opacity: "1"});
	$('#js-yr-float-button__wrapper').css('opacity', '0');
});
$('.call_form .yr-float-close').click(function() {
	$('.call_form').removeClass('in').animate({width: "toggle", opacity: "0"});
	$('#js-yr-float-button__wrapper').css('opacity', '1');
});

// Mobile form

$('#js-mobile-form').click(function() {
	$('.yr-float-buttons--mobile').addClass('in').animate({height: "toggle", opacity: "1"});
});
$('#js-yr-float-buttons--mobile-close').click(function() {
	$('.yr-float-buttons--mobile').removeClass('in').animate({height: "toggle", opacity: "0"});
});

// Testimonials slider

$('.testimonial-carousel').slick({
	dots: false,
	vertical: true,
	draggable: false,
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 960,
			settings: {
				rtl: true,
				vertical: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		}
	]
});

// Custom navigation for testimonial slider

$('.arrow--testi-next').on('click', function() {
	$('.testimonial-carousel').slick('slickNext');
});
$('.arrow--testi-prev').on('click', function() {
	$('.testimonial-carousel').slick('slickPrev');
});
