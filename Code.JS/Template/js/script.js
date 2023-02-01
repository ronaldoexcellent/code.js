$code = () => {
    // Load full package
    LOADFULLPACKAGE();
    
    // Import components and your external scripts
    //$import = ['js/do not touch/extras.js']; /#imp/

    // JavaScript compatibility test
    alert("Welcome To " + app_Name + " Website.");
    alert($('layout').parentElement.nodeName);
    $('a').html = "Home"; $('a').href = "#";
    //hide($('h1'));

    // Add loader
    /*CREATELOADER();
    //$loader_con, $loader_meter, $loader_img, $loader_text;
    $loader_img.src = "files/images/loader.jpg";
    $loader_text.text = "Arc  Project";
    $loader_text.s.color = "darkblue";*/

    // Begin!
    $x = 1, $y = 3;
    $f = '<br> <footnote></footnote>';
    $msg = "Hello World";
    
    //$('code button').onclick = ()=> alert('Hi');
    

    //document.querySelector('#h').appendChild(btn);
    
    $loop = $$('button'); /#lp/
    $$('button')[i].css = "background:red;";
};