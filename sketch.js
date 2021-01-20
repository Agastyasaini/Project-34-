const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,rope,monster;
var ground , background2 ;
var box, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20 ;
var box21 ,box22 ,box23 ,box24 ,box25 ,box26 ,box27 ,box28 ,box29,box30 ;


function preload(){
  background2 = loadImage("images/GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    hero = new BallClass(280,170,180,180);
    ground = new Groundclass(400,400,650,20);
    rope = new Ropeclass(hero.body,{x:280,y:170});

    box = new BoxClass(420,200,40,40);
    box1 = new BoxClass(420,200,40,40);
    box2 = new BoxClass(420,200,40,40);
    box3 = new BoxClass(420,200,40,40);
    box4 = new BoxClass(460,200,40,40);
    box5 = new BoxClass(460,200,40,40);
    box6 = new BoxClass(460,200,40,40);
    box7 = new BoxClass(460,200,40,40);
    box8 = new BoxClass(460,200,40,40);
    box9 = new BoxClass(460,200,40,40);
    box10 = new BoxClass(500,200,40,40);
    box11 = new BoxClass(500,200,40,40);
    box12 = new BoxClass(500,200,40,40);
    box13 = new BoxClass(500,200,40,40);
    box14 = new BoxClass(500,200,40,40);
    box15 = new BoxClass(500,200,40,40);
    box16 = new BoxClass(500,200,40,40);
    box17 = new BoxClass(500,200,40,40);
    box18 = new BoxClass(540,200,40,40);
    box19 = new BoxClass(540,200,40,40);
    box20 = new BoxClass(540,200,40,40);
    box21 = new BoxClass(540,200,40,40);
    box22 = new BoxClass(420,200,40,40);
    
    monster = new BallClass2(650,180,180,180);
    
    
    

    
}

function draw(){
    background(background2);
    Engine.update(engine);

    //ground.display();  
    hero.display();
    monster.display();
    
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    
   
   
}

function mouseDragged(){
    
   Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}




