(function(window) {


function Hero() {
    this.initialize();
}

//Inherit from EaselJS.container
var p = Hero.prototype = new Container();

//public properties:
    Hero.HEALTH = 10;

    // location
    p.vX;
    p.vY;
    
    // collision
    p.bounds;
    p.hit;
    
    // graphics
    p.img;
    p.sheet;
    p.seq;
        
    p.alive;

//constructor:
    p.Container_initialize = p.initialize; // unique to avoid overiding base class

    p.initialize = function() {
        this.Container_initialize();
        
        p.alive = true;
        
        p.img = new Image();
        //p.img.src = "images/blah.png";
        this.img.onload = loadAnimation;

    }
    
    
    function loadAnimation() 
    {
        p.sheet = new SpriteSheet(
            this,
            35,
            20,
            {
                walk: [0, 4]
            });

        p.seq = new BitmapSequence(p.sheet);
        p.seq.regX = p.seq.spriteSheet.frameWidth/2|0;
        p.seq.regY = p.seq.spriteSheet.frameHeight/2|0;
        p.seq.name = "?";
        p.seq.speed = 1;
        p.seq.x = 0;
        p.seq.y = 0;
        p.seq.currentFrame = 0;
        p.seq.gotoAndPlay("?");
    
        window.stage.addChild(p.seq);
    }
    
    p.tick = function() {
        if (this.alive) {
                //do things
            } else {
                //end game
        }
    }

window.Hero = Hero;
}(window));