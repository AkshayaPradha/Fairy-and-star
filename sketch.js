var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyVoice;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload()
{
	starImg = loadImage("images/star.png");
	star1Img = loadImage("images/starImage.png")
	bgImg = loadImage("images/starNight.png");
	fairy1Img = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairy2Img = loadAnimation("images/fairy.png");
	//load animation for fairy here
	fairyVoice = loadSound("sound/joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
  
	//write code to play fairyVoice sound
    
	//create fairy sprite and add animation for fairy
      fairy = createSprite(100,550,10,10);
      fairy.addAnimation("flying",fairy1Img);
	  fairy.addAnimation("changed",fairy2Img)
	  fairy.scale = 0.3;
	  fairyVoice.play();


	star = createSprite(650,30);
	star.addImage(starImg);
	star.addImage("cute",star1Img);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 480){
	  Matter.Body.setStatic(starBody,true);
	  fairy.changeAnimation("changed");
	  fairy.scale = 0.2;
	  star.changeImage("cute");
	  star.scale = 0.1/2;
  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 30;
	}

	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 30;
	}
}
