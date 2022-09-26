const win = $(this); //this = window

$(document).ready(function () {
  if (win.width() >= 768) {
    //hide mobile
    $("#header-mobile").toggle();
  } else {
    $("#header-desktop").toggle();
  }
  $("#btn-responce").hide();
});

$(window).on("resize", function () {
  //tablet/mobile view
  if (win.width() < 768) {
    $("#header-mobile").show();
    $("#header-desktop").hide();
  } else {
    //desktop view
    $("#header-mobile").hide();
    $("#header-desktop").show();
  }
});

function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  $("#btn-responce").toggle();
  if (inputText.value.match(mailformat)) {
    alert("You have entered a Valid email address!");
    document.form1.email.focus();
    $("#btn-responce").html("You have now subscribed");
    return true;
  } else {
    alert("Invalid Email Address");
    $("#btn-responce").html("Invalid email");
    document.form1.email.focus();
    return false;
  }
}
