// HTML5, CSS3 & CSS Variables Suppport
// Do not add, remove, modify or change anything in this codes, except you have a full understanding of how it works.

// Start engine...
_start();

// Engine Build --
function _start() {
  try {
    const HTML_ATTRIB = ['abort', 'afterprint', 'animation', 'before', 'blur', 'canplay', 'change', 'click', 'contextmenu', 'copy', 'cut', 'dblclick', 'drag', 'drop', 'durationchange', 'ended', 'error', 'focus', 'fullscreen', 'hashchange', 'input', 'invalid', 'key', 'load', 'message', 'mouse', 'offline', 'online', 'open', 'page', 'paste', 'pause', 'play', 'popstate', 'progress', 'ratechange', 'resize', 'reset', 'scroll', 'search', 'seek', 'select', 'show', 'stalled', 'storage', 'submit', 'suspend', 'timeupdate', 'toggle', 'touch', 'transition', 'unload', 'volumechange', 'waiting', 'wheel']; const dot = "."; const app = document.querySelector('application'); const app_Name = app.getAttribute('name'); const app_Logo = "<img id='sitelogo' src='" + app.getAttribute('logo') + "' />"; const app_Head = document.querySelector('head');const $ = (elem) => {return document.querySelector(elem)}; const $$ = (elem) => {return document.querySelectorAll(elem);}; function LOADFULLPACKAGE() {const app_Author = document.querySelector('meta-name').getAttribute('author'); const app_Copyright = document.querySelector('meta-name').getAttribute('copyright'); const app_Footnote = app_Author + "<br> Code Developer <br> &copy; Copyright " + app_Copyright + dot; if (document.querySelector('footnote')) {document.querySelector('footnote').innerHTML = app_Footnote;} const app_Attrib = [document.querySelector('meta').getAttribute('charset'), document.querySelector('meta-name').attributes, document.querySelector('meta-http-equiv').attributes]; document.querySelector('html').lang = "en"; const METADATA = "<meta charset='" + app_Attrib[0] + "' />"; app_Head.innerHTML += METADATA; for ($i = 0; $i < app_Attrib[1].length; $i++) { const METADATA = "<meta name='" + app_Attrib[1][$i].name + "' content='" + document.querySelector('meta-name').getAttribute(app_Attrib[1][$i].name) + "' />"; app_Head.innerHTML += METADATA; } for ($i = 0; $i < app_Attrib[2].length; $i++) { const METADATA = "<meta http-equiv='" + app_Attrib[2][$i].name + "' content='" + document.querySelector('meta-http-equiv').getAttribute(app_Attrib[2][$i].name) + "' />"; app_Head.innerHTML += METADATA; } $app_extras = () => {app_Head.innerHTML = "<meta name='application-name' content='" + app_Name + "' />" + app_Head.innerHTML; app_Head.innerHTML += '<title></title> <style> @import url("css/root.css"); </style>'; document.querySelector('title').textContent = app_Name; var insert = document.querySelectorAll('js'); for (i = 0; i < insert.length; i++) { insert[i].innerHTML = eval(insert[i].innerHTML);} app.removeChild(app.querySelector('data'));}; setTimeout($app_extras); /* Visibility State */ const hide = (obj) => {return obj.hidden = true;}; const del = (obj) => {return obj.remove();}; /* Positioning */ const popup = (obj) => {obj.style.cssText = "position:fixed"}; /* Import */ const $import = (script) => {document.querySelector('engine').appendChild(script);}; /* Random */ const randomize = (obj) => {return Math.floor(Math.random() * obj);}; /* Trace & Untrace Elements */ const trace = ($trace) => {$trace.style.border = "4px solid purple"; for (_tC = 0; _tC < $trace.children.length; _tC++) {$trace.children[_tC].style.cssText = "outline: 4px solid red; border: 4px solid green;"}}; const untrace = ($trace) => {$trace.style.border = "0"; for (_tC in $trace.children) { $trace.children[_tC].style.outline = "0"; $trace.children[_tC].style.border = "0"; }}; /* Page Switcher */ function switch_page($id, $pages_class) {const cc = document.getElementsByClassName($pages_class); for (_i = 0; _i < cc.length; _i++) {cc[_i].style.display = 'none'} document.getElementById($id).style.display = 'block'; $GET_PAGE_TITLE = document.querySelector('title'); $GET_PAGE_TITLE.innerHTML = $id + " - " + app_Name;} /* Audio Callback */ function voice_output($txt) {const v_OP = new SpeechSynthesisUtterance(); v_OP.lang = 'en'; v_OP.pitch = '2'; v_OP.rate = '0.5'; v_OP.volume = '1'; v_OP.text = $txt; window.speechSynthesis.speak(v_OP);} };
    // Control page data & functionality...
//_________________________________________________________________________________________________ 
    const run = () => {
      // Declare variables [Optional]...
      /* loader */ function CREATELOADER() {$loader_host = document.querySelector('application'); $loader_pack = '<div role="loader_con"><img role="loader_image" src="" /><h1 role="loader_text"></h1><meter min="0" value="0" max="100"></meter></div>'; $loader_host.innerHTML = $loader_pack + $loader_host.innerHTML; $loader_con = document.querySelector("[role=loader_con]"); $loader_img = document.querySelector("[role=loader_image]"); $loader_text = document.querySelector("[role=loader_text]"); $loader_meter = document.querySelector("[role=loader_con] meter"); $loader_con.style.transition = '1s'; $load = setInterval(()=>{$loader_meter.value++; if ($loader_meter.value == 100) {clearInterval($load); $loader_con.style.display = 'none';}}, 80);}

      let x = 0; x++;
/*...................................................................................................
                      Break
                      ____   ____   _____
                      |   |  |   |  |         /\    | /
                      |___|  |___|  |____    /__\   |/
                      |   |  | \    |       /    \  |\
                      |___|  |   \  |____  /      \ | \
...................................................................................................*/

      $code; /* Content */ $g = $code.toString(); $gs = $g.slice($g.indexOf("{") + 1, $g.lastIndexOf("}")); $gs = $gs.replaceAll('.html', '.innerHTML'); $gs = $gs.replaceAll('.text = ', '.innerText = '); /* Boolean */ $gs = $gs.replaceAll(' /t', ' = true'); $gs = $gs.replaceAll(' /f', ' = false'); /* Size */ $gs = $gs.replaceAll('.ht', '.height');  $gs = $gs.replaceAll('.wt', '.width'); /* Functionality */ $gs = $gs.replaceAll(' /d', '.disabled'); /* style */ $gs = $gs.replaceAll('.s.', '.style.'); $gs = $gs.replaceAll('.css', '.style.cssText'); /* Clipboard */ $gs = $gs.replaceAll(' /c', '.copy'); $gs = $gs.replaceAll(' /x', '.cut'); $gs = $gs.replaceAll(' /v', '.paste'); $gs = $gs.replaceAll(' /z', '.undo'); /* Looop */$gs = $gs.replaceAll('/#lp/', 'for (i = 0; i < $loop.length; i++) '); /* Animate */ $gs = $gs.replaceAll('/#a/', '$Count = 0; _auto_slide(); function _auto_slide() {for (i in $animate) {for (let A in $animate[i].children) {$animate[i].children[A].hidden = true;} $Count++; if ($Count > $animate[i].children.length) { $Count = 1; } $animate[i].children[$Count - 1].hidden = false;} } '); /* Triple Click */ $gs = $gs.replaceAll('/#t_clk/', 'x = 0; $tripleclick.onclick = () => {x++; t_clk; $t_clk = t_clk.toString(); $t_cl = $t_clk.slice($t_clk.indexOf("{") + 1, $t_clk.lastIndexOf("}")); if (x == 3) {eval($t_cl)} setTimeout(function() {x = 0}, 700)}'); /* Import */ $gs = $gs.replaceAll('/#imp/', "for ($imp = 0; $imp < $import.length; $imp++) {$new_script = document.createElement('script'); $new_script.src = $import[$imp]; document.querySelector('engine').appendChild($new_script)}"); /* Print Error */ //const check = (err)=> {try {err} catch (e) {}}
      for (const m in HTML_ATTRIB) { $gs = $gs.replaceAll(dot + HTML_ATTRIB[m], dot + 'on' + HTML_ATTRIB[m]); } eval($gs);
    };

    setTimeout(run);
  }

  catch (err) { 
    console.log(err)
  }
}