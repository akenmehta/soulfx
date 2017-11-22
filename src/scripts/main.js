var app = {};
app.windowSize = $(window).width();

app.toggleClassInvisible = function() {
	if(app.windowSize <=668) {
		$('.header__item:last-child').removeClass('hide-me');
	}
	else{
		$('.header__item:last-child').addClass('hide-me');
	}
};

app.windowResize = function() {
	$(window).resize(function() {
  		app.windowSize = $(window).width();
  		app.toggleClassInvisible();
  		// app.showNavBtn();
		console.log(app.windowSize);
	});
};

app.init = function() {
	app.windowResize();
	app.toggleClassInvisible();
};

$(function() {
	app.init();
});