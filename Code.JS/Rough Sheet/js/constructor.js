// Create widgets
code.read(()=>{
    alert($("layout").innerHTML);
// Header
widgets.select('button');
widget.innerHTML = "Hiii";
widget.innerHTML += "awa u??";
render(header, widget);
//widgets.swap('');

widgets.constructmultiple("h1", 3);
widget.className = "myheadings";
widget.innerHTML = "<h1>My app</h1>";
renderAll(header, widget);

// Nav
widgets.construct("a");
widget.innerHTML = "My app";
render(nav, widget);

// Main
widgets.construct("section");
widget.innerHTML = "<h1> Hello World </h1>";
render(main, widget);});