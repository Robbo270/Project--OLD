var WidthRect = 70;
var heightRect = 70;
var particles = [];

var sketch1 = function(p) {

    p.setup = function() {
    
    cursor(CROSS,32,32)

    var canvas = createCanvas(1200,1000);

    canvas.parent("sketch1");

    background(0)

    }

    function draw() {

    }

    let colorPicker;

    function setup(){

        myColor =  createColorPicker(color(0));

    createCanvas(80, 80);

    colorPicker = createColorPicker('#808080');

    colorPicker.position(50, height);

    //I added another color picker and this one is for the cursor
    myColor.position(100, height);

    cursor(CROSS,32,32)

        var canvas = createCanvas(innerWidth,innerHeight-100);

        canvas.parent("p5container");

        //replaced background(0) with this
        background(80,80,80);

    }

    function draw() {

        //removed background from here

        if(mouseIsPressed === true){

            fill(myColor.color());

            noStroke();

        ellipseMode(CENTER)

        ellipse(mouseX, mouseY, 50);

        }

    }

    function mousePressed() {

        if(mouseButton == LEFT){

            fill(myColor.color());

        ellipseMode(CENTER)

        ellipse(mouseX, mouseY, WidthRect, heightRect);

        }

    }

    

    function keyPressed() {

        if(keyCode == ENTER){

            //replaced background(0) with this, now every time user picks a new colour and press enter the background will change
            background(colorPicker.color());

        }

        if(key === 's'){

            saveCanvas('myCanvas', 'jpg');

        }

    }

}