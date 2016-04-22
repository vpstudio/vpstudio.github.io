$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $("#sidebar-button").click(function(){
    if ($('#sidebar-button').hasClass('button-active') ){
      setTimeout(function() {
      $('body').removeClass('no-scroll');
      }, 300);
      $(".sidebar-container").removeClass("sidebar-active");
      $('#sidebar-button').removeClass('button-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } else {
      setTimeout(function() {
      $('body').addClass('no-scroll');
      }, 300);
      $('.sidebar-container').addClass('sidebar-active');
      $('#sidebar-button').addClass('button-active');
      $('.page-wrapper').addClass('wrapper-active');
    }

  });

  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper").click(function(){
  setTimeout(function() {
  $('body').removeClass('no-scroll');
  }, 300);
  $(".sidebar-container").removeClass("sidebar-active");
  $('#sidebar-button').removeClass('button-active');
  $('.page-wrapper').removeClass('wrapper-active');
});
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
$("#carousel-next").click(function() {
  mval = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (mval == -3840) {
    return false
  } else {
    $("#carousel").css('margin-left',mval - 960);
  }
});

  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev").click(function() {
  mval = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (mval == 0) {
    return false
  } else {
    $("#carousel").css('margin-left',mval + 960);
  }
});


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});