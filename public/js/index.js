var player;
var direction = "";
// VARIABLES VIDEO 1

// VARIABLES VIDEO 2

// VARIABLE VIDEO 3


//FUNCION JQUERY PARA INTERACCION

$(document).ready(function(){
	
    $.featherlight.defaults.afterClose = playPause;

    player = $('#player');
    
    console.log(player);
    
    $("#player").on('play', function(){
        if(player[0].src.includes("assets/videos/FranciscoNavarro-Juan")){
            $(".interactionBox2").css("cursor","pointer");
            $(".interactionBox1").css("cursor","pointer");

            $(".interactionBox2").on('click' , function(){
                playPause('.paquitoEmergent');
            })
            $(".interactionBox1").on('click' , function(){
                playPause('.lebronEmergent');
            })
        }
           
        
    });

/*	$(".goodChoice").on('click', function(){
		$.featherlight.close();
		video1[0].currentTime= goodChoicePart;
		goodChoiceChoosen=true;
		

	})

	$(".badChoice").on('click', function(){
		$.featherlight.close();
		video1[0].currentTime= badChoicePart;
	})

	$(video1).on('loadeddata ' , function(){
		videoHalfWay = Math.round(this.duration/2);
	})

	$(video1).on('timeupdate',function(){
		var currentTime = Math.round(this.currentTime);
		var durationNum = Math.round(this.duration);
		
		console.log(currentTime);
		console.log(durationNum);
		if(currentTime == choicePart && question1Asked == false){
			
			question1Asked = true;
			video1[0].pause();
			showChoiceQuestion();

		}
		if(currentTime == badChoicePart && goodChoiceChoosen == true){
			video1[0].controls = false;
			video1[0].pause();

		}
		if(currentTime == videoHalfWay){
			//Halfway point
		}
		if(currentTime == durationNum){
			//FINISH VIDEO
		}
	})*/


});



function setSrc(valor){
    'use strict'
    player = $('#player');
    
    player[0].src=valor;
    
    console.log(player[0].src);
    
}

function playPause(emergentBox){
	if(player[0].paused){
		player[0].play();
	}else{
		player[0].pause();
		$.featherlight($(emergentBox))
	}
}