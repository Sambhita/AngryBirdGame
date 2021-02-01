const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,650,60,60);
    box2 = new Box(1150,650,60,60);
    box3 = new Box(1000,550,60,60);
    box4 = new Box(1150,550,60,60);

    pig1 = new Pig(1075,650,50,50);
    pig2 = new Pig(1075,550,50,50);
    box5 = new Box(1075,450,60,60);

    log1 = new Log(1075,600,220,PI/2);
    log2 = new Log(1075,500,220,PI/2);
    log3 = new Log(1030,400,100,PI/4);
    log4 = new Log(1120,400,100,-PI/4);
    
    bird = new Bird(600,650,50,50);

    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    pig1.display();
    pig2.display();
    box5.display();

    ground.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
}
