'use strict';

giftPortalApp.directive('ngNovScrollButton', function() {
  return function(scope, element, attrs) {
    var step = element.width() + 30;

    var scrolling = false;
    // Wire up events for the 'scrollUp' link:
    $("#scrollLeft").bind("click", function(event) {
        event.preventDefault();
        // Animates the scrollTop property by the specified
        // step.
        element.animate({
            scrollLeft: "-=" + step + "px"
        });
    }).bind("mouseover", function(event) {
        scrolling = true;
        scrollContent("left");
    }).bind("mouseout", function(event) {
        scrolling = false;
    });


    $("#scrollRight").bind("click", function(event) {
        event.preventDefault();
        element.animate({
            scrollLeft: "+=" + step + "px"
        });

    }).bind("mouseover", function(event) {
        scrolling = true;
        scrollContent("right");
    }).bind("mouseout", function(event) {
        scrolling = false;
    });

    function scrollContent(direction) {
        var amount = (direction === "left" ? "-=10px" : "+=10px");
        element.animate({
            scrollTop: amount
        }, 1, function() {
            if (scrolling) {
                scrollContent(direction);
            }
        });
    }
  };
});
