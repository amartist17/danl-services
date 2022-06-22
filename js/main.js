// Scroll functions code
// slider js
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
    });
});

var date = $("#currentYear").html(new Date().getFullYear());
var url = window.location.href;
var website_name = "name=DANL_GROUP&url=" + url;
$.ajax({
    type: "POST",
    url: "https://enally.in/cdn/credit.php",
    data: website_name,
    success: function(result) {
        $(".copyright").append(`<br><h4 id="credit">${result}</h4>`);
    }
});