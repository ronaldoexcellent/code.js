for ($imp = 0; $imp < $scripts.length; $imp++) {
    $new_script = document.createElement('script'); $new_script.src = "js/" + $scripts[$imp]; document.querySelector('engine').appendChild($new_script);
}