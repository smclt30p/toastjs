function Toast(a,b){this.text=a,this.length=b}function showToast(a,b){toasts.push(new Toast(a,b)),displaying||(displayToast(toasts.pop()),displaying=!0)}function displayToast(a){var b=document.createElement("div");b.className="toast",b.id="maintoast",b.innerHTML="<p>"+a.getText()+"</p>",b.style.opacity="0",fadeInElement(b),document.body.appendChild(b),setTimeout(function(){fadeOutElement(b),b.addEventListener("animationend",function(){b.remove(),0!=toasts.length?displayToast(toasts.pop()):displaying=!1})},a.getLength())}function fadeOutElement(a){swapClasses(a,FADE_IN_ATTR,FADE_OUT_ATTR)}function fadeInElement(a){swapClasses(a,FADE_OUT_ATTR,FADE_IN_ATTR)}function swapClasses(a,b,c){var d=a.className;stringContains(d,b)&&(d=d.replace(b,"")),stringContains(d,c)||(a.className=d+=c)}function stringContains(a,b){return a.indexOf(b)!==-1}const FADE_OUT_ATTR=" fadeout",FADE_IN_ATTR=" fadein",TOAST_LONG=3500,TOAST_SHORT=2e3;var toasts=[],displaying=!1;Toast.prototype.getText=function(){return this.text},Toast.prototype.getLength=function(){return this.length};