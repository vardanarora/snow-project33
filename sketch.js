const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,backgroundimg;

var snow = [];

function preload(){
  backgroundimg = loadImage("snow3.jpg");
}

function setup() {
  var canvas = createCanvas(displayWidth,displayHeight);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(displayWidth/2,displayHeight,displayWidth,20);
  
}

function draw() {
  imageMode(CENTER)
  image(backgroundimg,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
 Engine.update(engine);

if(frameCount%10===0){
  snow.push(new Snow(random(100,displayWidth),10));


}
for(var j = 0;j<snow.length;j++){
snow[j].display();
}


 ground.display();
}