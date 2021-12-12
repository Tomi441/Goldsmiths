/*

The Game Project 7 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;
var flagpole;
var game_score;
var lives;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	game_score = 0;
	lives = 1;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	trees_x = [
		900,
		950,
		980,
		-1000,
		-1100,
		-1200,
		195, 
        175, 
        125, 
        860, 
        710, 
        660, 
        1000, 
        1050, 
        1100, 
        1540, 
        1590, 
        1640, 
        1880, 
        1930, 
        1980
	];
	clouds =[
		{x_pos:-300, y_pos:40},
		{x_pos:-20, y_pos:20},
		{x_pos:350, y_pos:130},
		{x_pos:600, y_pos:80},
		{x_pos:800, y_pos:100},
		{x_pos:1200, y_pos:50},
		{x_pos:1500, y_pos:75},
		{x_pos: 50, y_pos: 50},
        {x_pos: 300, y_pos: 70},
        {x_pos: 550, y_pos: 110},
        {x_pos: 800, y_pos: 70},
        {x_pos: 1000, y_pos: 50},
        {x_pos: 1250, y_pos: 70},
        {x_pos: 1500, y_pos: 110},
        {x_pos: 1750, y_pos: 50}
	]

	mountains =[
		{x_pos:-1180, height:400},
		{x_pos:-120, height:400},
		{x_pos:1970, height:400},
		{x_pos: -275, height:432},
        {x_pos: -250, height:432},
        {x_pos: 1225, height:432},
        {x_pos: 2150, height:432},
        {x_pos: 2175, height:432},
	]

	canyons=[
		{x_pos:900,width:100},
		{x_pos:100,width:100},
		{x_pos:-800,width:100},
		{x_pos:590,width:100},
		{x_pos:1450,width:100}
	]

	collectables=[
		{x_pos:50, y_pos:350, size:50, isFound:false},
		{x_pos:-500, y_pos:340, size:50, isFound:false},
		{x_pos:1200, y_pos:floorPos_y, size:50, isFound:false},
		{x_pos: 566, y_pos:floorPos_y, size: 30, isFound: false},
        {x_pos: 700, y_pos:360, size: 30, isFound: false},
        {x_pos: 1100, y_pos:floorPos_y, size: 30, isFound: false},
        {x_pos: 1900, y_pos:floorPos_y, size: 30, isFound: false}
		
	]

	flagpole = {isReached: false, x_pos: 2000}
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push()
	translate(scrollPos, 0)
	// Draw clouds.
	drawClouds();
	// Draw mountains.
	drawMountains()
	// Draw trees.
	drawTrees()
	// Draw canyons.
	for(var i=0; i < canyons.length; i++)
	{
		drawCanyon(canyons[i])
		checkCanyon(canyons[i])
	}
	// Draw collectable items.
	for(var i=0; i < collectables.length; i++)
	{	
		if(!collectables[i].isFound)
		{
			drawCollectable(collectables[i]);
       	  checkCollectable(collectables[i]);
		}
	}

	renderFlagpole();

	checkPlayerDie();


	pop();
	fill('red');
    textSize(24);
    text("Lives: " + lives, width/8, 20);
	text("score: " + game_score, width/2, 20)

	// Draw game character.
	
	drawGameChar();

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
	if(gameChar_y < floorPos_y)
	{
		gameChar_y = gameChar_y + 2;
		isFalling = true;
	}else 
	{
		isFalling=false;
	}

	if(flagpole.isReached == false)
    {
        checkFlagpole();
    }

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){
	if(keyCode === 65)
	{
		isLeft=true;
	} else if(keyCode === 68)
	{
		isRight=true;
	}

	if(keyCode === 87 && gameChar_y===floorPos_y)
	{
		gameChar_y = gameChar_y - 100;
	} 

	if(keyCode === 32)
	{
		gameChar_y = floorPos_y;
	} 

	console.log("press" + keyCode);
	console.log("press" + key);


}

function keyReleased()
{

	if(keyCode === 65)
	{
		isLeft=false;
	} else if(keyCode === 68)
	{
		isRight=false;
	}
	console.log("release" + keyCode);
	console.log("release" + key);

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		stroke(0)
	fill(255)		
		ellipse(gameChar_x,gameChar_y-60,20);//head
		ellipse(gameChar_x,gameChar_y-35,25);//body	
	fill(0);	
		ellipse(gameChar_x-15,gameChar_y-15,10);//left foot
		ellipse(gameChar_x+10,gameChar_y-10,10);//right foot
		ellipse(gameChar_x+20,gameChar_y-24,10)//right hand
		ellipse(gameChar_x-20,gameChar_y-50,10)//left hand
		ellipse(gameChar_x-4,gameChar_y-64,2);//eye
	stroke(0)
	strokeWeight(1)
		line(gameChar_x,gameChar_y-28,gameChar_x+9,gameChar_y-12)//right leg
		line(gameChar_x,gameChar_y-23,gameChar_x-15,gameChar_y-15)//left leg
		line(gameChar_x,gameChar_y-50,gameChar_x,gameChar_y-47)//neck
		line(gameChar_x,gameChar_y-38,gameChar_x+20,gameChar_y-24)//right arm
		line(gameChar_x-13,gameChar_y-35,gameChar_x-20,gameChar_y-50)//left arm
		line(gameChar_x-9,gameChar_y-56,gameChar_x-3,gameChar_y-56)//half smile
		line(gameChar_x-3,gameChar_y-56,gameChar_x+1,gameChar_y-58,)//half smile
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		stroke(0)
	fill(255)
		ellipse(gameChar_x,gameChar_y-60,20);//head		
		ellipse(gameChar_x,gameChar_y-35,25);//body	
	fill(0);	
		ellipse(gameChar_x-10,gameChar_y-10,10);//left foot
		ellipse(gameChar_x+15,gameChar_y-15,10);//right foot
		ellipse(gameChar_x+20,gameChar_y-50,10)//right hand
		ellipse(gameChar_x-20,gameChar_y-24,10)//left hand
		ellipse(gameChar_x+4,gameChar_y-64,2);//eye
		
	stroke(0)
	strokeWeight(1)
		line(gameChar_x,gameChar_y-23,gameChar_x+15,gameChar_y-15)//right leg
		line(gameChar_x,gameChar_y-28,gameChar_x-9,gameChar_y-12)//left leg
		line(gameChar_x,gameChar_y-50,gameChar_x,gameChar_y-47)//neck
		line(gameChar_x+13,gameChar_y-35,gameChar_x+20,gameChar_y-50)//right arm
		line(gameChar_x,gameChar_y-38,gameChar_x-20,gameChar_y-24)//left arm
		line(gameChar_x+9,gameChar_y-56,gameChar_x+3,gameChar_y-56)//half smile
		line(gameChar_x+3,gameChar_y-56,gameChar_x-1,gameChar_y-58,)//half smile
	}
	else if(isLeft)
	{
		// add your walking left code
		stroke(0)
		fill(255)		
			ellipse(gameChar_x,gameChar_y-50,20);//head
			ellipse(gameChar_x,gameChar_y-25,25);//body	
		fill(0);	
			ellipse(gameChar_x-10,gameChar_y,10);//left foot
			ellipse(gameChar_x+10,gameChar_y,10);//right foot
			ellipse(gameChar_x+20,gameChar_y-14,10)//right hand
			ellipse(gameChar_x-20,gameChar_y-14,10)//left hand
			ellipse(gameChar_x-4,gameChar_y-54,2);//eye
		stroke(0)
		strokeWeight(1)
			line(gameChar_x,gameChar_y-18,gameChar_x+9,gameChar_y-2)//right leg
			line(gameChar_x,gameChar_y-13,gameChar_x-9,gameChar_y-2)//left leg
			line(gameChar_x,gameChar_y-40,gameChar_x,gameChar_y-37)//neck
			line(gameChar_x,gameChar_y-28,gameChar_x+20,gameChar_y-14)//right arm
			line(gameChar_x-13,gameChar_y-20,gameChar_x-20,gameChar_y-14)//left arm
			line(gameChar_x-9,gameChar_y-46,gameChar_x-3,gameChar_y-46)//half smile
			line(gameChar_x-3,gameChar_y-46,gameChar_x+1,gameChar_y-48,)//half smile	
	}
	else if(isRight)
	{
		// add your walking right code
		stroke(0)
		fill(255)
			ellipse(gameChar_x,gameChar_y-50,20);//head		
			ellipse(gameChar_x,gameChar_y-25,25);//body	
		fill(0);	
			ellipse(gameChar_x-10,gameChar_y,10);//left foot
			ellipse(gameChar_x+10,gameChar_y,10);//right foot
			ellipse(gameChar_x+20,gameChar_y-14,10)//right hand
			ellipse(gameChar_x-20,gameChar_y-14,10)//left hand
			ellipse(gameChar_x+4,gameChar_y-54,2);//eye
			
		stroke(0)
		strokeWeight(1)
			line(gameChar_x,gameChar_y-13,gameChar_x+9,gameChar_y-2)//right leg
			line(gameChar_x,gameChar_y-18,gameChar_x-9,gameChar_y-2)//left leg
			line(gameChar_x,gameChar_y-40,gameChar_x,gameChar_y-37)//neck
			line(gameChar_x+13,gameChar_y-20,gameChar_x+20,gameChar_y-14)//right arm
			line(gameChar_x,gameChar_y-28,gameChar_x-20,gameChar_y-14)//left arm
			line(gameChar_x+9,gameChar_y-46,gameChar_x+3,gameChar_y-46)//half smile
			line(gameChar_x+3,gameChar_y-46,gameChar_x-1,gameChar_y-48,)//half smile
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		stroke(0)
		fill(255)		
			ellipse(gameChar_x,gameChar_y-60,20);//head	
		fill(0);	
			ellipse(gameChar_x,gameChar_y-35,25);//body
			ellipse(gameChar_x-15,gameChar_y-10,10);//left foot
			ellipse(gameChar_x+15,gameChar_y-10,10);//right foot
			ellipse(gameChar_x+20,gameChar_y-52,10)//right hand
			ellipse(gameChar_x-20,gameChar_y-52,10)//left hand
			ellipse(gameChar_x+4,gameChar_y-64,2);//right eye
			ellipse(gameChar_x-4,gameChar_y-64,2);//left eye
			arc(gameChar_x,gameChar_y-58, 15,12,radians(0),radians(180));//smile 
		stroke(0)
		strokeWeight(1)
			line(gameChar_x+7,gameChar_y-26,gameChar_x+15,gameChar_y-12)//right leg
			line(gameChar_x-7,gameChar_y-26,gameChar_x-15,gameChar_y-12)//left leg
			line(gameChar_x,gameChar_y-50,gameChar_x,gameChar_y-44)//neck
			line(gameChar_x+9,gameChar_y-38,gameChar_x+20,gameChar_y-52)//right arm
			line(gameChar_x-9,gameChar_y-38,gameChar_x-20,gameChar_y-52)//left arm
	
	}
	else
	{
		// add your standing front facing code
		stroke(0)
	fill(255)		
		ellipse(gameChar_x,gameChar_y-50,20);//head	
	fill(0);	
		ellipse(gameChar_x,gameChar_y-25,25);//body
		ellipse(gameChar_x-10,gameChar_y,10);//left foot
		ellipse(gameChar_x+10,gameChar_y,10);//right foot
		ellipse(gameChar_x+20,gameChar_y-14,10)//right hand
		ellipse(gameChar_x-20,gameChar_y-14,10)//left hand
		ellipse(gameChar_x+4,gameChar_y-54,2);//right eye
		ellipse(gameChar_x-4,gameChar_y-54,2);//left eye
		arc(gameChar_x,gameChar_y-48, 15,12,radians(0),radians(180));//smile 
	stroke(0)
	strokeWeight(1)
		line(gameChar_x+7,gameChar_y-16,gameChar_x+9,gameChar_y-2)//right leg
		line(gameChar_x-7,gameChar_y-16,gameChar_x-9,gameChar_y-2)//left leg
		line(gameChar_x,gameChar_y-40,gameChar_x,gameChar_y-34)//neck
		line(gameChar_x+9,gameChar_y-28,gameChar_x+20,gameChar_y-14)//right arm
		line(gameChar_x-9,gameChar_y-28,gameChar_x-20,gameChar_y-14)//left arm
	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
	for(var i = 0; i < clouds.length; i++)
	{
		fill(220);
		ellipse(clouds[i].x_pos,clouds[i].y_pos,55,55);
		ellipse(clouds[i].x_pos+25,clouds[i].y_pos,35,35);
		ellipse(clouds[i].x_pos+45,clouds[i].y_pos,25,25);
	}
}
// Function to draw mountains objects.
function drawMountains()
{
	for(var i=0; i < mountains.length; i++)
	{
		fill(100);
		triangle(mountains[i].x_pos-mountains[i].height/2, floorPos_y,
			mountains[i].x_pos,floorPos_y-mountains[i].height,
			mountains[i].x_pos+mountains[i].height/2,floorPos_y)

	}
}
// Function to draw trees objects.
function drawTrees()
{
	for(var i = 0; i < trees_x.length; i++)
	{
		fill(100,50,0)
		rect(75+trees_x[i],-200/2+floorPos_y,50,200/2);
		fill(0,100,0);
		triangle(trees_x[i]+25,-200/2+floorPos_y,
			    trees_x[i]+100,-200+floorPos_y,
				trees_x[i]+175,-200/2+floorPos_y)
				
		triangle(trees_x[i],-200/4+floorPos_y,
			    trees_x[i]+100,-200*3/4+floorPos_y,
				trees_x[i]+200,-200/4+floorPos_y)
	}
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
	fill(100, 155, 255);
	rect(t_canyon.x_pos,floorPos_y,t_canyon.width,148);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
	if(gameChar_world_x > t_canyon.x_pos && gameChar_world_x < t_canyon.x_pos + t_canyon.width && gameChar_y >= floorPos_y)
	{
		isPlummeting = true
	}

	if(isPlummeting === true)
	{
		gameChar_y = gameChar_y + 1
	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
	
	noFill()
	strokeWeight(6);
	stroke(220,185,0) ;
	ellipse(t_collectable.x_pos,t_collectable.y_pos-20,t_collectable.size,t_collectable.size) 
	fill(255,0,255);
	stroke(255) ;
	strokeWeight(1);
	quad(
		t_collectable.x_pos-5,t_collectable.y_pos-t_collectable.size,
		t_collectable.x_pos-10,t_collectable.y_pos-(t_collectable.size+15),
		t_collectable.x_pos+10,t_collectable.y_pos-(t_collectable.size+15),
		t_collectable.x_pos+5,t_collectable.y_pos-t_collectable.size
	    )
	noStroke();
	
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
	if(dist(gameChar_world_x,gameChar_y,t_collectable.x_pos,t_collectable.y_pos) < t_collectable.size)
	{
		t_collectable.isFound = true;
		game_score += 1;
	}

}

function renderFlagpole()
{
    push();
    strokeWeight(5);
    stroke(255);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 350);
    fill('purple');
    noStroke();

    if(flagpole.isReached)
    {
        rect(flagpole.x_pos, floorPos_y - 50, 75, 50);
		textSize(15);
		fill(0, 102, 153);
		textAlign(CENTER);
		text("YOU FINISHED WITH A SCORE OF " + game_score, gameChar_world_x, 500 );
		noLoop();
	} 
    else
    {
        rect(flagpole.x_pos, floorPos_y - 350, 75, 50);  
    }
    pop();
}

function checkFlagpole()
{
    var d = abs(gameChar_world_x - flagpole.x_pos);

    if(d < 15)
    {
        flagpole.isReached = true;
    }
}

function checkPlayerDie()
{   
    console.log(lives);
    if(gameChar_y > height)
    {
        lives -= 1;

      if(lives >= 0)
      {
		textSize(32);
		fill(0, 102, 153);
		textAlign(CENTER);
		text("YOUR SCORE IS " + game_score, gameChar_world_x, 500 );
		noLoop();
      }
    }    
}