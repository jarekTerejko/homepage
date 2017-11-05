var settings = {
    toggle: "#nav-icon", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
    exit_selector: ".slider-exit", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
    animation_duration: "0.5s", //how long it takes to slide the menu
    place: "left", //where is the menu sliding from, possible options are (left | right | top | bottom)
    animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
    body_slide: true, //set it to true if you want to use the effect where the entire page slides and not just the div
    no_scroll: true, //set to true if you want the scrolling disabled while the menu is active
    auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
};

$(document).ready(function () {
    $('.left-menu').sliiide({
        place: 'left',
        toggle: '#nav-icon',
        exit_selector: '.left-exit',
        auto_close: true
    });


    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    $('#contact-btn').click(function () {
        $('.contact-content').toggle(500);
    });
});

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}
