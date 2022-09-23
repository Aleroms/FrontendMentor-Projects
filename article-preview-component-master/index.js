const win = $(this); //this = window

$(document).ready(function () {
  $("#share-active").hide();


  //jquery's media query?? 0.o
  //for desktop view
  if (win.width() >= 768) {
    $("#share-mobile").hide();
    $("#comment-bubble").show();
  }

    $(".share-link").on("click", function () {
      $("#share-active").toggle();

    });
  

});

$(window).on("resize", function () {
  //tablet/mobile view
  if (win.width() < 768) {
    $("#share-mobile").show();
    $("#comment-bubble").hide();
  } else {
    //desktop view
    $("#share-mobile").hide();
    $("#comment-bubble").show();
  }

});
