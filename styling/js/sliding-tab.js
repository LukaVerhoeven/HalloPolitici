$(".nav--item").click(function(){
	var val = $(this).attr('data-tab-target');
	$('.nav--item').removeClass('-is--active');
	$(this).addClass('-is--active');

	$(".tabset--content").attr('data-active-tab', val);

});
