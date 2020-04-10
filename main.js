var x = document.getElementById("page-top");
const handler =  function play(event){
    ballon_font = document.getElementById( 'ballon');
    var fontSize = parseFloat(window.getComputedStyle(ballon_font, null).getPropertyValue('font-size'));

    if (fontSize > 0 && fontSize < 60) {
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
        var keyCode = ('which' in event) ? event.which : event.keyCode;
        if (keyCode == 73) {
            fontSize += 10;
            ballon_font.style.fontSize = (fontSize) + 'px';
        }
        else if (keyCode == 68) {
            fontSize -= 10;
            ballon_font.style.fontSize = (fontSize) + 'px';
        }
    }
    else {
        ballon_font.style.fontSize = (30) + 'px';
        if (fontSize >= 60){
            removeHandler();
            ballon_font.innerHTML = "💥";
        }
        else {
            removeHandler();
            ballon_font.innerHTML = "Done";
        }
    }
}

if (x.addEventListener) {
    x.addEventListener("keyup", handler);
} else if (x.attachEvent) {
    x.attachEvent("keyup", handler);
}

function removeHandler() {
    if (x.removeEventListener) {
        x.removeEventListener("keyup", handler);
    } else if (x.detachEvent) {
        x.detachEvent("keyup", handler);
    }
}