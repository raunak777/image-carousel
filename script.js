var curSlide = 1;
var $slides = $(".slides");
var slideCount = $slides.children().length;
var interval;

$(function () {

    function colorChange() {
        if (curSlide == 1) {
            $("#1").css("color", "red");
            $("#2, #3, #4, #5").css("color", "black");
        }
        else if (curSlide == 2) {
            $("#2").css("color", "red");
            $("#1, #3, #4, #5").css("color", "black");
        }
        else if (curSlide == 3) {
            $("#3").css("color", "red");
            $("#2, #1, #4, #5").css("color", "black");
        }
        else if (curSlide == 4) {
            $("#4").css("color", "red");
            $("#2, #3, #1, #5").css("color", "black");
        }
        else if (curSlide == 5) {
            $("#5").css("color", "red");
            $("#2, #3, #4, #1").css("color", "black");
        }
    }

    function startSlider() {
        interval = setInterval(function () {
            curSlide++;
            colorChange();
            $($slides).animate({
                marginLeft: '-=100%'
            }, 2000, function () {
                if (curSlide >= slideCount) {
                    curSlide = 1;
                    $(this).css("margin-left", "00%");
                    $("#1").css("color", "red");
                    $("#2, #3, #4, #5").css("color", "black");
                }
            });
        }, 3000);
    }

    function stopSlider() {
        clearInterval(interval);
    }
    $(" .slides, .next, .prev, .fafa").on('mouseenter', stopSlider).on('mouseleave', startSlider);
    startSlider();
    $(".next").click(function () {
        curSlide++;
        colorChange();
        if (curSlide >= 6) {
            curSlide = 1;
            $($slides).animate({
                marginLeft: '0px'
            })
        }
        else {
            $($slides).animate({
                marginLeft: '-=100%'
            })
        }
    });

    $(".prev").click(function () {
        curSlide--;
        colorChange();
        if (curSlide == 0) {
            curSlide = 5;
            $($slides).animate({
                marginLeft: '-400%'
            })
        }
        else {
            $($slides).animate({
                marginLeft: '+=100%'
            })

        }
    });

    $(".fas").click(function () {
        var d = this.id;
        if (d == 1) {
            curSlide = 1;
            $($slides).animate({
                marginLeft: '0%'
            })
            colorChange();
        }
        else if (d == 2) {
            curSlide = 2;
            $($slides).animate({
                marginLeft: '-100%'
            })
            colorChange();
        }
        else if (d == 3) {
            curSlide = 3;
            $($slides).animate({
                marginLeft: '-200%'
            })
            colorChange();
        }
        else if (d == 4) {
            curSlide = 4;
            $($slides).animate({
                marginLeft: '-300%'
            })
            colorChange();
        }
        else if (d == 5) {
            $($slides).animate({
                marginLeft: '-400%'
            })
            curSlide = 5;
            colorChange();
        }
    });
});
