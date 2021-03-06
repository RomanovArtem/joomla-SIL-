$(document).ready(function() {
    $('.item-124').mouseenter(function() {
        $('.side-bar .nav ul').slideDown(400);
    });
    $('.item-124').mouseleave(function() {
        $('.side-bar .nav ul').slideToggle(400);
    });

    $('.slider').jCarouselLite({
        vertical: false,
        hoverPause: true,
        btnPrev: '.prev-img',
        btnNext: ".next-img",
        visible: 6,
        speed: 1000,
        auto: 800
    });

    $('.feedback').click(function() {
        $('.floating-block').slideToggle(400);
    });
	
	$('.about-us h1').click(function() {
        $('.side-bar').fadeTo(500, 0);
		//$('.side-bar').hide('.side-bar', { direction: "right" }, 1000);
    });
	
	$('.menu_link').click(function() {
        $('.side-bar').fadeIn();
        $('.menu_link_down').fadeIn();
		$('.menu_link').fadeOut()
		$('.header').fadeOut();
		$('.content').fadeOut();
		$('.footer-information').fadeOut();
		$('.contact-details').fadeOut();
		$('.feedback').fadeIn();
    });
	
	$('.menu_link_down').click(function() {
        $('.side-bar').fadeOut();
        $('.menu_link_down').fadeOut();
		$('.menu_link').fadeIn();
		$('.header').fadeIn();
		$('.content').fadeIn();
		$('.footer-information').fadeIn();
		$('.contact-details').fadeIn();
		$('.feedback').fadeOut();
		$('.floating-block').fadeOut();

    });

    $(document).mouseup(function(e) {
        var container = $('.floating-block');
        if (e.target != container[0] && !container.has(e.target).length) {
            container.slideUp(400);
        }
    });

  /*  $(document).ready(function() {
        var url = document.location.href;
        $.each($(".nav a"), function() {
            if (url == this.href) {
                $(this).addClass('current');
            };
        });
    });

    $(document).ready(function() {
        var url = document.location.href;
        $.each($(".header .nav a"), function() {
            if (url == this.href) {
                $(this).addClass('current');
            };
        });
    }); */

    var slideWidth = $(window).width() * 0.204;
    var dot_counter = 0;
    $(function() {
		 $('.dot').click(function() {
            $('.dot.active').removeClass('active');
            $(this).addClass('active');
            var n = $('.dot').index(this);
            certainSlide(n);
        });
        $('.slidewrapper').width($('.slidewrapper').children().size() * slideWidth);
        sliderTimer = setInterval(nextSlide, 6000);

        $('.viewport').hover(function() {
            clearInterval(sliderTimer);
        }, function() {
            sliderTimer = setInterval(prevSlide, 6000);
        });

        $('.next_slide').click(function() {
            clearInterval(sliderTimer);
            nextSlide();
            sliderTimer = setInterval(nextSlide, 6000);
        });

        $('.prev_slide').click(function() {
            clearInterval(sliderTimer);
            prevSlide();
            sliderTimer = setInterval(nextSlide, 6000);
        });

       
    });

    function nextSlide() {
        dot_counter++;
        var currentSlide = parseInt($('.slidewrapper').data('current'));
        currentSlide++;
        if (currentSlide >= $('.slidewrapper').children().size()) {
            $('.slidewrapper').css('left', -(currentSlide - 2) * slideWidth);
            $('.slidewrapper').append($('.slidewrapper').children().first().clone());
            $('.slidewrapper').children().first().remove();
            currentSlide--;
        }

        $('.slidewrapper').animate({
            left: -currentSlide * slideWidth
        }, 1000).data('current', currentSlide);
        $('.dot.active').removeClass('active');
        $('.dot').eq(dot_counter % $('.dot').size()).addClass('active');
    }

    function prevSlide() {
        dot_counter--;
        var currentSlide = parseInt($('.slidewrapper').data('current'));
        currentSlide--;
        if (currentSlide < 0) {
            $('.slidewrapper').css('left', -(currentSlide + 2) * slideWidth);
            $('.slidewrapper').prepend($('.slidewrapper').children().last().clone());
            $('.slidewrapper').children().last().remove();
            currentSlide++;
        }
        $('.dot.active').removeClass('active');
        $('.dot').eq(dot_counter % $('.dot').size()).addClass('active');
        $('.slidewrapper').animate({
            left: -currentSlide * slideWidth
        }, 1000).data('current', currentSlide);
    }

    function certainSlide(n) {
        var currentSlide = n;
        $('.slidewrapper').animate({
            left: -currentSlide * slideWidth
        }, 1000).data('current', currentSlide);
    }

    var flag = 0;

    $('#logo-img').mouseenter(function() {

        if (flag == 1) {
            var i = Math.round(Math.random() * 3);
            var image = document.getElementById("logo-img");
            var imgs = new Array('templates/sil/images/logo.png', 'templates/sil/images/logo2.png', 'templates/sil/images/logo3.png', 'templates/sil/images/logo4.png');
            image.src = imgs[i];
            localStorage.setItem('logo-img', imgs[i]);
            $('#logo-img').click(function() {
                localStorage.setItem('logo-img', imgs[i]);
            });
        }
        if (flag == 0) {

            flag = 1;
        }

    });

    if (localStorage.getItem('logo-img') == 'images/logo.png') {
        document.getElementById('logo-img').src = 'templates/sil/images/logo.png';
    }

    if (localStorage.getItem('logo-img') == 'images/logo2.png') {
        document.getElementById('logo-img').src = 'templates/sil/images/logo2.png';
    }
    if (localStorage.getItem('logo-img') == 'images/logo3.png') {
        document.getElementById('logo-img').src = 'templates/sil/images/logo3.png';
    }
    if (localStorage.getItem('logo-img') == 'images/logo4.png') {
        document.getElementById('logo-img').src = 'templates/sil/images/logo4.png';
    }


});