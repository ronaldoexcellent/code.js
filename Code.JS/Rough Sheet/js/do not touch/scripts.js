$import = ["do not touch/app.js", "do not touch/layout.js", "do not touch/build.js", "do not touch/functions.js", "do not touch/extras.js", "do not touch/terminal-config.js", "constructor.js", "script.js"];

for ($imp = 0; $imp < $import.length; $imp++) {
    $new_script = document.createElement('script'); $new_script.src = "js/" + $import[$imp]; document.querySelector('engine').appendChild($new_script);
}