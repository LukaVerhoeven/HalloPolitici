$(".nav--item").click(function(){
	var val = $(this).attr('data-tab-target');

	$('.nav--item').removeClass('-is--active');
	$(this).addClass('-is--active');

	$(".tabset--content").attr('data-active-tab', val);

	var navbar = $(".tabset--nav");
	var step = $('.step');

	if (val === "tab-1") {
		navbar.css("background-image","url(img/navbar1.png)");
		step.text("Step 1");
	}
	else if (val === "tab-2") {
		navbar.css("background-image","url(img/navbar2.png)");
		step.text("Step 2");
	}
	else if (val === "tab-3") {
		navbar.css("background-image","url(img/navbar3.png)");
		step.text("Step 3");
	}
	else {
		navbar.css("background-image","url(img/navbar4.png)");
		step.text("Step 4");
	}
});
