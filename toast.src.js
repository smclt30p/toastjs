
/* Static constants */

const FADE_OUT_ATTR = " fadeout";
const FADE_IN_ATTR = " fadein";
const TOAST_LONG = 3500;
const TOAST_SHORT = 2000;

var toasts = [];
var displaying = false;

function Toast(text, length) {
    this.text = text;
    this.length = length;
};

Toast.prototype.getText = function() {
    return this.text;
};

Toast.prototype.getLength = function() {
    return this.length;
};

function showToast(text, length) {
   toasts.push(new Toast(text, length));
   if (displaying) return;
   displayToast(toasts.pop());
   displaying = true;
};

function displayToast(tst) {

    var toast = document.createElement("div");

    toast.className = "toast";
    toast.id = "maintoast";
    toast.innerHTML = "<p>" + tst.getText() + "</p>";
    toast.style.opacity = "0";

    fadeInElement(toast);

    document.body.appendChild(toast);
    
    setTimeout(function() {

        fadeOutElement(toast);

        if (toasts.length != 0) {
            displayToast(toasts.pop());
        } else {
            displaying = false;
        };

        toast.addEventListener("animationend", function() {
            toast.remove();
        });

    }, tst.getLength());


};

function fadeOutElement(element) {
    swapClasses(element, FADE_IN_ATTR, FADE_OUT_ATTR);
};

function fadeInElement(element) {
    swapClasses(element, FADE_OUT_ATTR, FADE_IN_ATTR);
};

function swapClasses(element, oldAttr, newAttr) {

    var classes = element.className;

    if (stringContains(classes, oldAttr))
        classes = classes.replace(oldAttr, "");

    if (stringContains(classes, newAttr)) 
        return;

    element.className = classes += newAttr;

};

function stringContains(str1, str2) {
    return str1.indexOf(str2) !== -1;
};
