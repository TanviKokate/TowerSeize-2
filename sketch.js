const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand_1, stand_2;
var slingShot;
var polygon_ball, polygon_Image;

function preload(){
  polygon_Image = loadImage("polygon.png");
}

function setup() {
	createCanvas(900, 400);
	engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(width/2, 396, 900, 18);
  stand_1 = new Ground(390, 300, 250, 15);
  stand_2 = new Ground(700, 200, 200, 15);

  polygon_ball = Bodies.circle(50, 200, 30);
  World.add(world, polygon_ball);

  slingShot = new Slingshot(this.polygon_ball, {x : 100, y : 200});

  block_1 = new Block(300, 275, 30, 40);
  block_2 = new Block(330, 275, 30, 40);
  block_3 = new Block(360, 275, 30, 40);
  block_4 = new Block(390, 275, 30, 40);
  block_5 = new Block(420, 275, 30, 40);
  block_6 = new Block(450, 275, 30, 40);
  block_7 = new Block(480, 275, 30, 40);

  block_8 = new Block(330, 235, 30, 40);
  
  block_9 = new Block(360, 235, 30, 40);
  block_10 = new Block(390, 235, 30, 40);
  block_11 = new Block(420, 235, 30, 40);
  block_12 = new Block(450, 235, 30, 40);

  block_13 = new Block(360,195,30,40);
  block_14 = new Block(390,195,30,40);
  block_15 = new Block(420,195,30,40);

  block_16 = new Block(390,155,30,40);

  block1 = new Block(640,175,30,40);
  block2 = new Block(670,175,30,40);
  block3 = new Block(700,175,30,40);
  block4 = new Block(730,175,30,40);
  block5 = new Block(760,175,30,40);

  block6 = new Block(670,135,30,40);
  block7 = new Block(700,135,30,40);
  block8 = new Block(730,135,30,40);

  block9 = new Block(700,95,30,40);
  Engine.run(engine);
}

function draw() {
  background(255, 0, 0);
  ground.display();
  stand_1.display();
  stand_2.display();

  imageMode(CENTER);
  image(polygon_Image, polygon_ball.position.x, polygon_ball.position.y, 40, 40);

  slingShot.display();

  push();
  textFont("Broadway");
  fill(0);
  stroke(255);
  strokeWeight(3);
  textSize(34);
  text("Drag the Polygon to destroy the Blocks!!", 83, 50);
  pop();

  stroke(0);
  fill("yellow");
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  block_6.display();
  block_7.display();
  fill("pink");
  block_8.display();
  block_9.display();
  block_10.display();
  block_11.display();
  block_12.display();
  fill("turquoise");
  block_13.display();
  block_14.display();
  block_15.display();
  fill("grey");
  block_16.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("turquoise");
  block6.display();
  block7.display();
  block8.display();
  fill("pink")
  block9.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon_ball, { x : mouseX, y : mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    slingShot.attach(this.polygon_ball);
  }
}  