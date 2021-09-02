var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var leaf, leafImg
var orange, orangeImg
var red, redImg
var random

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  leafImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}

function draw() {
  background(0);
  rabbit.x=mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  //leaves();
  //orangeLeaves();
  //redLeaves();
  //apples();
spawn()
  
  

  drawSprites();
  
}

function spawn() {
  if(frameCount % 80 === 0) {
    var create=Math.round(random(1,2))
    if(create==1){
      orangeLeaves()
    }
    else{
      apples()
    }
  }
}

//function leaves() {
//leaf=createSprite(200, 0)
//leaf.addImage(leafImg)
//leaf.scale=0.1
//leaf.velocityY=-4
//leaf.lifetime=350
//}


function orangeLeaves(){
  orange=createSprite(200, 0)
  
  orange.x = Math.round(random(10,390));
  orange.addImage(orangeImg)
  orange.scale=0.1
  orange.velocityY=4
  orange.lifetime=350
  orange.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }
  



//function redLeaves(){
//red=createSprite(200, 0)
//red.addImage(redImg)
//red.scale=0.08
//red.velocityY=-4
//red.lifetime=350
//}


function apples(){
  apple=createSprite(200, 0)
  apple.x = Math.round(random(10,390));
  apple.addImage(appleImg)
  apple.scale=0.1
  apple.velocityY=4
  apple.lifetime=350
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }

