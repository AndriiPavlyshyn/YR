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

	$("js-yr-float-button__wrapper").click(function() { // class of the button div
		$("").addClass(), // class/id/classes which will hide
		// $(".main-carousel .owl-nav .owl-next").show();
		 // class/id/classes which will show
		return false;
	});
	/* second button ( not necessarily ) */
	$(".main-carousel .owl-nav .owl-next").click(function() { // class of the button div
		$(".time-wrapper,.burger,.logo,.owl-prev").show(), // class/id/classes which will hide
		$(".main-carousel .owl-nav .owl-next").hide(); // class/id/classes which will show
		return false;
	});

});

$(".happy-meal").click(function() {
	$(".burger").toggleClass('i-hate-burger');
})
