var dustbinL, dustbinD, dustbinR;
var groundSprite;
var dustBinL, dustBinD;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
}
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	dustbinL = createSprite(1100, 555, 20, 100)
	dustbinD = createSprite(1200, 615, 200, 20)
	dustbinR = createSprite(1300, 555, 20, 100)
	//Create the Bodies Here.
	paperObject = new Paper(50, 550, 70)
	this.ground = Bodies.rectangle(width/2,630, width, 10, {isStatic:true})
	World.add(world, ground)
	dustbinLBody = Bodies.rectangle(1100, 555, 20, 100, {isStatic:true})
	World.add(world, dustbinLBody)
	dustbinDBody = Bodies.rectangle(1200, 615, 200, 20, {isStatic:true})
	World.add(world, dustbinDBody)
	dustbinRBody = Bodies.rectangle(1300, 555, 20, 100, {isStatic:true})
	World.add(world, dustbinRBody)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY)
  paperObject.display();
  var groundpos = this.ground.position; 
        push() 
        translate(groundpos.x, groundpos.y); 
        rectMode(CENTER) 
        strokeWeight(3); 
        fill("white") 
        rect(0,0,width, 10); 
		pop()
  drawSprites()
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:290,y:-290})
	}
}
