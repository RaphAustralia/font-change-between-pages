///create initialiser for font
fontSizeCookie = "font-size";
function initialise() {
    element = document.getElementById("main-text");//global variable
    var fontSize = getCookie(fontSizeCookie);
    console.log(fontSize);
    if (fontSize != "") {
        setFontSize(element, fontSize);
    }
}


function setFontSize(element, size) {
    element.style.fontSize = size + 'px';
    setCookie(fontSizeCookie, fontSize,9999);
}

function getFontSize(element) {
    var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    return fontSize;
}

function increaseFont() {
    fontSize = getFontSize(element);
    fontSize += 1;
    setFontSize(element, fontSize);
}

function decreaseFont() {
    fontSize = getFontSize(element);
    fontSize -= 1;
    setFontSize(element, fontSize);
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}