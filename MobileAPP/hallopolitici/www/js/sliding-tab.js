$(".nav--item").click(function(){
	var val = $(this).attr('data-tab-target');
	$('.nav--item').removeClass('-is--active');
	$(this).addClass('-is--active');

	$(".tabset--content").attr('data-active-tab', val);
	var navbar = $(".tabset--nav");
	var step = $('.step');
	if (val === "tab-1") {
		navbar.css("background-image","url(img/navbar1.png)");
		$(".replay").addClass("hide");
		step.text("Step 1");
	}else if (val === "tab-2") {
		navbar.css("background-image","url(img/navbar2.png)");
		$(".replay").addClass("hide");
		step.text("Step 2");
	}else if (val === "tab-3") {
		navbar.css("background-image","url(img/navbar3.png)");
		$(".replay").addClass("hide");
		$(".fullvraag").removeClass("hidden")

		step.text("Step 3");
	}else {
		navbar.css("background-image","url(img/navbar4.png)");
		$(".replay").removeClass("hide");
		$(".fullvraag").addClass("hidden")
		step.text("Step 4");
	}


});
$(".fullvraag").click(function(){
	console.log("test");
	$(".fullvraag").toggleClass("block");
	$(".fullvraag").toggleClass("show");

});



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
