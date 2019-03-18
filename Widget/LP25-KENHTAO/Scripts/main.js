switch (lang) {
case "fr":
	var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
	var months=['Jan','Fev','Mar','Avr','Mai','Juin','Juil','Aou','Sep','Oct','Nov','Dec'];
break;
case "de":
	var days = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
	var months=["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];		
break;
case "sp":
	var days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var months=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
break;
default: 
	var days = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
	var months=["tháng 1 ","tháng 2 ","tháng 3 ","tháng 4 ","tháng 5 ","tháng 6 ","tháng 7","tháng 8 ","tháng 9 ","tháng 10 ","tháng 11 ","tháng 12 "];
break;
}

function updateClock() { 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var currentYear = currentTime.getFullYear();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h") {
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
       document.getElementById("Timed").innerHTML = currentHours + ":" + currentMinutes;
        document.getElementById("hour").innerHTML = currentHours;
       document.getElementById("minute").innerHTML = currentMinutes;
       document.getElementById("ampm").innerHTML = timeOfDay;
	}
if (Clock == "12h") {
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
       document.getElementById("Timed").innerHTML = currentHours + ":" + currentMinutes;
       document.getElementById("hour").innerHTML = currentHours;
       document.getElementById("minute").innerHTML = currentMinutes;
       document.getElementById("ampm").innerHTML = timeOfDay;
}

document.getElementById("weekday").innerHTML = days[currentTime.getDay()];
document.getElementById("date").innerHTML = currentDate;

document.getElementById("month").innerHTML = months[currentTime.getMonth()];

document.getElementById("year").innerHTML = " năm "+currentYear;
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}