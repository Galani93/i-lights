
$(function(){
    $('.header .menu-button').click(function() {
        $(this).toggleClass('active');
        $('.header .header-menu').toggleClass('opened');
    });
    $('.totop-link a, .header ul li a').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

});
