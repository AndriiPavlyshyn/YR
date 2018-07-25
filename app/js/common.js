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

});

// Burger

$(".happy-meal").click(function() {
	$(".burger").toggleClass('i-hate-burger');
})

// Form float button

$('#js-yr-float-button__wrapper').click(function() {
	$('.call_form').addClass('in').animate({width: "toggle"});
	$('.call_section>a, .btn_phone_fill').css('visibility', 'hidden');
});
$('.call_form .close').click(function() {
	$('.call_form').removeClass('in').animate({width: "toggle"});
	$('.call_section>a, .btn_phone_fill').css('visibility', 'visible');
});
