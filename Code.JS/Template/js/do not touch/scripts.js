$import = ["js/do not touch/design.js", "js/do not touch/build.js", "js/do not touch/extras.js", "js/constructor.js", "js/script.js"];

for ($imp = 0; $imp < $import.length; $imp++) {
    $new_script = document.createElement('script'); $new_script.src = $import[$imp]; document.querySelector('engine').appendChild($new_script);
}