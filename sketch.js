
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var background,background_Img
var ballon,bomb,bomb_Img,ballon_Img,world,engine


function preload(){
background_Img=loadImage("background.png")
ballon_Img=loadImage("balloon.png")

}
  



function setup() {
  createCanvas(1600,800);
 balloon=createSprite(400, 200, 50, 50);
 balloon.addImage(ballon_Img)
 balloon.scale=0.25
}

function draw() {
  background(background_Img); 

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10
  }
  
  
  
  
  
  




  drawSprites();
}










 
 
 