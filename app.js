//navbar animation
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$("#medgadget-wrapper").children().hide();
$("#speckyboy-wrapper").children().hide();
$("#contact-wrapper").children().hide();

$.getJSON("Medgadget.json", (data) => {
    $.each(data.Medgadget, (index, item) => {
        var medimg = "<img src='" + item.thumbnail + "'>";
        $(medimg).appendTo("#medgadget-img");
        var medtitle = "<h2>" + item.title + "</h2>";
        $(medtitle).appendTo("#medgadget-data");
        var medtext = "<p>" + item.text + "</p>";
        $(medtext).appendTo("#medgadget-data");
        var medlink = "<a href='" + item.articleURL + "'>read more</a>";
        $(medlink).appendTo("#medgadget-data");
    });
});

$.getJSON("Speckyboy.json", (data) => {
    $.each(data.Speckyboy, (index, item) => {
        var speckimg = "<img src='" + item.thumbnail + "'>";
        $(speckimg).appendTo("#speckyboy-img");
        var speckytitle = "<h2>" + item.title + "</h2>";
        $(speckytitle).appendTo("#speckyboy-data");
        var speckytext = "<p>" + item.text + "</p>";
        $(speckytext).appendTo("#speckyboy-data");
        var speckylink = "<a href='" + item.articleURL + "'>read more</a>";
        $(speckylink).appendTo("#speckyboy-data");
    });
});

$("#click-handler-medgadget").click((e) => {
    e.preventDefault();
    $("#home-page-wrapper").children().hide();
    $("#speckyboy-wrapper").children().hide();
    $("#medgadget-wrapper").children().show();
});

$("#click-handler-speckyboy").click((e) => {
    e.preventDefault();
    $("#home-page-wrapper").children().hide();
    $("#medgadget-wrapper").children().hide();
    $("#speckyboy-wrapper").children().show();
});