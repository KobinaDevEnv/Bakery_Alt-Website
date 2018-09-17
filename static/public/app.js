//slide show for index.html
$(document).ready(function(){

	$('.phoenix-slider').phoenix({
		fullscreen: true,
        height: '100%',
        delay: 10000
	});

});
// Change color to show active page
var currentUrl = window.location.pathname;
if (currentUrl=="/index.html") {
	document.getElementById("menuitem_1").style.color = "#900020"
}
else if (currentUrl == "/about/about.html") {
	document.getElementById("menuitem_2").style.color = "#900020"
}
else if (currentUrl == "/gallery/gallery.html") {
	document.getElementById("menuitem_3").style.color = "#900020"
}
else if (currentUrl == "/services/services.html"){
	document.getElementById("menuitem_4").style.color = "#900020"
} 
else if(currentUrl == "/appointment/appointment.html"){
	document.getElementById("menuitem_5").style.color = "#900020"
}