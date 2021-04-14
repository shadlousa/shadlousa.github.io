(function($){

    let slidesTops = [];

    $('.slide').each(function () {
        slidesTops.push($(this).position().top);
    });

    /* respond to the scroll event */
    $(window).scroll(function(){
        /* get the current scroll position */
        let st = $(window).scrollTop();

        /* change classes based on section positions */
        $('.slide').each(function( index ) {
            let $slide = $(this);

            if (st >= slidesTops[index]) {
                $slide.addClass('latched');
            } else {
                $slide.removeClass('latched');
            }
        });
    });

    $.scrollify({
        section : ".slide"
    });

    let horizontalSlides = $('.slides-h .slide-h').length;
    let currentHorizontalSlide = 0;

    $('.arrow-right').click(function() {
        if (currentHorizontalSlide === 0) {
            currentHorizontalSlide = horizontalSlides;
        }

        currentHorizontalSlide = (--currentHorizontalSlide) % horizontalSlides;
        let translation = currentHorizontalSlide * 100;
        $('.slide-h').attr('style', 'transform: translateX(-' + translation + '%); -webkit-transform: translateX(-' + translation + '%)');
        //$('.slide-h').attr('style', 'transform: translateX(' + 2 * translation + '%); -webkit-transform: translateX(-' + translation + '%)');
    });
    
    $('.arrow-left').click(function() {
        currentHorizontalSlide = (++currentHorizontalSlide) % horizontalSlides;
        let translation = currentHorizontalSlide * 100;
        $('.slide-h').attr('style', 'transform: translateX(-' + translation + '%); -webkit-transform: translateX(-' + translation + '%)');
        //$('.slide-h').attr('style', 'transform: translateX(' + 2 * translation + '%); -webkit-transform: translateX(-' + translation + '%)');
    });

    $('.arrow-bottom').click(function() {
        $.scrollify.next();
    });

    $("#ccl").focusin(function() {
        this.play();
    });
})(window.jQuery);