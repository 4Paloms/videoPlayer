
 

function setSrc(valor){
    'use strict'
    var player = document.getElementById('player');
    console.log(player.src);
    player.src=valor;
    console.log("video",player.src);
}