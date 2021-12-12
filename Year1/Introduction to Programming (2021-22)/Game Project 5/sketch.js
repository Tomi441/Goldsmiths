/*

The Game Project - 4

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var canyon;
var collectable;
var d;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	d = 50;

	canyon=
	{
		x_pos:700,
		width:100
		
	}

	collectable=
	{
		x_pos:100,
		y_pos:floorPos_y,
		size:50,
		isFound:false
	}
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue



	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	

	if(dist(gameChar_x,gameChar_y,collectable.x_pos,collectable.y_pos)>d)
	{
		collectable.isFound = false;
	}else
	{
		collectable.isFound = true;
	}
	//draw the collectable item
	if(collectable.isFound === false)
	{
		noFill()
		strokeWeight(6);
		stroke(220,185,0) ;
		ellipse(collectable.x_pos,collectable.y_pos-20,collectable.size,collectable.size) 
		fill(255,0,255);
		stroke(255) ;
		strokeWeight(1);
		quad(
			collectable.x_pos-5,collectable.y_pos-collectable.size,
			collectable.x_pos-10,collectable.y_pos-(collectable.size+15),
			collectable.x_pos+10,collectable.y_pos-(collectable.size+15),
			collectable.x_pos+5,collectable.y_pos-collectable.size
			);
		noStroke();

	} 
	
	
	//draw the canyon
	if(gameChar_x > 700 && gameChar_x < 800 && gameChar_y>=floorPos_y||gameChar_x > 300 && gameChar_x < 400 && gameChar_y>=floorPos_y)
	{
		isPlummeting = true
	}

	if(isPlummeting === true)
	{
		gameChar_y = gameChar_y + 1
	}

	

	
	fill(100, 155, 255);
	rect(canyon.x_pos,432,canyon.width,148);
	rect(canyon.x_pos-400,432,canyon.width,148);

	//the game character
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

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isLeft === true)
	{
		gameChar_x = gameChar_x - 2;
	}else if(isRight === true)
	{
		gameChar_x = gameChar_x + 2;
	}

	if(gameChar_y < floorPos_y)
	{
		gameChar_y = gameChar_y + 2;
		isFalling = true;
	}else 
	{
		isFalling=false;
	}
	text(mouseX+","+mouseY, mouseX, mouseY);
	

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	if(keyCode === 65)
	{
		isLeft=true;
	} else if(keyCode === 68)
	{
		isRight=true;
	}

	if(keyCode === 87 && gameChar_y===floorPos_y)
	{
		gameChar_y = gameChar_y - 120;
	} 

	if(keyCode === 32)
	{
		gameChar_y = floorPos_y;
	} 


	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	if(keyCode === 65)
	{
		isLeft=false;
	} else if(keyCode === 68)
	{
		isRight=false;
	}

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
