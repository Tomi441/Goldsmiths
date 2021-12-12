/*

The Game Project

3 - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain; 

var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;

	canyon=
	{
		x_pos:0,
		width:100
		
	}

	collectable=
	{
		x_pos:100,
		y_pos:100,
		size:50
	}

	mountain=
	{
		x_pos:0,
		y_pos:0,
		
	}

	cloud=
	{
		x_pos:0,
		y_pos:0,
		size:0
	}
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
	
	//mountain
	fill('#8b6d62')
		triangle(402,22,580,432,200,432);
		triangle(179,82,308,432,14,432);
	fill('#6f4e42');
		triangle(402,22,580,432,510,432);
		triangle(179,82,308,432,210,432);
	fill('FFFFFF');
		triangle(402,22,417,77,368,91);
		quad(402,22,436,100,417,78,399,88);
		triangle(179,82,195,126,162,119);
		quad(179,82,184,130,172,120,156,131);

	//canyon
	fill(100, 155, 255);
	rect(canyon.x_pos+144,431,canyon.width,148);
	rect(canyon.x_pos+467,431,canyon.width,148);

	//tree
	fill('#1c7f28');
		arc(treePos_x-426, treePos_y+80, 80, 80, radians(90),radians(270));
		arc(treePos_x-213, treePos_y+80, 80, 80, radians(90),radians(270));
		arc(treePos_x-100, treePos_y+80, 80, 80, radians(270),radians(90));
	fill('#1b5d1f');
		arc(treePos_x-426, treePos_y+80, 80, 80, radians(270),radians(90));
		arc(treePos_x-213, treePos_y+80, 80, 80, radians(270),radians(90));
		arc(treePos_x-100, treePos_y+80, 80, 80, radians(90),radians(270));
	fill('#6f4e42');
		rect(treePos_x-432, treePos_y+120,14,25);
		rect(treePos_x-219, treePos_y+120,14,25);
		rect(treePos_x-107, treePos_y+120,14,25);

	//front facing game character
	stroke(0);
	fill(255);		
		ellipse(gameChar_x,gameChar_y-50,20);//head	
	fill(0);	
		ellipse(gameChar_x,gameChar_y-25,25);//body
		ellipse(gameChar_x-10,gameChar_y,10);//left foot
		ellipse(gameChar_x+10,gameChar_y,10);//right foot
		ellipse(gameChar_x+20,gameChar_y-14,10)//right hand
		ellipse(gameChar_x-20,gameChar_y-14,10)//left hand
		ellipse(gameChar_x+4,gameChar_y-54,2);//right eye
		ellipse(gameChar_x-4,gameChar_y-54,2);//left eye
		arc(gameChar_x,gameChar_y-48, 10,10,radians(0),radians(180));//smile 
	stroke(0);
	strokeWeight(1);
		line(gameChar_x+7,gameChar_y-16,gameChar_x+9,gameChar_y-2)//right leg
		line(gameChar_x-7,gameChar_y-16,gameChar_x-9,gameChar_y-2)//left leg
		line(gameChar_x,gameChar_y-40,gameChar_x,gameChar_y-34)//neck
		line(gameChar_x+9,gameChar_y-28,gameChar_x+20,gameChar_y-14)//right arm
		line(gameChar_x-9,gameChar_y-28,gameChar_x-20,gameChar_y-14)//left arm
    
	//collectable item
		noStroke()
			fill('yellow')
				rect(collectable.x_pos+755,collectable.y_pos+320,collectable.size-35,collectable.size-40)
				rect(collectable.x_pos+755,collectable.y_pos+300,collectable.size-40,collectable.size-40)
				rect(collectable.x_pos+745,collectable.y_pos+268,collectable.size-40,collectable.size+20)
		fill('yellow')
		
				ellipse(collectable.x_pos+751,collectable.y_pos+256,collectable.size,collectable.size/2)
	

	//clouds
		fill(220);
		ellipse(cloud.x_pos+800,cloud.y_pos+150,cloud.size+80); 
		ellipse(cloud.x_pos+760,cloud.y_pos+150,cloud.size+60);
		ellipse(cloud.x_pos+840,cloud.y_pos+150,cloud.size+60);
		ellipse(cloud.x_pos+770,cloud.y_pos+150,cloud.size+60);
		ellipse(cloud.x_pos+770,cloud.y_pos+140,cloud.size+60);
		ellipse(cloud.x_pos+830,cloud.y_pos+170,cloud.size+60);
		ellipse(cloud.x_pos+830,cloud.y_pos+140,cloud.size+60);

	fill(220);
		ellipse(cloud.x_pos+200,cloud.y_pos+150,cloud.size+80);
		ellipse(cloud.x_pos+160,cloud.y_pos+150,cloud.size+60);
		ellipse(cloud.x_pos+240,cloud.y_pos+150,cloud.size+60);
		ellipse(cloud.x_pos+170,cloud.y_pos+150,cloud.size+60);
		ellipse(cloud.x_pos+170,cloud.y_pos+140,cloud.size+60);
		ellipse(cloud.x_pos+230,cloud.y_pos+170,cloud.size+60);
		ellipse(cloud.x_pos+230,cloud.y_pos+140,cloud.size+60);
	
	fill(220);
		ellipse(cloud.x_pos+500,cloud.y_pos+50,cloud.size+80);
		ellipse(cloud.x_pos+460,cloud.y_pos+50,cloud.size+60);
		ellipse(cloud.x_pos+540,cloud.y_pos+50,cloud.size+60);
		ellipse(cloud.x_pos+470,cloud.y_pos+50,cloud.size+60);
		ellipse(cloud.x_pos+470,cloud.y_pos+40,cloud.size+60);
		ellipse(cloud.x_pos+530,cloud.y_pos+70,cloud.size+60);
		ellipse(cloud.x_pos+530,cloud.y_pos+40,cloud.size+0);	
	
text(mouseX+","+mouseY, mouseX, mouseY);
}

function mousePressed()
{
  gameChar_x=mouseX;
  gameChar_y=mouseY;
  


}
