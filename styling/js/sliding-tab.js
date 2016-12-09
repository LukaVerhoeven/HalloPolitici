$(".nav--item").click(function(){
	var val = $(this).attr('data-tab-target');
	$('.nav--item').removeClass('-is--active');
	$(this).addClass('-is--active');

	$(".tabset--content").attr('data-active-tab', val);
  var navbar = $(".tabset--nav");
  if (val === "tab-1") {
    navbar.css("background-image","url(img/navbar1.png)");
  }else if (val === "tab-2") {
    $(".tabset--nav").css("background-image","url(img/navbar2.png)");
  }else if (val === "tab-3") {
    navbar.css("background-image","url(img/navbar3.png)");
  }else {
    navbar.css("background-image","url(img/navbar4.png)");
  }


});
