
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

var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 10) + "px";


}


var rangeSlider1 = document.getElementById("rs-range-line-1");
var rangeBullet1 = document.getElementById("rs-bullet-1");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue1() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 53820) + "px";

}

var rangeSlider2 = document.getElementById("rs-range-line-2");
var rangeBullet2 = document.getElementById("rs-bullet-2");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue2() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 160) + "px";

}
var rangeSlider3 = document.getElementById("rs-range-line-3");
var rangeBullet3 = document.getElementById("rs-bullet-3");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue3() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 10575) + "px";

}




(function($){
    $('#thumbcarousel').carousel(0);
    var $thumbItems = $('#thumbcarousel .item');
    $('#carousel').on('slide.bs.carousel', function (event) {
        var $slide = $(event.relatedTarget);
        var thumbIndex = $slide.data('thumb');
        var curThumbIndex = $thumbItems.index($('#thumbcarousel .item.active').get(0));
        if (curThumbIndex>thumbIndex) {
            $('#thumbcarousel').one('slid.bs.carousel', function (event) {
                $('#thumbcarousel').carousel(thumbIndex);
            });
            if (curThumbIndex === ($thumbItems.length-1)) {
                $('#thumbcarousel').carousel('next');
            } else {
                $('#thumbcarousel').carousel(numThumbItems-1);
            }
        } else {
            $('#thumbcarousel').carousel(thumbIndex);
        }
    });
})(jQuery);

