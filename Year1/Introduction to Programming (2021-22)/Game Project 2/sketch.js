/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
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
		arc(gameChar_x,gameChar_y-48, gameChar_x-30,gameChar_y-125,radians(0),radians(180));//smile 
	stroke(0)
	strokeWeight(1)
		line(gameChar_x+7,gameChar_y-16,gameChar_x+9,gameChar_y-2)//right leg
		line(gameChar_x-7,gameChar_y-16,gameChar_x-9,gameChar_y-2)//left leg
		line(gameChar_x,gameChar_y-40,gameChar_x,gameChar_y-34)//neck
		line(gameChar_x+9,gameChar_y-28,gameChar_x+20,gameChar_y-14)//right arm
		line(gameChar_x-9,gameChar_y-28,gameChar_x-20,gameChar_y-14)//left arm


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
	
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
		arc(gameChar_x,gameChar_y-58, gameChar_x-230,gameChar_y-125,radians(0),radians(180));//smile 
	stroke(0)
	strokeWeight(1)
		line(gameChar_x+7,gameChar_y-26,gameChar_x+15,gameChar_y-12)//right leg
		line(gameChar_x-7,gameChar_y-26,gameChar_x-15,gameChar_y-12)//left leg
		line(gameChar_x,gameChar_y-50,gameChar_x,gameChar_y-44)//neck
		line(gameChar_x+9,gameChar_y-38,gameChar_x+20,gameChar_y-52)//right arm
		line(gameChar_x-9,gameChar_y-38,gameChar_x-20,gameChar_y-52)//left arm


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...

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


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

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


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

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

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

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

	text(mouseX+","+mouseY, mouseX, mouseY);
}
