const dot = ".";const HTML_ATTRIB = ['abort', 'afterprint', 'animation', 'before', 'blur', 'canplay', 'change', 'click', 'contextmenu', 'copy', 'cut', 'dblclick', 'drag', 'drop', 'durationchange', 'ended', 'error', 'focus', 'fullscreen', 'hashchange', 'input', 'invalid', 'key', 'load', 'message', 'mouse', 'offline', 'online', 'open', 'page', 'paste', 'pause', 'play', 'popstate', 'progress', 'ratechange', 'resize', 'reset', 'scroll', 'search', 'seek', 'select', 'show', 'stalled', 'storage', 'submit', 'suspend', 'timeupdate', 'toggle', 'touch', 'transition', 'unload', 'volumechange', 'waiting', 'wheel']; const q = (elem) => {return document.querySelector(elem)};const qA = (elem) => {return document.querySelectorAll(elem);}; $code; $g = $code.toString(); $gs = $g.slice($g.indexOf("{") + 1, $g.lastIndexOf("}")); $gs = $gs.replaceAll('.html', '.innerHTML'); $gs = $gs.replaceAll('.text = ', '.innerText = '); /* Boolean */ $gs = $gs.replaceAll(' /t', ' = true'); $gs = $gs.replaceAll(' /f', ' = false'); /* Size */ $gs = $gs.replaceAll(' /ht', '.height');  $gs = $gs.replaceAll(' /wt', '.width'); /* Functionality */ $gs = $gs.replaceAll(' /d', '.disabled'); /* style */ $gs = $gs.replaceAll('.s.', '.style.'); $gs = $gs.replaceAll('.css', '.style.cssText'); /* Clipboard */ $gs = $gs.replaceAll(' /c', '.copy'); $gs = $gs.replaceAll(' /x', '.cut'); $gs = $gs.replaceAll(' /v', '.paste'); $gs = $gs.replaceAll(' /z', '.undo'); /* Looop */$gs = $gs.replaceAll('/#lp/', 'for (i = 0; i < $loop.length; i++) '); /* Animate */ $gs = $gs.replaceAll('/#anim/', '$Count = 0; _auto_slide(); function _auto_slide() {for (i in $animate) {for (let A in $animate[i].children) {$animate[i].children[A].hidden = true;} $Count++; if ($Count > $animate[i].children.length) { $Count = 1; } $animate[i].children[$Count - 1].hidden = false;} } '); /* Triple Click */ $gs = $gs.replaceAll('/#t_clk/', 'x = 0; $tripleclick.onclick = () => {x++; t_clk; $t_clk = t_clk.toString(); $t_cl = $t_clk.slice($t_clk.indexOf("{") + 1, $t_clk.lastIndexOf("}")); if (x == 3) {eval($t_cl)} setTimeout(function() {x = 0}, 700)}'); /* Import */ $gs = $gs.replaceAll('/#imp/', "for ($imp = 0; $imp < $import.length; $imp++) {$new_script = document.createElement('script'); $new_script.src = $import[$imp]; document.querySelector('engine').appendChild($new_script)}"); /* Print Error */ //const check = (err)=> {try {err} catch (e) {}}
for (const m in HTML_ATTRIB) { $gs = $gs.replaceAll(dot + HTML_ATTRIB[m], dot + 'on' + HTML_ATTRIB[m]); } eval($gs);