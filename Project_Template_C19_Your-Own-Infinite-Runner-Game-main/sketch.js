var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost.addAnimation("jumping", ghost_jumping)
  ghost.addAnimation("standing", ghost_standing)
  ghost.scale= 0.5;

   doorsGroup=new Group()
  climberGroup=new Group()
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
  
  spawnDoors();
  spawnClimber();
}
function spawnDoors(){
  if(frameCount%240===0){
    var door=createSprite(200,-50)
    door.addImage(doorImg)
      door.x=Math.round(random(120,400))
        door.velocityY=1
        door.lifetime=800
        doorsGroup.add(door);
      }
  
  }

  function spawnClimber(){
    if(framecount%240===0){
var climber=createSprite(200,10)
climber.addImage(climberImg)
climber.x=door.x
climber.velocityY=1
climber.lifetime=800
climberGroup.add(climber);

function spawnGhost(){
  if(framecount%240===0){
    var ghost=createSprite(200,200)
    ghost.addImage(ghostImg)
    ghost.velocityY=1
    ghost.lifetime=800
    ghostGroup.add(ghost);
  }
}


    }
  }