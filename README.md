# Android's toast mechanisn for the browser
![TOAST](http://i.imgur.com/AwfVcw9.png)
##### How to use:

1) Include it into the page
```html
<link href="toast.css" rel="stylesheet" type="text/css"/>
<script src="toast.js" type="text/javascript"></script>`
```
2) Keep calling toast.js
```javascript
showToast("This is a toast", TOAST_LONG);
showToast("This is another toast", TOAST_SHORT);
```
3) Include Googe's Roboto Condensed (optional)
```html
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed"rel="stylesheet">
```

Toast.js keeps an internal stack of toasts, so feel free to just keep invoking new toasts they won't overlap.

For examples see main.js and demo.html
The timers:
```javascript
const TOAST_LONG = 3500;
const TOAST_SHORT = 2000;
```
Refer to `Releases` for compressed versions of the scripts.
