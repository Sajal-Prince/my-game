var player , playerImage , playerJump , playerRun , playerDead;
var path1 , path2 , path3 , path4 , path5 , path6 , path7;
var gameState = 0;
var randPathY1 = 230
var randPathY2 = 160
var randomPathYArray = [randPathY1,randPathY2];
var randomPath1Y , randomPath2Y , randomPath3Y , randomPath4Y , randomPath5Y , randomPath6Y , randomPath7Y;

function preload()
{
        playerImage = loadImage("Images/Hero/Idle (1).png");
        playerJump = loadAnimation("Images/Hero/Jump (1).png","Images/Hero/Jump (2).png","Images/Hero/Jump (3).png","Images/Hero/Jump (4).png","Images/Hero/Jump (5).png","Images/Hero/Jump (6).png","Images/Hero/Jump (7).png","Images/Hero/Jump (8).png","Images/Hero/Jump (9).png")
        playerRun = loadAnimation("Images/Hero/Run (1).png","Images/Hero/Run (2).png", "Images/Hero/Run (3).png","Images/Hero/Run (4).png","Images/Hero/Run (5).png","Images/Hero/Run (6).png","Images/Hero/Run (7).png","Images/Hero/Run (8).png");
        playerIdle = loadAnimation("Images/Hero/Idle (1).png");
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function setup()
{
        createCanvas(10000 , 700);
        setFrameRate(30)

        player = createSprite(-4000,150,10,10);
        player.addImage(playerImage);
        player.addAnimation("Run",playerRun);
        player.addAnimation("Idle",playerIdle);
        player.addAnimation("Jump",playerJump);
        player.scale = 0.2
        camera.y = player.y;



        ball1=createSprite(-2000 , 150 , 10 , 10)
        ball1.setVelocity(player.x, player.y)

        
        player.debug = true;
        player.setCollider("rectangle",50,0,300,450)
        
        randomPath1Y = random(randomPathYArray)
        randomPath2Y = random(randomPathYArray)
        randomPath3Y = random(randomPathYArray)
        randomPath4Y = random(randomPathYArray)
        randomPath5Y = random(randomPathYArray)
        randomPath6Y = random(randomPathYArray)
        randomPath7Y = random(randomPathYArray)

        path1 = createSprite(-4000,randomPath1Y,500,50);
        path2 = createSprite(path1.x+600,randomPath2Y,500,50);
        path3 = createSprite(path2.x+600,randomPath3Y,500,50);
        path4 = createSprite(path3.x+600,randomPath4Y,500,50);
        path5 = createSprite(path4.x+600,randomPath5Y,500,50);
        path6 = createSprite(path5.x+600,randomPath6Y,500,50);
        path7 = createSprite(path6.x+600,randomPath7Y,500,50);
}


function draw()
{   
        background("white");
        
       

      
        gravity();
        cameraMovement();
        movement();
        colliding();
        drawSprites();
      
        console.log(frameRate());
}

