$(document).ready(function(){  
    //smooth scroll
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if( target.length ) {        
            $('html, body').stop().animate({
                scrollTop: target.offset().top-50
            }, 800);
        }
    });
    //Nav active Class add/remove
    $('.nav-item').on('click', function(event) {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
});
