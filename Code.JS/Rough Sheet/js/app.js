code.read(()=>{
    alert("Welcome To " + app.name + ". Created by " + app.author + ". Copyright " + app.copyright);
    alert($('layout').parentElement.nodeName);
    alert(d.fullDate());

    // Players & Turns
    function turns(players, turn) {
        restrictAll($("#players"));

    } for (i = 0; i < $$(".roll").length; i++) {$$(".roll")[i].onclick = ()=> {restrictAll($("#players")); css($("#dice-board"), "transform:scale(0)"); unhide($("#dice-board"))}};

    // Create & add a random dice to the game from the images folder in files.
    // Red dice
    widgets.constructMultiple('img', 6);
    for (i = 0; i < widget.length; i++) {
        widget[i].src = "files/images/red dices/" + (i+1) + ".jpg", widget[i].classList.add('red'), widget[i].setAttribute('val', (i + 1));
    } renderFirstPlace($("#dice-board"), widget[randomize(widget)]);
    $die_1 = widget;
    // Assign to roll button
    $('#rbtn').addEventListener("click", ()=> {swap($(".red"), $die_1[randomize($die_1)])});

    // Blue dice
    widgets.constructMultiple('img', 6); for (i = 0; i < widget.length; i++) {
        widget[i].src = "files/images/blue dices/" + (i+1) + ".jpg", widget[i].classList.add('blue'), widget[i].setAttribute('val', (i + 1));
    } render($("#dice-board"), widget[randomize(widget)]);
    $die_2 = widget;
    // Assign to roll button
    $('#rbtn').addEventListener("click", ()=> {swap($(".blue"), $die_2[randomize($die_2)])});
    // _________________________________________________________________________

    // Calculate Points
    calcPoints();
    function calcPoints() {
        $points1 = $('.red').getAttribute('val');
        $points2 = $('.blue').getAttribute('val');
        $points = eval(parseInt($points1) + parseInt($points2) + parseInt($("#dice-board h3").innerHTML));
        $totalPoints = eval($points + parseInt($(".active").innerHTML));
        setTimeout(()=>{html($("#dice-board h3"), eval(Number($points)))}, 3000);
    }
    // Assign to roll button
    $('#rbtn').addEventListener("click", ()=> {calcPoints()});

    $('#hbtn').onclick = ()=> {
        hide($('#dice-board'));
        html($(".active").$('div h2'), $totalPoints);
        unrestrictAll($("#players"));
    };
    // Unhide buttons in dice-board
    setTimeout(()=>{unhide($('#rbtn')); unhide($('#hbtn'))}, 6000);
});