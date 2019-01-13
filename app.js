hideAndShowContent("homepage");

//JSON data downloading
$.getJSON("Medgadget.json", (data) => {
    buildContent(data.Medgadget, "#medgadget-wrapper");
});

$.getJSON("Speckyboy.json", (data) => {
    buildContent(data.Speckyboy, "#speckyboy-wrapper");
});

//click handlers for tab changing
$("#click-handler-home").click((e) => {
    hideAndShowContent("homepage", e);
});

$("#click-handler-medgadget").click((e) => {
   hideAndShowContent("medgadget", e); 
});

$("#click-handler-speckyboy").click((e) => {
   hideAndShowContent("speckyboy", e); 
});

$("#click-handler-contact").click((e) => {
    hideAndShowContent("contact", e);
});

//content buidling function for Medgadget & Speckyboy tabs
function buildContent (data, appendName) {
    $.each(data, (index, item) => {
        var contentdiv = $("<div/>").addClass("row align-items-center content").appendTo(appendName);
        var imgdiv = $("<div/>").addClass("col-md-6").appendTo(contentdiv);
        var datadiv1 = $("<div/>").addClass("col-md-6 text-center").appendTo(contentdiv);
        var datadiv2 = $("<div/>").addClass("row justify-content-center").appendTo(datadiv1);
        var datadiv3 = $("<div/>").addClass("col-10 col-lg-8 about my-5 mb-md-0").appendTo(datadiv2);
        var img = "<img src='" + item.thumbnail + "' class='img-fluid'>";
        $(img).appendTo(imgdiv);
        var title = "<h2>" + item.title + "</h2>";
        $(title).appendTo(datadiv3);
        var text = "<p class='lead'>" + item.text + "</p>";
        $(text).appendTo(datadiv3);
        var link = "<a href='" + item.articleURL + "'>read more</a>";
        $(link).appendTo(datadiv3);
    });
}

//navbar animation
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

//tab changing logic
function hideAndShowContent (clickedTab, event = false) {
    const wrappers = new Map([
        ["homepage", "#home-page-wrapper"],
        ["medgadget", "#medgadget-wrapper"],
        ["speckyboy", "#speckyboy-wrapper"],
        ["contact", "#contact-wrapper"]
    ]);
    if (event){
        event.preventDefault();
    }
    for (var [key, value] of wrappers) {
        if (key == clickedTab){
            $(value).show();
        } else {
            $(value).hide();
        }
    }
}