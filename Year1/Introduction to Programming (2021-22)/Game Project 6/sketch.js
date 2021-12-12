/*

The Game Project 6 - Side scrolling

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
	trees_x=[700,800,900,-1000,-1100,-1200];
	clouds =[
		{x_pos:-300,y_pos:40},
		{x_pos:0,y_pos:70},
		{x_pos:300,y_pos:130},
		{x_pos:600,y_pos:80},
		{x_pos:800,y_pos:100},
		{x_pos:1200,y_pos:50},
		{x_pos:1500,y_pos:75},
	]

	mountains =[
		{x_pos:-880,height:400},
		{x_pos:1780,height:400},
		{x_pos:980,height:400},
	]

	canyons=[
		{x_pos:900,width:100},
		{x_pos:100,width:100},
		{x_pos:-800,width:100}
	]

	collectables=[
		{x_pos:1840,y_pos:floorPos_y,size:50},
		{x_pos:-500,y_pos:floorPos_y,size:50},
		{x_pos:1200,y_pos:floorPos_y,size:50},
	]
	}

	

function draw()
{
	background(100, 155, 255); // fill the sky blue
	text(mouseX+","+mouseY, mouseX, mouseY);

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push()
	translate(scrollPos, 0) 
	// Draw clouds.
	for(var i = 0; i < clouds.length; i++)
	{
		fill(220);
		ellipse(clouds[i].x_pos,clouds[i].y_pos,55,55);
		ellipse(clouds[i].x_pos+25,clouds[i].y_pos,35,35);
		ellipse(clouds[i].x_pos+45,clouds[i].y_pos,25,25);
	}

	
	// Draw mountains.
	for(var i=0; i < mountains.length; i++)
	{
		fill(100);
		triangle(mountains[i].x_pos-mountains[i].height/2, floorPos_y,
			mountains[i].x_pos,floorPos_y-mountains[i].height,
			mountains[i].x_pos+mountains[i].height/2,floorPos_y)

	}
	
	// Draw trees.
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
	// Draw canyons
	for(var i=0; i < canyons.length; i++)
	{
	fill(100, 155, 255);
	rect(canyons[i].x_pos+144,431,canyons[i].width,148);
	rect(canyons[i].x_pos+467,431,canyons[i].width,148);
	}

	// Draw collectables items
	for(var i=0; i < collectables.length; i++)
	{
		noFill()
		strokeWeight(6);
		stroke(220,185,0) ;
		ellipse(collectables[i].x_pos,collectables[i].y_pos-20,collectables[i].size,collectables[i].size) 
		fill(255,0,255);
		stroke(255) ;
		strokeWeight(1);
		quad(
			collectables[i].x_pos-5,collectables[i].y_pos-collectables[i].size,
			collectables[i].x_pos-10,collectables[i].y_pos-(collectables[i].size+15),
			collectables[i].x_pos+10,collectables[i].y_pos-(collectables[i].size+15),
			collectables[i].x_pos+5,collectables[i].y_pos-collectables[i].size)
	}

	pop();

	// Draw the game character - this must be last
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
	
		text(mouseX+","+mouseY, mouseX, mouseY);
	//////// Game character logic ///////
	// Logic to move

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
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
