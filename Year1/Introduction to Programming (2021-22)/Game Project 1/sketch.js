/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the code comments. The items should appear next to the text titles.

Each bit of scenery is worth three marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery
3 marks = You went a bit further with your graphics

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.

When you have completed your game scenery upload here as a zip file.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
	fill(220);
		ellipse(800,150,80);
		ellipse(760,150,60);
		ellipse(840,150,60);
		ellipse(770,150,60);
		ellipse(770,140,60);
		ellipse(830,170,60);
		ellipse(830,140,60);

	fill(220);
		ellipse(200,150,80);
		ellipse(160,150,60);
		ellipse(240,150,60);
		ellipse(170,150,60);
		ellipse(170,140,60);
		ellipse(230,170,60);
		ellipse(230,140,60);
	
	fill(220);
		ellipse(500,50,80);
		ellipse(460,50,60);
		ellipse(540,50,60);
		ellipse(470,50,60);
		ellipse(470,40,60);
		ellipse(530,70,60);
		ellipse(530,40,60);	

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
	fill('#8b6d62')
		triangle(652,22,830,432,450,432);
		triangle(429,82,558,432,264,432);
	fill('#6f4e42');
		triangle(652,22,830,432,760,432);
		triangle(429,82,558,432,460,432);
	fill('FFFFFF');
		triangle(652,22,667,77,618,91);
		quad(652,22,686,100,667,78,649,88);
		triangle(429,82,445,126,412,119);
		quad(429,82,434,130,422,120,406,131);
		
	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
	fill('#1c7f28');
		arc(706, 407, 80, 80, radians(90),radians(270));
		arc(328, 411, 80, 80, radians(90),radians(270));
		arc(480, 403, 80, 80, radians(270),radians(90));
	fill('#1b5d1f');
		arc(706, 407, 80, 80, radians(270),radians(90));
		arc(328, 411, 80, 80, radians(270),radians(90));
		arc(480, 403, 80, 80, radians(90),radians(270));
	fill('#6f4e42');
		rect(700,446,14,25);
		rect(321,450,14,25);
		rect(473,443,14,25);

	noStroke();
	fill(255);
	text("tree", 308, 365);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here

	//Wall for Canyon A
	fill('#8b6d62')
	quad(0,431,0,576,259,576,264,431);
	
	//Top for Canyon A 
	fill('#6f4e42')	
	strokeWeight(1);
	stroke(0);

	beginShape();
		vertex(1, 431);
		vertex(15,436);
		vertex(15,436);
		vertex(38, 437);
		vertex(38, 437);  
		vertex(54, 435);
		vertex(54, 435);
		vertex(97, 441);
		vertex(97,441);
		vertex(157,436);
		vertex(157,436);
		vertex(199,439);
		vertex(199,439);
		vertex(219,439);
		vertex(219,439);
		vertex(252,443);
		vertex(252,443);
		vertex(264,431);
		vertex(264,431);
		vertex(1,431);
	endShape();

// Top of Canyon B
fill(0,155,0)
	beginShape();
		vertex(264,431);
		vertex(256,454);
		vertex(256,454);
		vertex(169,466);
		vertex(169,466);
		vertex(125,469);
		vertex(125,469);
		vertex(111,476);
		vertex(111,476);
		vertex(121,479);
		vertex(121,479);
		vertex(139,481);
		vertex(139,481);
		vertex(132,488);
		vertex(132,488);
		vertex(157,496);
		vertex(157,496);
		vertex(179,491);
		vertex(179,491);
		vertex(186,501);
		vertex(186,501);
		vertex(204,511);
		vertex(204,511);
		vertex(194,517);
		vertex(194,517);
		vertex(210,525);
		vertex(210,525);
		vertex(234,524);
		vertex(234,524);
		vertex(259,576);
	endShape();

// Top of Canyon C 	
fill('#6f4e42')
	beginShape();
		vertex(1,431);
		vertex(15,438);
		vertex(15,438);
		vertex(30,440);
		vertex(30,440);
		vertex(37,440);
		vertex(37,440);
		vertex(47,445);
		vertex(47,445);
		vertex(64,447);
		vertex(64,447);
		vertex(81,449);
		vertex(81,449);
		vertex(87,454);
		vertex(87,454);
		vertex(73,460);
		vertex(73,460);
		vertex(56,466);
		vertex(56,466);
		vertex(45,475);
		vertex(45,475);
		vertex(29,476);
		vertex(29,476);
		vertex(0,475);
	endShape();

//Top of Canyon D
fill('#6f4e42')
	beginShape();
		vertex(0,489);
		vertex(50,511);
		vertex(50,511);
		vertex(61,519);
		vertex(61,519);
		vertex(86,528);
		vertex(86,528);
		vertex(90,539);
		vertex(90,539);
		vertex(102,547);
		vertex(102,547);
		vertex(81,558);
		vertex(81,558);
		vertex(58,563);
		vertex(58,563);
		vertex(38,568);
		vertex(38,568);
		vertex(21,567);
		vertex(21,567);
		vertex(10,569);
		vertex(10,569);
		vertex(0,576);
	endShape();

	//Wall of Canyon C
	fill('#8b6d62')
	beginShape();
		vertex(87,454);
		vertex(68,493);
		vertex(68,493);
		vertex(67,508);
		vertex(67,508);
		vertex(61,519);
		vertex(61,519);
	    vertex(50,511);
		vertex(50,511);
		vertex(0,489);
		vertex(0,489);
		vertex(0,475);
		vertex(0,475);
		vertex(29,476);
		vertex(29,476);
		vertex(45,475);
		vertex(45,475);
		vertex(56,466);
		vertex(56,466);
		vertex(73,460);
		vertex(73,460);
		vertex(87,454);
	endShape();
	
	//Wall of Canyon D
	fill('#8b6d62')
	beginShape();
		vertex(102,547);
		vertex(81,558);
		vertex(81,558);
		vertex(58,563);
		vertex(58,563);
		vertex(38,568);
		vertex(38,568);
		vertex(21,567);
		vertex(21,567);
		vertex(10,569);
		vertex(10,569);
		vertex(0,576);
		vertex(0,576);
		vertex(94,576);
		vertex(94,576);
		vertex(102,547);
	endShape();
	
	//Wall of Canyon B
	fill('#8b6d62')
	beginShape();
		vertex(111,476);
		vertex(121,479);
		vertex(121,479);
		vertex(139,481);
		vertex(139,481);
		vertex(132,488);
		vertex(132,488);
		vertex(157,496);
		vertex(157,496);
		vertex(179,491);
		vertex(179,491);
		vertex(186,501);
		vertex(186,501);
		vertex(204,511);
		vertex(204,511);
		vertex(194,517);
		vertex(194,517);
		vertex(210,525);
		vertex(210,525);
		vertex(234,524);
		vertex(234,524);
		vertex(259,576);
		vertex(259,576);
		vertex(117,576);
		vertex(117,576);
		vertex(146,543);
		vertex(146,543);
		vertex(138,526);
		vertex(138,526);
		vertex(124,502);
		vertex(124,502);
		vertex(111,476);
	endShape();	
	
	
	
	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
	//Collective Item Is A Wand
	triangle();
	fill('#f2bb70');
		triangle(936,340,967,378,905,378);
		triangle(936,386,967,350,905,350);
		

	fill('#cd7139');
		quad(929,379,943,379,936,413,933,430);


	noStroke();
	fill(255);
	text("collectable item", 890, 335);

	text(mouseX+","+mouseY, mouseX, mouseY);
	
}
