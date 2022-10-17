"use strict";

let list = $('#list')[0]
let addBut = $('#b1')[0]
let delBut = $('#b2')[0]
let inp = $('#inp')
let idx;

$('li').click(function () {
    if ($(this).css('background-color') == 'rgb(255, 255, 255)') {
        $(this).css('background-color', 'rgb(125, 125, 230)');
        $(this).css('color', 'red');
    }
    else{
        $(this).css('background-color', 'rgb(255, 255, 255)');
        $(this).css('color', 'black');
    }
    let items = $('li');
    for(let i = 0; i < items.length; ++i){
        delBut.disabled = true;
        if ($(items[i]).css('color') == "rgb(255, 0, 0)") {
            delBut.disabled = false;
            return;
        }
    }
});

$('li').dblclick(function (e) { 
    e.preventDefault();
    inp.val(e.target.innerHTML)
    idx = $(this).index();
});
$('input').keydown(function (e) { 
    addBut.disabled = false;
    if(e.target.value == ""){
        addBut.disabled = true;
    }
});
$(addBut).click(function (e) { 
    e.preventDefault();
    if ($('input').val() != "") {
        $('#list').append(`<li>${$('input').val()}</li>`);
    }
    inp.val("");
    addBut.disabled = true;
});
$('#b3').click(function (e) { 
    e.preventDefault();
    $('#list').children().eq(idx).html(inp.val())
    inp.val("")
});

$('#b2').click(function (e) { 
    e.preventDefault();
    let arr = Array.from($('li'));
    for(let i = 0; i < arr.length; i++){
        if($(arr[i]).css('color') == "rgb(255, 0, 0)"){
            $(arr[i]).remove();
        }
    }
    delBut.disabled = true;
});