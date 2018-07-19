function increaseTextBoxHeight() {
  //The addon makes the text box height bigger everytime you click it.
  var textBoxHeight = document.querySelectorAll('[title="HTML Body"]')[0].offsetHeight;
  var textBox = document.querySelectorAll('[title="HTML Body"]')[0];
  document.querySelectorAll('[title="HTML Body"]')[0].style.setProperty('height', textBoxHeight+150+'px','');
}
/*

if (!scriptIsLoaded())
{
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.onload = function() {
	    callFunctionFromScript();
	}
	script.src = 'https://rawgit.com/mt9304/bennysaddon/master/mainfunctions.js';
	head.appendChild(script);
}

increaseTextBoxHeight();

function scriptIsLoaded() {
    url = "https://rawgit.com/mt9304/bennysaddon/master/mainfunctions.js";
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}


*/
