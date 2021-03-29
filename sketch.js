function preload() {
  player1Img = loadImage("images/player1.png")
  player2Img = loadImage("images/player2.png")
player1sound = loadSound("alien_hit.wav")
player2sound = loadSound("Collision8-Bit.ogg")

}




function setup() {
  createCanvas(windowWidth, windowHeight);
  player1 = createSprite(200, 150, 50, 50);
  player1.addImage(player1Img)
  player1healthbaroutline = createSprite(150, 300, 220, 30)
  player1healthbaroutline.shapeColor = "grey"
  player1outline = createSprite(150, 300, 200, 10)
  player1outline.shapeColor = "black"
  player1healthbar = createSprite(150, 300, 200, 10)
  player1healthbar.shapeColor = "turquoise"


  player2 = createSprite(1200, 150, 100, 100)
  player2.addImage(player2Img)
  player2.scale = 1.75
  player2.mirrorX(-1)
  player2healthbaroutline = createSprite(1150, 300, 220, 30)
  player2healthbaroutline.shapeColor = "grey"
  player2outline = createSprite(1150, 300, 200, 10)
  player2outline.shapeColor = "black"
  player2healthbar = createSprite(1150, 300, 200, 10)
  player2healthbar.shapeColor = "turquoise"
  
  shootingstarGroup = createGroup();

player2.velocityY  = 5;
edges = createEdgeSprites()

}

function draw() {
  background("black");
  player2healthbar.y = player2.y
  player2healthbaroutline.y = player2.y
  player2outline.y = player2.y

  player1healthbar.y = player1.y
  player1healthbaroutline.y = player1.y
  player1outline.y = player1.y

  text("x: " + mouseX + ", y: " + mouseY, mouseX, mouseY)
  if (mouseWentDown("leftButton")) {
    shootingstar = createSprite(player1.x+85, player1.y-50, 20, 10)
    shootingstar.velocityX = 4
    shootingstarGroup.add(shootingstar);
    shootingstar.shapeColor = color(Math.round(random(0,255)),50,100)
player1sound.play()

  }
  if (shootingstarGroup.isTouching(player2) && player2healthbar.width > 0.5) {
    player2healthbar.width = player2healthbar.width - 0.5;



  }
  
  player1.y = mouseY
    player2.bounceOff(edges)


    if (frameCount % 60 == 0) {
      shootingstar5 = createSprite(player2.x-100,player2.y-50,20,10)
      shootingstar5.velocityX = -4
        player2sound.play()
    }
  drawSprites();
}