const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var plant1,plant2,plant3,plant4,plant5;
var player;
var ground;


function preload(){
  
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plant1 = new Plant(20,360,40,50);  
    plant2 = new Plant(80,360,40,50);  
    plant3 = new Plant(140,360,40,50);  
    plant4 = new Plant(200,360,40,50);
    plant5 = new Plant(260,360,40,50);
    

    player = new Player(50,360,20,40);

    ground = new Ground(600,390,1200,100);
  
}

function draw(){
  background("green");

  player.display();
  plant1.display();
  plant2.display();
  plant3.display();
  plant4.display();
  plant5.display();
  ground.display();
}

