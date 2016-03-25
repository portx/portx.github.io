
var laptop = { length:14, width:10 };
var portx = { length: laptop.length-2, width: laptop.width, jackHeight:6, finHeight:2 };
var blueprint = { xPos:70, yPos:100, color:'#156B78', scale:30, strokeThickness:1 };




//base
var base = new Rectangle(blueprint.xPos,blueprint.yPos,portx.width*blueprint.scale,portx.length*blueprint.scale);
var path = new Path.Rectangle(base);
path.strokeColor = blueprint.color;


//jack1
var jack1 = new Rectangle(blueprint.xPos+portx.width*blueprint.scale,blueprint.yPos,portx.jackHeight*blueprint.scale,portx.length*blueprint.scale);
var path_jack1 = new Path.Rectangle(jack1);
path_jack1.strokeColor = blueprint.color;

//jack2
var jack2 = new Rectangle(blueprint.xPos+portx.width*blueprint.scale+portx.jackHeight*blueprint.scale,blueprint.yPos,portx.jackHeight*blueprint.scale,portx.length*blueprint.scale);
var path_jack2 = new Path.Rectangle(jack2);
path_jack2.strokeColor = blueprint.color;

//support fins
var fin1 = new Rectangle(blueprint.xPos+portx.width*blueprint.scale/2,blueprint.yPos-portx.finHeight*blueprint.scale,portx.width*blueprint.scale/2,portx.finHeight*blueprint.scale);
var path_fin1 = new Path.Rectangle(fin1);
path_fin1.strokeColor = blueprint.color;
//..
var fin2 = new Rectangle(blueprint.xPos+portx.width*blueprint.scale/2,blueprint.yPos+portx.length*blueprint.scale,portx.width*blueprint.scale/2,portx.finHeight*blueprint.scale);
var path_fin2 = new Path.Rectangle(fin2);
path_fin2.strokeColor = blueprint.color;

//lock fins
var fin3 = new Rectangle(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2),blueprint.yPos-portx.finHeight*blueprint.scale,portx.jackHeight*blueprint.scale/2,portx.finHeight*blueprint.scale);
var path_fin3 = new Path.Rectangle(fin3);
path_fin3.strokeColor = blueprint.color;
//..
var fin4 = new Rectangle(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2),blueprint.yPos+portx.length*blueprint.scale,portx.jackHeight*blueprint.scale/2,portx.finHeight*blueprint.scale);
var path_fin4 = new Path.Rectangle(fin4);
path_fin4.strokeColor = blueprint.color;

//Main Outline
var outerPath = new Path();
outerPath.strokeColor = blueprint.color;
outerPath.strokeWidth = 2;
outerPath.add(new Point(blueprint.xPos,blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale/2, blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale/2, blueprint.yPos-portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos-portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+portx.jackHeight*blueprint.scale, blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2), blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2), blueprint.yPos-portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos-portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2), blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2), blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+portx.jackHeight*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale/2, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale/2, blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos, blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos, blueprint.yPos));

outerPath.onMouseEnter = function(event) {
  this.strokeWidth = 2;
}
outerPath.onMouseLeave = function(event) {
  this.strokeWidth = 1;
}

var cv = new Path.Arc({
  from:[blueprint.xPos,blueprint.yPos+5],
  through:[blueprint.xPos+1,blueprint.yPos+1],
  to:[blueprint.xPos+5,blueprint.yPos],
  strokeColor: 'red'
});


/*
var arc1 = new Path.Arc(100,100,200,250,300,300);
arc1.strokeColor = 'black';
arc1.selected = true;
*/
