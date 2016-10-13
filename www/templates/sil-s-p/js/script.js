$(document).ready(function() {
    $('.item-124').mouseenter(function() {
        $('.side-bar .nav ul').slideDown(400);
    });
    $('.item-124').mouseleave(function() {
        $('.side-bar .nav ul').slideToggle(400);
    });  


    $('.feedback').click(function() {
        $('.floating-block').slideToggle(400);
    });

   /* $(document).mouseup(function(e) {
        var container = $('.floating-block');
        if (e.target != container[0] && !container.has(e.target).length) {
            container.slideUp(400);
        }
    });*/


    var flag = 0;

    $('#logo-img').mouseenter(function() {

        if (flag == 1) {
            var i = Math.round(Math.random() * 3);
            var image = document.getElementById("logo-img");
            var imgs = new Array('templates/sil-s-p/images/logo.png', 'templates/sil-s-p/images/logo2.png', 'templates/sil-s-p/images/logo3.png', 'templates/sil-s-p/images/logo4.png');
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
        document.getElementById('logo-img').src = 'templates/sil-s-p/images/logo.png';
    }

    if (localStorage.getItem('logo-img') == 'images/logo2.png') {
        document.getElementById('logo-img').src = 'templates/sil-s-p/images/logo2.png';
    }
    if (localStorage.getItem('logo-img') == 'images/logo3.png') {
        document.getElementById('logo-img').src = 'templates/sil-s-p/images/logo3.png';
    }
    if (localStorage.getItem('logo-img') == 'images/logo4.png') {
        document.getElementById('logo-img').src = 'templates/sil-s-p/images/logo4.png';
    }


});