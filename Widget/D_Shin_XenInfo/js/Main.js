var iPhoneType = "auto"; // "auto" (normal use), "iPh4", iPh5", "iPh6","iPh6Plus" , "iPhX" or "editMode" (bigger preview). autosising for iPhX @NewD
	// SPECIAL CSS POSITIONING FOR iPAD & iPHONE X
	
// GET THE CURRENT WIDTH & HEIGHT
if (iPhoneType == "auto") {
	if (screen.height == 480) { iPhoneType = "iPh4"; }
	else if (screen.height == 568) { iPhoneType = "iPh5"; }
	else if (screen.height == 667) { iPhoneType = "iPh6"; }
	else if (screen.height == 736) { iPhoneType = "iPh6Plus"; }
	else if (screen.height == 1024) { iPhoneType = "iPadMini"; }
	else { iPhoneType = "iPhX"; }
}

// RESIZE THE BODY
window.addEventListener("load", function() { 
	switch(iPhoneType) {
		case "iPh4":
			document.body.style.width='320px';
			document.body.style.height='568px'; // Keep at 568px (not 480px).
		break;
		case "iPh5":
			document.body.style.width='320px';
			document.body.style.height='568px';
		break;
		case "iPh6":
			document.body.style.width='375px';
			document.body.style.height='667px';
		break;
		case "iPh6Plus":
			document.body.style.width='414px';
			document.body.style.height='736px';
		break;
		case "iPhX":
			document.body.style.width='375px';
			document.body.style.height='667px'; // Keep at 667px (not 812px). Just add a 375x812 overlay called 'homeX.png' in Images/Classic for iPhone X screens.
//			document.getElementById("background").style.height = "812px"; // to make full height walls fill height on X. Comment out (//) for 1/3rd size walls
		break;
		case "iPad":
			document.body.style.width='768px'; 
			document.body.style.height='1364px'; // Keep at 1364px (not 1024px) for 16:9 ratio.
		break;
		case "editMode":
			document.body.style.width='563px';
    		document.body.style.height='1000px';
		break;
	}
}, false);

	    // SPECIAL CSS POSITIONING FOR iPAD & iPHONE X
	
		$('head').removeAttr('Style');
	if (iPhoneType == 'iPhX') {
		$ ('head').append('<link rel="stylesheet" media="screen" href="Css/StyleX.css" type="text/css" >');
		}
		else {
		$ ('head').append('<link rel="stylesheet" media="screen" href="Css/Style.css" type="text/css" >');
	}

	if (iPhoneType == "iPhX") {
	    	document.getElementById("Layer").style.backgroundImage = "url('images/LayerX.png')";
			document.getElementById("Layer1").style.backgroundImage = "url('images/LayerX1.png')";
			document.getElementById("Layer").style.height = "812px";
			document.getElementById("Layer1").style.height = "812px";
	} else {
	    	document.getElementById("Layer").style.backgroundImage = "url('images/Layer.png')";
			document.getElementById("Layer1").style.backgroundImage = "url('images/Layer1.png')";			        
		}

function init(){
			getiPhoneModel();
		}
    // iPhone model checks.
function getiPhoneModel() {
    // Create a canvas element which can be used to retrieve information about the GPU.
    var canvas = document.createElement("canvas");
    if (canvas) {
        var context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (context) {
            var info = context.getExtension("WEBGL_debug_renderer_info");
            if (info) {
                var renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
            }
        }
    }
    
    // iPhone X
    if ((window.screen.height / window.screen.width == 812 / 375) && (window.devicePixelRatio == 3)) {
        return "iPhone X";
    // iPhone 6+/6s+/7+ and 8+
    } else if ((window.screen.height / window.screen.width == 736 / 414) && (window.devicePixelRatio == 3)) {
        switch (renderer) {
            default:
                return "iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus";
            case "Apple A8 GPU":
                return "iPhone 6 Plus";
            case "Apple A9 GPU":
                return "iPhone 6s Plus";
            case "Apple A10 GPU":
                return "iPhone 7 Plus";
            case "Apple A11 GPU":
                return "iPhone 8 Plus";
        }
    // iPhone 6+/6s+/7+ and 8+ in zoom mode
    } else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 3)) {
        switch(renderer) {
            default:
                return "iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus (display zoom)";
            case "Apple A8 GPU":
                return "iPhone 6 Plus (display zoom)";
            case "Apple A9 GPU":
                return "iPhone 6s Plus (display zoom)";
            case "Apple A10 GPU":
                return "iPhone 7 Plus (display zoom)";
            case "Apple A11 GPU":
                return "iPhone 8 Plus (display zoom)";
        }
    // iPhone 6/6s/7 and 8
    } else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 2)) {
        switch(renderer) {
            default: return "iPhone 6, 6s, 7 or 8";
            case "Apple A8 GPU":
                return "iPhone 6";
            case "Apple A9 GPU":
                return "iPhone 6s";
            case "Apple A10 GPU":
                return "iPhone 7";
            case "Apple A11 GPU":
                return "iPhone 8";
        }
    // iPhone 5/5C/5s/SE or 6/6s/7 and 8 in zoom mode
    } else if ((window.screen.height / window.screen.width == 1.775) && (window.devicePixelRatio == 2)) {
        switch(renderer) {
            default:
                return "iPhone 5, 5C, 5S, SE or 6, 6s, 7 and 8 (display zoom)";
            case "PowerVR SGX 543":
                return "iPhone 5 or 5c";
            case "Apple A7 GPU":
                return "iPhone 5s";
            case "Apple A8 GPU":
                return "iPhone 6 (display zoom)";
            case "Apple A9 GPU":
                return "iPhone SE or 6s (display zoom)";
            case "Apple A10 GPU":
                return "iPhone 7 (display zoom)";
            case "Apple A11 GPU":
                return "iPhone 8 (display zoom)";
        }
    // iPhone 4/4s
    } else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 2)) {
        switch(renderer) {
            default:
                return "iPhone 4 or 4s";
            case "PowerVR SGX 535":
                return "iPhone 4";
            case "PowerVR SGX 543":
                return "iPhone 4s";
        }
    // iPhone 1/3G/3GS
    } else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 1)) {
        switch(renderer) {
            default:
                return "iPhone 1, 3G or 3GS";
            case "ALP0298C05":
                return "iPhone 3GS";
            case "S5L8900":
                return "iPhone 1, 3G";
        }
    } else {
        return "Not an iPhone";
    }
}
