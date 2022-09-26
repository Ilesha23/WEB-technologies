'use strict';

// callback
// function load(){
//     loadS('createBlocks.js', function(error, script){
//         if (error) alert('error')
//         else createBlocks();
//     })
//     loadS('paint.js', function(error, script){
//         if (error) alert('error')
//         else paint();
//     })
//     loadS('fill.js', function(error, script){
//         if (error) alert('error')
//         else fill();
//     })
// }

// function loadS(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Invalid ${src}`));
//     document.body.appendChild(script);
// }


// promise
function load(){
    loadS('createBlocks.js')
    .then(function(script){
        return loadS('paint.js')
    })
    .then(function(script){
        return loadS('fill.js')
    })
    .then(function(script){
        createBlocks();
        paint();
        fill();
    })
}

function loadS(src){
    return new Promise(function(resolve, reject){
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Invalid ${src}`));
        document.body.appendChild(script);
    })
}



function create(){
    load();
}