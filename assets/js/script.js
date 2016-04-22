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

$("#carousel-next").click(function() {
  mval = parseInt($('#carousel').css('margin-left').replace("px", ""));
  caroulwidth = parseInt($('#carousel').css('width').replace("px", ""))/5;
  if (mval == -(4*caroulwidth)) {
    return false
  } else {
    $("#carousel").css('margin-left',mval - caroulwidth);
  }
});

  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev").click(function() {
  mval = parseInt($('#carousel').css('margin-left').replace("px", ""));
  caroulwidth = parseInt($('#carousel').css('width').replace("px", ""))/5;
  if (mval == 0) {
    return false
  } else {
    $("#carousel").css('margin-left',mval + caroulwidth);
  }
});


});