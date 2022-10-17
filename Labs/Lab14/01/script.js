'use strict';

let i;
$('li').click(function (e) {
    i = $(this).index() / 2;
    if($(`div:eq(${i})`).hasClass('active')){
        $(`div:eq(${i})`).fadeOut();
        $(`div:eq(${i})`).toggleClass('active');
    }
    else{
        $(`div:eq(${i})`).fadeIn();
        $(`div:eq(${i})`).toggleClass('active');
    }
});
