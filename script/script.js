//Adding the title of a card to the cart when you click its button
$(document).ready(function() {
    $(".addCart").click (function() {
        $("#cartText").append("<br>" + $(this).prev().prev().text() + '.........' + $(this).prev().text());

    });


});