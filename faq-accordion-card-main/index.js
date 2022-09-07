$(document).ready(function () {
  //hides the <p> on start
  for (let i = 1; i <= 5; i++) {
    $("#p" + i).hide();
  }

  //whenever a .title is clicked
  $(".title").on("click", function () {
    console.log(this.id);
    $("#" + this.id + " > img").toggleClass("active-chevron");
    $("#header-" + this.id).toggleClass("active-h2");
    $("#p" + this.id).toggle();
  });
});
