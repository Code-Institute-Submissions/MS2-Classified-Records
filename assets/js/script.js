//Scroll to top button
var btn = $("#button");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop:0}, "300");
});

//Form submit modal
$("#contact-form").on("submit", function(e){
  $("#confirmModal").modal("show");
  e.preventDefault();
});

//Form reset on submit
document.getElementById("contact-form").addEventListener("submit", resetForm);

function resetForm() {
    document.getElementById("contact-form").reset();
}