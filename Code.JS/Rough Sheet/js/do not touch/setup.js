// HTML5, CSS3 & CSS Variables Suppport
// Do not add, remove, modify or change anything in this codes, except you have a full understanding of how it works.

// Start engine...
_start();

// Engine Build --
function _start() {
  function LOADFULLPACKAGE() {const app_Head = document.querySelector('head');  const app_Footnote = app.author + "<br> Code Developer <br> &copy; Copyright " + app.copyright + "."; if (document.querySelector('footnote')) {document.querySelector('footnote').innerHTML = app_Footnote;} const app_Attrib = [document.querySelector('meta').getAttribute('charset'), document.querySelector('meta-name').attributes, document.querySelector('meta-http-equiv').attributes]; document.querySelector('html').lang = "en"; const METADATA = "<meta charset='" + app_Attrib[0] + "' />"; app_Head.innerHTML += METADATA; for ($i = 0; $i < app_Attrib[1].length; $i++) { const METADATA = "<meta name='" + app_Attrib[1][$i].name + "' content='" + document.querySelector('meta-name').getAttribute(app_Attrib[1][$i].name) + "' />"; app_Head.innerHTML += METADATA; } for ($i = 0; $i < app_Attrib[2].length; $i++) { const METADATA = "<meta http-equiv='" + app_Attrib[2][$i].name + "' content='" + document.querySelector('meta-http-equiv').getAttribute(app_Attrib[2][$i].name) + "' />"; app_Head.innerHTML += METADATA; } const $app_extras = () => {app_Head.innerHTML = "<meta name='application-name' content='" + app.name + "' />" + app_Head.innerHTML; app_Head.innerHTML += '<meta name="copyright" content="' + app.copyright + '" /> <title></title> <link rel="icon" type="image/x-icon" href="' + application.getAttribute('logo') + '" /> <style> @import url("css/components/root.css"); </style>'; document.querySelector('title').textContent = app.name; const insert = document.querySelectorAll('js'); for (i = 0; i < insert.length; i++) { insert[i].innerHTML = eval(insert[i].innerHTML);} application.removeChild(application.querySelector('data'));}; setTimeout($app_extras);} LOADFULLPACKAGE();
    // Control page data & functionality...
//_________________________________________________________________________________________________ 
/*...................................................................................................
                      Break
                      ____   ____   _____
                      |   |  |   |  |         /\    | /
                      |___|  |___|  |____    /__\   |/
                      |   |  | \    |       /    \  |\
                      |___|  |   \  |____  /      \ | \
...................................................................................................*/
};