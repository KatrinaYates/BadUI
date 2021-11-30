$(document).ready(function() {
    $(".addCart").click (function() {
        $("#cartText").append("<br>" + $(this).prev().prev().text() + '.........' + $(this).prev().text());

    });


});