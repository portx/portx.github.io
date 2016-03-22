
var baseWidth = 10;
var baseHeight = 12;

var jackPitch = 6;//height of the jack to lift the laptop
var finHeight = 2;

var scale = 30;

var xPos = 70;
var yPos = 100;

var color = '#156B78';
var thick = 2;
var thin = 1;




//base
var base = new Rectangle(xPos,yPos,baseWidth*scale,baseHeight*scale);
var path = new Path.Rectangle(base);
path.strokeColor = color;


//jack1
var jack1 = new Rectangle(xPos+baseWidth*scale,yPos,jackPitch*scale,baseHeight*scale);
var path_jack1 = new Path.Rectangle(jack1);
path_jack1.strokeColor = color;

//jack2
var jack2 = new Rectangle(xPos+baseWidth*scale+jackPitch*scale,yPos,jackPitch*scale,baseHeight*scale);
var path_jack2 = new Path.Rectangle(jack2);
path_jack2.strokeColor = color;

//support fins
var fin1 = new Rectangle(xPos+baseWidth*scale/2,yPos-finHeight*scale,baseWidth*scale/2,finHeight*scale);
var path_fin1 = new Path.Rectangle(fin1);
path_fin1.strokeColor = color;
//..
var fin2 = new Rectangle(xPos+baseWidth*scale/2,yPos+baseHeight*scale,baseWidth*scale/2,finHeight*scale);
var path_fin2 = new Path.Rectangle(fin2);
path_fin2.strokeColor = color;

//lock fins
var fin3 = new Rectangle(xPos+baseWidth*scale+2*(jackPitch*scale)-(jackPitch*scale/2),yPos-finHeight*scale,jackPitch*scale/2,finHeight*scale);
var path_fin3 = new Path.Rectangle(fin3);
path_fin3.strokeColor = color;
//..
var fin4 = new Rectangle(xPos+baseWidth*scale+2*(jackPitch*scale)-(jackPitch*scale/2),yPos+baseHeight*scale,jackPitch*scale/2,finHeight*scale);
var path_fin4 = new Path.Rectangle(fin4);
path_fin4.strokeColor = color;



/*
var arc1 = new Path.Arc(100,100,200,250,300,300);
arc1.strokeColor = 'black';
arc1.selected = true;
*/
