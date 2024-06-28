$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
	});

	var backToTopBtn = $('#back-to-button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			backToTopBtn.addClass('show');
		} else {
			backToTopBtn.removeClass('show');
		}
	});

	backToTopBtn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

});

$(window).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    })
	$(".home-slider").slick({
		lazyLoad: 'ondemand', 
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		speed: 500,
	});
	
	$(".review-slider").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		speed: 500,
		responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});

	$('.slick-prev.slick-arrow').addClass('fa fa-chevron-left');
	$('.slick-next.slick-arrow').addClass('fa fa-chevron-right');

})

$(window).scroll(function () {
	if ($(window).scrollTop() >= 100) {
		$('#header').addClass('fixed-header');
	}
	else {
		$('#header').removeClass('fixed-header');
	}
});