//Add this to the main script page of the Xerte Module

function setMenuDimensions(){
    $("div[aria-describedby=x_menu]").css({"top":`${$('#x_headerBlock').height()}px`})
    $("div[aria-describedby=x_menu]  #x_menu ").css({"height":`${$(window).outerHeight()-$('#x_headerBlock').outerHeight()-$('#x_footerBlock').outerHeight()-10}px`});
    $("div[aria-describedby=x_menu] .ui-resizable-handle").remove();
}

$(document).ajaxSuccess(function() {
    x_openDialog("menu");
    $("div[aria-describedby=x_menu]").removeClass('open');
    setMenuDimensions();
});


$('#x_menuBtn').click(function(){
    $("div[aria-describedby=x_menu]").toggleClass('open');
    setMenuDimensions();
});