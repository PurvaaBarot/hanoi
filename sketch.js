var bgImg,bgImg2;

function preload(){
    bgImg=loadImage("bg img.jpg");
}

function setup(){
createCanvas(windowWidth,windowHeight);

}

function draw(){
background(bgImg);
textSize(100);
textFont("Segoe Print");
fill("#FAC606");
stroke("black");
strokeWeight(5);
text("Tower of Hanoi",windowWidth/2-400,windowHeight/2-50);

textSize(40);
strokeWeight(4);
textFont("Segoe Print");
fill("#FAC606");
text("  Keep Challenging yourself, take this challenge to solve hanoi's tower ",windowWidth/2-700,windowHeight/2);

textSize(40);
strokeWeight(4);
textFont("Segoe Print");
fill("#FAC606");
text("Ready to take the challenge?? ",windowWidth/2-300,windowHeight/2+50);

}