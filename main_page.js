//Add this to the main script page of the Xerte Module

$.getScript('https://coo.erasmusmc.nl/xerte/js/xerte_erasmus.js');

function add_erasmus_home_button() {
    $("#x_pageControls").prepend('<button id="erasmus_home_button" class="x_home ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" role="button" aria-disabled="false" title="Home" aria-label="Home"><span class="ui-button-icon-primary ui-icon x_home"></span><span class="ui-button-text">Home</span></button>');
    $("#erasmus_home_button").click(function () {
        x_changePage(0);
    });
}

function setMenuDimensions() {
    $("div[aria-describedby=x_menu]").css({"top": `${$('#x_headerBlock').height()}px`})
    $("div[aria-describedby=x_menu]  #x_menu ").css({"height": `${$(window).outerHeight() - $('#x_headerBlock').outerHeight() - $('#x_footerBlock').outerHeight() - 10}px`});
    $("div[aria-describedby=x_menu] .ui-resizable-handle").remove();
}

function bind_erasmus_menu_events() {
    $(document).ajaxSuccess(function () {
        x_openDialog("menu");
        $("div[aria-describedby=x_menu]").removeClass('open');
        setMenuDimensions();
    });

    $('#x_menuBtn').click(function () {
        $("div[aria-describedby=x_menu]").toggleClass('open');
        setMenuDimensions();
    });
}

add_erasmus_home_button();
bind_erasmus_menu_events();
