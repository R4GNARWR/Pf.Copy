$(document).ready(function() {

    var nice = $("html").niceScroll();  // The document page (body)

    $(".overview__grid").niceScroll({
        cursorborder:"",cursorcolor:"#00F",
        oneaxismousemode: false,
        touchbehavior: true,
        autohidemode: false,
        preventmultitouchscrolling: false,
        cursordragontouch: true,
        cursordragspeed: '.1',
    }); // First scrollable DIV

});