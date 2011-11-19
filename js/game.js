//global variables
var canvas;
var hero;
var stage;

window.onload = function () 
{
    canvas = document.getElementById('canvas');
    stage = new Stage(canvas);
    start();
}


// (re)-start game
function start() {
    hero = new Hero();
    stage.clear();
    Ticker.addListener(window);
}

function tick() {
    hero.tick();
    stage.update();
}


//Handle mouse events
addEventListener("mousedown", function (e) {
//logic goes here for mousedown
var mouseX = e.clientX;
var mouseY = e.clientY;
clicked(mouseX, mouseY);
}, false);

addEventListener("mouseup", function (e) {
//logic goes here for mouseup
}, false);

function clicked(x, y)
{
    var target = stage.getObjectUnderPoint(x, y);
    if (target) {
        //stage.removeChild(target);
        var score = document.getElementById('score');
        //score.innerText = parseInt(score.innerText)+1;
        }
}