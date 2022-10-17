'use strict';

let div = $('#div');

$('button').click(function (e) { 
    e.preventDefault();
    div
        .animate({left: '+=20vw' ,top: '-=20vh', width: '-=7vw'}, 1000)
        .animate({left: '+=20vw' ,top: '+=20vh', width: '-=7vw'}, 1000)
        .animate({left: '-=40vw' , width: '-=7vw'}, 1000)
        .animate({width: '40vw'}, 1000)
});