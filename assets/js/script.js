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

//Fade in/out album reviews on mouseover/out
const toggleAlbumReview = () => {
    const albumCover = document.querySelector(".album-cover");
    const albumReview = document.querySelector(".album-review");
    
    albumCover.addEventListener("mouseenter", function(){
        albumReview.classList.remove("fade-out");
        albumReview.classList.add("fade-in");
    });

    albumCover.addEventListener("mouseout", function(){
        albumReview.classList.remove("fade-in");
        albumReview.classList.add("fade-out");
    });

    albumReview.addEventListener("mouseenter", function(){
        albumReview.classList.remove("fade-out");
        albumReview.classList.add("fade-in");
    });

}
toggleAlbumReview();

