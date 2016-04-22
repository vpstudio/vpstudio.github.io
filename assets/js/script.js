$(document).ready(function(){

$("#menu-item").click(function(){
	if ($('#side-bar').hasClass('side-bar-active') ){
		$("#side-bar").removeClass("side-bar-active");
		$(".content-overlay").removeClass("content-overlay-active");
	} else {
		$("#side-bar").addClass("side-bar-active");
		$(".content-overlay").addClass("content-overlay-active");
    }

});

$('.slider').unslider({
});

});