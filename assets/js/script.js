$(document).ready(function(){
var count = 0;

$("#menu-item").click(function(){
	if ($('#side-bar').hasClass('side-bar-active') ){
		$("#side-bar").removeClass("side-bar-active");
		$(".content-overlay").removeClass("content-overlay-active");
    caroulwidth = parseInt($('#carousel').css('width').replace("px", ""))/5;
    locs = [0, caroulwidth * -1, caroulwidth * -2, caroulwidth * -3, caroulwidth * -4];
    setTimeout(function() {
      $("#carousel").css('margin-left',locs[count]);
    }, 200);
	} else {
		$("#side-bar").addClass("side-bar-active");
		$(".content-overlay").addClass("content-overlay-active");
    caroulwidth = parseInt($('#carousel').css('width').replace("px", ""))/5;
    locs = [0, caroulwidth * -1, caroulwidth * -2, caroulwidth * -3, caroulwidth * -4];
    setTimeout(function() {
      $("#carousel").css('margin-left',locs[count]);
    }, 200);
    }

});

$("#carousel-next").click(function() {
  caroulwidth = parseInt($('#carousel').css('width').replace("px", ""))/5;
  locs = [0, caroulwidth * -1, caroulwidth * -2, caroulwidth * -3, caroulwidth * -4];
  if (count == 4) {
    count = 0;
    $("#carousel").css('margin-left',locs[count]);
    return false
  } else {
    count = count + 1;
    $("#carousel").css('margin-left',locs[count]);
  }
});

  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev").click(function() {
  caroulwidth = parseInt($('#carousel').css('width').replace("px", ""))/5;
  locs = [0, caroulwidth * -1, caroulwidth * -2, caroulwidth * -3, caroulwidth * -4];

  if (count == 0) {
    count = 4;
    $("#carousel").css('margin-left',locs[count]);
    return false
  } else {
    count = count - 1;
    $("#carousel").css('margin-left',locs[count]);
  }
});

$("#about-us").click(function() {
  $("#big-hidden-logo").fadeIn(1000);
  setTimeout(function() {
      $("#big-hidden-logo").fadeOut(1000);
    }, 4000);
});


});