var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}

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
const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
    changeSlide();
    restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
    changeSlide(false);
    restart();
});


var Carousel = function (element, options) {

    this.$indicators = this.$element.find('.carousel-indicators')
}
isCycling && this.pause()

if (this.$indicators.length) {
    this.$indicators.find('.active').removeClass('active')
    var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
    $nextIndicator && $nextIndicator.addClass('active')
}


