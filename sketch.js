var Runner, Runner_running, bomb, coin ,energyDrink,power
var path, invisiblepath;

function preload() {
  Runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
   bomb= loadImage("bomb.png");
   coin= loadImage("coin.png");
 path = loadImage("path.png");
  power= loadImage("power.png");
  energyDrink= loadImage("energyDrink.png");
}

function setup() {
  createCanvas(600, 200);

  //create a runner sprite
  Runner = createSprite(50,160,20,50);
  Runner.addAnimation("running", Runner_running);

  coin = createSprite(80,160,20,50);
  coin.addImage("running", coin);

   bomb= createSprite(15,160,20,50);
  bomb.addImage("running", bomb);

  energyDrink = createSprite(100,160,20,50);
  energyDrink.addImage("running", energyDrink);

  //create a path sprite
    path = createSprite(200,180,400,20);
    path.addImage("path",pathImage);
    path.x = path.hight/2;
    path.velocityY = 4;
    path.scale=1.2;
  
  invisablepath = createSprite(200,190,400,2);
  invisablepath.visible=false
}

  function draw() {
    background(220);
    if (path.y < 400) {
      path.y = hight / 2;
    }
  
    
   // Runner.collide(invisablepath);

    draw(Mouse.X)
  
    drawSprites();
  }
    
  
