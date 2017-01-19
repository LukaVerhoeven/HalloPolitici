//textbalon stap4
$(function(){
	var swiper = document.getElementById("center");
	var items = $("#center").children().length;
	var current = 0;
	var itemwidth = $("#center").children().width();
	$(swiper).css('width',itemwidth * items +"vw");
	var hidding = $(swiper).children(".canvastextbalon:not(:first-child)").css('opacity',0)


	Hammer(swiper).on("swipeleft", function() {
		if (current <items-1) {
			var currentBalon = swiper.children[current];
			$(currentBalon).animate({opacity: 0}, 500);
			$(currentBalon).removeClass('activeBalon');
			current++;
			var nextBalon = swiper.children[current];
			$(nextBalon).animate({opacity: 1}, 500);
			$(nextBalon).addClass('activeBalon');

			$(swiper).animate({left: "-=80vw"}, 500);

		}
	});

	Hammer(document.getElementById("center")).on("swiperight", function() {
		if (current >0) {
			var currentBalon = swiper.children[current];
			$(currentBalon).animate({opacity: 0}, 500)
			$(currentBalon).removeClass('activeBalon');
			current--;
			var nextBalon = swiper.children[current];
			$(nextBalon).animate({opacity: 1}, 500)
			$(nextBalon).addClass('activeBalon');

			$(swiper).animate({left: "+=80vw"}, 500)
		}
	});
})
