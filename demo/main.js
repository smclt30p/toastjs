
/* Main application logic */

addOnClickListener(document.getElementById("test"), function() {

    showToast("This is a toast", TOAST_LONG);
    showToast("This is another toast", TOAST_LONG);

});

function addOnClickListener(element, listener) {
    if (listener == null) 
        console.error("Declare listener before assigning one to \"" + element.id + "\"");
    element.onclick = listener;
}

