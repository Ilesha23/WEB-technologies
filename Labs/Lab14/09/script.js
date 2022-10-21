"use strict";

let imgs = $('img');

$('.animatedl').css('animation-play-state', 'paused');
$('.animatedr').css('animation-play-state', 'paused');
$('#start').click(function (e) { 
    e.preventDefault();
    if($('input').eq(0).prop('checked') == true){
        $.each(imgs, function () { 
            $(this).addClass('animatedl');
            $(this).removeClass('animatedr');
        });
        if ($('img').hasClass('animatedl')) {
            $('.animatedl').css('animation-play-state', 'running');
        }
    }
    else{
        $.each(imgs, function () { 
            $(this).addClass('animatedr');
            $(this).removeClass('animatedl');
        });
        if ($('img').hasClass('animatedr')) {
            $('.animatedr').css('animation-play-state', 'running');
        }
    }
});
$('#stop').click(function (e) { 
    e.preventDefault();
    $('.animatedl').css('animation-play-state', 'paused');
    $('.animatedr').css('animation-play-state', 'paused');
});

$('#lb').mousedown(function () { 
    $.each(imgs, function () { 
        $(this).addClass('animatedl');
        $(this).removeClass('animatedr');
    });
    if ($('img').hasClass('animatedl')) {
        $('.animatedl').css('animation-play-state', 'running');
    }
    $('.animatedr').css('animation-play-state', 'paused');
});
$('#rb').mousedown(function () { 
    $.each(imgs, function () { 
        $(this).addClass('animatedr');
        $(this).removeClass('animatedl');
    });
    if ($('img').hasClass('animatedr')) {
        $('.animatedr').css('animation-play-state', 'running');
    }
    $('.animatedl').css('animation-play-state', 'paused');
});