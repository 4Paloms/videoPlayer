var player;

// VARIABLES VIDEO VILLAREAL-REAL SOCIEDAD

var firstChoicePart = 5;
var secondChoicePart = 22;
var villarealGoalPart = 5;
var realSociedadGoalPart = 22;
var continuePart=47;
var finishVideo=90;
var questionAskedFootball2 = false;


// VARIABLES VIDEO 2
var questionAskedNadal = false;
var questionResponse = false;
var choicePart = 54 ;
var checkQuestion = 55;

var responce = "";
var insertion = false;

// VARIABLE VIDEO 3


//FUNCION JQUERY PARA INTERACCION

$(document).ready(function(){
	
    $.featherlight.defaults.afterClose = playPause;

    player = $('#player');

    $( ".interactionBox1" ).css("pointer-events","none");
    $( ".interactionBox2" ).css( "pointer-events", "none" );
    
    $(".interactionBox2").on('click' , function(){
        playPause('.paquitoEmergent');
        })
    $(".interactionBox1").on('click' , function(){
        playPause('.lebronEmergent');
        })
		  
	// VIDEO REAL SOCIEDAD - VILLAREAL
	$(".golVillarreal").on('click', function(){
		$.featherlight.close();
		player[0].currentTime= villarealGoalPart;
		//goodChoiceChoosen=true;
	})

	$(".golRealSociedad").on('click', function(){
		$.featherlight.close();
		player[0].currentTime= realSociedadGoalPart;
	})

	$(".continuar").on('click', function(){
		$.featherlight.close();
		
	})
	$(".finalizar").on('click', function(){
		$.featherlight.close();
		player[0].currentTime = finishVideo;
	})
	// VIDEO NADAL
	$(".TreceRG").on('click', function(){
		$.featherlight.close();
		questionResponse=true;
		responce = 'Trece Roland Garros';
	})
	$(".DiezRG").on('click', function(){
		$.featherlight.close();
		questionResponse=true;
		responce = 'Diez Roland Garros';
		
	})
	$(".CincoRG").on('click', function(){
		$.featherlight.close();
		questionResponse=true;
		responce = "Cinco Roland Garros";
		
	})
	$(".NingunoRG").on('click', function(){
		$.featherlight.close();
		questionResponse=true;
		responce = 'Ningun Roland Garros';
		
	})



	$(player).on('loadeddata ' , function(){
		videoHalfWay = Math.round(this.duration/2);
	})

	$(player).on('timeupdate',function(){
		var currentTime = Math.round(this.currentTime);
		var durationNum = Math.round(this.duration);
		
		console.log(currentTime);
		console.log(durationNum);
		

		if(player[0].src.includes('ResumendeRealSociedadvsVillarrealCF')){

			 var emergentQuestion= $('.emergentQuizFutbol');

			if((currentTime == firstChoicePart || currentTime == secondChoicePart || currentTime==continuePart) && questionAskedFootball2==false){
				questionAskedFootball2=true;
				player[0].pause();
				showChoiceQuestion(emergentQuestion);
			}
			if(currentTime == firstChoicePart+1 || currentTime == secondChoicePart+1 ){
				questionAskedFootball2=false;
			}
		}
		if(player[0].src.includes('Teemocionar')){

			var emergentQuestion= $('.emergentQuizNadal');

		   if(currentTime == choicePart && questionAskedNadal==false){
			   questionAskedNadal=true;
			   player[0].pause();
			   showChoiceQuestion(emergentQuestion);
		   }
		   if(currentTime == choicePart+1 ){
			   questionAskedNadal=false;
		   }
		   if(currentTime == checkQuestion && questionResponse==false)
			   player[0].currentTime = 1;
		   if(currentTime == durationNum && questionResponse==true && insertion==false){
			   var f= new Date();
			var info = {"responce":responce , "video":player[0].src , "time" : f } ;
			var data ={
				url:"/index",
				type:"POST",
				contentType: "application/json",
				data : JSON.stringify(info), 
			};
			$.ajax(data);
			insertion=true;
		   }

	   }
	})
});





function setSrc(valor){
    'use strict'
    player = $('#player');
    
    player[0].src=valor;
    
    if(player[0].src.includes("assets/videos/FranciscoNavarro-Juan")){
        $( ".interactionBox1" ).css("pointer-events","auto");
        $( ".interactionBox2" ).css( "pointer-events", "auto" );
        $(".interactionBox2").css("cursor","pointer");
        $(".interactionBox1").css("cursor","pointer");
    }else{
        $(".interactionBox2").css("cursor","default");
        $(".interactionBox1").css("cursor","default");
        $( ".interactionBox1" ).css("pointer-events","none");
        $( ".interactionBox2" ).css( "pointer-events", "none" );

	}
	
    
}

function showChoiceQuestion(emergentQuestion){
	$.featherlight($(emergentQuestion));
}

function playPause(emergentBox){
	if(player[0].paused){
		player[0].play();
	}else{
		player[0].pause();
		$.featherlight($(emergentBox))
	}
}