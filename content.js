if (!scriptIsLoaded)
{
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.onload = function() {
	    callFunctionFromScript();
	}
	script.src = 'https://raw.githubusercontent.com/mt9304/bennysaddon/master/mainfunction.js';
	head.appendChild(script);
	console.log("appended");
}

increaseTextBoxHeight();

function scriptIsLoaded(url) {
    if (!url) url = "https://raw.githubusercontent.com/mt9304/bennysaddon/master/mainfunction.js";
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}
