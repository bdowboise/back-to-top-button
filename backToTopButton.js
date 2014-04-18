//back to top button appear/disappear
$('<button id="backToTop" type="button" class="btn btn-sm"><span class="glyphicon glyphicon-chevron-up"></span></button>')
    .appendTo('body')
    .addClass('hide');
//back to top button functionality
$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 200) {
        $('#backToTop').removeClass('hide');
    }
    else {
        $('#backToTop').addClass('hide');
    }
});