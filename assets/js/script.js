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
    $("#albumCover1").mouseenter(function () {
        $("#albumReview1").addClass("fade-in");
        $("#albumReview1").removeClass("fade-out");
    });

    $("#albumCover1").mouseleave(function () {
        $("#albumReview1").addClass("fade-out");
        $("#albumReview1").removeClass("fade-in");
    });

    $("#albumCover2").mouseenter(function () {
        $("#albumReview2").addClass("fade-in");
        $("#albumReview2").removeClass("fade-out");
    });

    $("#albumCover2").mouseleave(function () {
        $("#albumReview2").addClass("fade-out");
        $("#albumReview2").removeClass("fade-in");
    });

    $("#albumCover3").mouseenter(function () {
        $("#albumReview3").addClass("fade-in");
        $("#albumReview3").removeClass("fade-out");
    });

    $("#albumCover3").mouseleave(function () {
        $("#albumReview3").addClass("fade-out");
        $("#albumReview3").removeClass("fade-in");
    });

    $("#albumReview1").mouseenter(function () {
        $("#albumReview1").addClass("fade-in");
        $("#albumReview1").removeClass("fade-out");
    });

    $("#albumReview2").mouseenter(function () {
        $("#albumReview2").addClass("fade-in");
        $("#albumReview2").removeClass("fade-out");
    });

    $("#albumReview3").mouseenter(function () {
        $("#albumReview3").addClass("fade-in");
        $("#albumReview3").removeClass("fade-out");
    });
};

toggleAlbumReview();
