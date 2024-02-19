/*

# Design and Developed by enally.in and the Team.

*NOTE : Please work on this file only if you know javascript. Otherwise a small mistake an make things go wrong.

# WHAT CAN YOU DO HERE?
1. Change setting of homepage Carousel.
2. Mobile view navbar.
3. enable or disable console.log() message.
4. Call Back Form validation and backend connection.
5. Message form validation and backend Connection.
6. Change Youtube link.
7. Print page function


* MUST ADD THIS FILE (main.js) to each front-end page to make things functional.
* WITH THIS MUST ADD JQuery CDN in side head of each page


*/

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


// mobile view nav bar menu
$(".ham-burger").click(function() {
    $(".ham-burger").toggleClass("ham-burger-open");
    $(".nav-items").toggleClass("nav-open");
});

// Youtube Link
$(document).ready(function() {
    $("#youtube").click(function() {
        open('https://youtu.be/4ge-6IwzrQU', '_blank');
        // Change Youtube Link here...
    });
});


// Current year
var date = $("#currentYear").html(new Date().getFullYear());
var url = window.location.href;
var website_name = "name=DANL_GROUP&url=" + url;



// Request call back validation
callBack = () => {
    $("#response").html(" ");
    var phone = $("#phone").val();

    if (phone == "") {
        $("#response").html("Please Enter Your Number");
    } else if (isNaN(phone) == true) {
        $("#response").html("Please Enter a valid Number");
    } else if (phone.length > 10 || phone.length < 10) {
        $("#response").html("Phone number must be of 10 digits.");
    } else {
        $("#callBack").html("Wait...");

        $.ajax({
            url: "call_back.php",
            type: "POST",
            data: "phone=" + phone,

            success: function(result) {
                if (result == true) {
                    $("#response").html("Request sent successfully!");
                    $("#response").fadeOut(3000);
                } else {
                    $("#response").html(result); // replace this result with some fancy message. This message is meant for developer. Server may return some confidential data.
                }
            }
        });
    }
}


// message form validation
sendMessage = () => {
    $("#response_message").html(" ");
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == "" || email == "" || message == "") {
        $("#response_message").html("All fields are required!.");
    } else {
        $("#msgButton").html("Please Wait...");

        $.ajax({
            url: "send_message.php",
            type: "POST",
            data: "name=" + name + "&email=" + email + "&message=" + message,

            success: function(result) {
                if (result == true) {
                    $("#response_message").html("Message Sent successfully!");
                    $("#response_message").fadeOut(3000);

                    // Clearing all values
                    $("#name").val("");
                    $("#email").val("");
                    $("#message").val("");
                } else {
                    $("#response_message").html(result);
                    // replace this result with some fancy message. This message is meant for developer. Server may return some confidential data.
                }
            }
        });
    }
}

// Call me back button
$("#callBack").click(function() {
    callBack();
});

// Send message button
$("#msgButton").click(function() {
    sendMessage();
});

// Print Page button
$("#printPage").click(function() {
    window.print();
});