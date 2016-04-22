$(document).ready(function(){

	$("#menu-item").click(function(){
		$("#side-bar").toggle(300);
	});

	$("#content").click(function(){
		$("#side-bar").fadeOut(300);
	})
});