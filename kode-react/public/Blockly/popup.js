let shadow = $('<div id="shadowElem"></div>');
let speed = 1000;
$(document).ready(function() {
    $('body').prepend(shadow);
});

$(window).on('load', function() {
    screenHeight = $(window).height();
    screenWidth = $(window).width();
    elemWidth = $('#dropElem').outerWidth(true);
    elemHeight = $('#dropElem').outerHeight(true);

    leftPosition = (screenWidth / 2) - (elemWidth / 2);
    topPosition = (screenHeight / 2) - (elemHeight / 2);

    $('#dropElem').css({
        'left' : leftPosition + 'px',
        'top' : -elemHeight + 'px'
    });
    $('#dropElem').show().animate({
        'top' : topPosition
    }, speed);

    shadow.animate({
        'opacity' : 0.7
    }, speed);

    $('#dropClose').click( function() {
        shadow.animate({
            'opacity' : 0
        }, speed);
        $('#dropElem').animate({
            'top' : -elemHeight + 'px'
        }, speed, function() {
            shadow.remove();
            $(this).remove();
        });

    });
});