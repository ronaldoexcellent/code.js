// Declare variables [Optional]...
/* loader */
function addLoader() {
    $host = application;
    widgets.construct('div');
    widget.role = "page_loader", html(widget, '<img /><h1></h1><center /><meter min="0" value="0" max="100" />'), renderFirstPlace($host, widget);
    // $host.innerHTML = '<div role="page_loader"></div>' + $host.innerHTML;
    const loader = {
        con: $("[role=page_loader]"),
        img: $("[role=page_loader] img"),
        text: $("[role=page_loader] h1"),
        bar: $("[role=page_loader] meter"),
    };
    css(loader.con, "display:grid"), loader.img.src = application.getAttribute('logo'), html(loader.text, app.name);
    $load = setInterval(()=>{
        loader.bar.value++;
        if (loader.bar.value == 100) {
            clearInterval($load); loader.con.style.display = 'none';
        }
    }, 80);
}
