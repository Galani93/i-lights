
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
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;


}

var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty + 1;
    numCount.value = qty;
}
minusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty - 1;
    numCount.value = qty;
}