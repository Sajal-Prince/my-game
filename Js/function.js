

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function colliding()
{
    player.collide(path1);
    player.collide(path2);
    player.collide(path3);
    player.collide(path4);
    player.collide(path5);
    player.collide(path6);
    player.collide(path7);
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function movement()
{
    if(keyDown("d") || keyDown("RIGHT_ARROW"))
    {
        player.changeAnimation("Run",playerRun);
        player.velocityX = 5;
    }else{
        player.velocityX = 0;
        player.changeAnimation("Idle",playerIdle);
    }

    if(keyWentDown("SPACE") || keyWentDown("UP_ARROW") )
    {        
        player.velocityY = -12;
    }
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function cameraMovement()
{
    camera.x = player.x+4800;
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function gravity()
{
    player.velocityY = player.velocityY + 0.8;
}

