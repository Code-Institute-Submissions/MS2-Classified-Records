//Scroll to top button
var btn = $("#button");

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});

//Form submit modal
$("#contact-form").on("submit", function (e) {
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
    const albumCovers = document.querySelectorAll(".album-cover");
    const albumReviews = document.querySelectorAll(".album-review");

    albumCovers.forEach((album, albumIndex) => {
        //apply fade-in, remove fade-out style class to active review
        const activeReview = albumReviews[albumIndex];

        album.addEventListener("mouseenter", function () {
            activeReview.classList.remove("fade-out");
            activeReview.classList.add("fade-in");
        });

        album.addEventListener("mouseleave", function () {
            activeReview.classList.remove("fade-in");
            activeReview.classList.add("fade-out");
        });

        activeReview.addEventListener("mouseenter", function () {
            activeReview.classList.remove("fade-out");
            activeReview.classList.add("fade-in");
        });

        activeReview.addEventListener("mouseenter", function () {
            activeReview.classList.remove("fade-out");
            activeReview.classList.add("fade-in");
        });
    });
};

toggleAlbumReview();
