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
    step.text("Step 3");
  }else {
    navbar.css("background-image","url(img/navbar4.png)");
		$(".replay").removeClass("hide");
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

    Hammer(swiper).on("swipeleft", function() {
          $(swiper).animate({left: "-=80vw"}, 500)
    });

    Hammer(document.getElementById("center")).on("swiperight", function() {
          $(swiper).animate({left: "+=80vw"}, 500)
    });
})
