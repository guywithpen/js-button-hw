var bubbles = []
var slider;
var bool

function setup() {
    bool = true; 
    slider = createSlider(0,360);
    createCanvas(400,400);
    
    button = select("#button");
    button.mousePressed(Stop);
    
    for(var i=0; i<10; i++) {
       bubbles.push(new Bubble(random(width),random(height),
         random(255),random(255),random(255)));
    }
}

function draw() {
    background('black');
    (slider.value(),100,100);
    for(var i = 0; i<10; i++) {
        if(bool == true){
            bubbles[i].move();
        }
            bubbles[i].display(); 
        }
}

function Bubble(x, y, r, g, b) {
    this.x = random(250);
    this.y = random(250);
    this.r = r;
    this.g = g;
    this.b = b;

    
this.display = function() {
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,50,50);
    
}

this.move = function() {
    this.x += random(-3,3);
    this.y += random(-3,3);

}
}


function Stop(){
if(bool == false){
    bool = true;
}else {
bool = false;
}
};
    
       