$(document).ready(function(){
    $("#outsourceAnswer").hide();
    $("#internalAnswer").hide();
    $("#learnAnswer").hide();    
    
	$("#outsource").click(function(){
		$("#outsourceAnswer").toggle();
	});
	$("#internal").click(function(){
		$("#internalAnswer").toggle();
	});  
	$("#learn").click(function(){
		$("#learnAnswer").toggle();
	});       
	Reveal.initialize({
        slideNumber: 'c/t'
    });
});


function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// var foo = getParameterByName('name');
// 	httpGetAsync('/api/test', function() {
		
// 	});

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}