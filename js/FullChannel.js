var oFirstAnimates = $("[data-first-animate]");
var oScrollAnimates = $("[data-scroll-animate]");


function initAnimates() {
    // 首屏动画
    oFirstAnimates.each(function (i, fn) {
        $(this).addClass($(fn).data("first-animate"));
    });

    // 滚动加载动画
    function doAnimates() {
        var sT = $(window).scrollTop();

        oScrollAnimates.each(function () {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() - 50)) {
                $(this).addClass($(this).data("scroll-animate"));
            }
        });
    };
    doAnimates();
    $(window).scroll(function () {
        doAnimates();
    });
}
initAnimates();
