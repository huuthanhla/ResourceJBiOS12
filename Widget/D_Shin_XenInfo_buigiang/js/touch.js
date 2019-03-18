// touch(event) by am80ma (TeamIOS)
<!--  Modded by D-Shin (TeamIOS) -->
// don´t touch this header punk!!!

'use strict'
	var $$ = function(el){
	return document.getElementById(el);
}

	
var Xtouch = false;
function touch1() {
    
    if(Xtouch){
	Xtouch=false;
    $$("Main").style.opacity = "1.0";
	$$("MediaPlayer").style.opacity = "0.0";
	
	}else{
	Xtouch=true;
	$$("Main").style.opacity = "1.0";
	$$("MediaPlayer").style.opacity = "0.0";
		
}}

var ytouch = false;
function touch2() {
	
	if(ytouch){
	ytouch=false;
	$$("MediaPlayer").style.opacity = "1.0";
	$$("Main").style.opacity = "0.0";

	}else{
	ytouch=true;
    $$("MediaPlayer").style.opacity = "1.0";	
	$$("Main").style.opacity = "0.0";
		
}}

