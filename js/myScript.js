
var laptop = { length:14, width:10 }; // in inches
var blueprint = { xPos:150, yPos:100, color:'#156B78', scale:30, strokeThickness:1 };
var portx = { length: laptop.length-2, width: laptop.width, jackHeight:6, finHeight:2, jackBase:4, lockBase:1.2, lockHeight:0.8, lockSlope:10 };
portx.lockSlope = Math.sqrt(Math.pow(portx.lockHeight,2)+Math.pow(portx.lockBase,2));
//grid
for(var i = 0; i < document.getElementById("myCanvas").width/2; i+=10){
  var grid1 = new Path.Line(i,0,i,document.getElementById("myCanvas").height/2);
  grid1.strokeColor = 'black';
  grid1.strokeColor.alpha = '0.02';
}
for(var i = 0; i < document.getElementById("myCanvas").height/2; i+=10){
  var grid1 = new Path.Line(0,i,document.getElementById("myCanvas").width/2,i);
  grid1.strokeColor = 'black';
  grid1.strokeColor.alpha = '0.02';
}

//text labels
var text = new PointText(new Point(blueprint.xPos+portx.width*blueprint.scale/2, blueprint.yPos+portx.length*blueprint.scale/2));
text.fillColor = '#59192A';
text.content = 'a';
text.fontFamily = 'ocr A Std';
text.fontSize = 1*blueprint.scale;

//dotted fold lines
var line1 = new Path.Line(blueprint.xPos+portx.width*blueprint.scale,blueprint.yPos,blueprint.xPos+portx.width*blueprint.scale,blueprint.yPos+portx.length*blueprint.scale);
line1.strokeColor='#156B78';
line1.dashArray = [2,3];

var line2 = new Path.Line(blueprint.xPos+portx.width*blueprint.scale+portx.jackHeight*blueprint.scale, blueprint.yPos, blueprint.xPos+portx.width*blueprint.scale+portx.jackHeight*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale);
line2.strokeColor='#156B78';
line2.dashArray = [2,3];

var line3 = new Path.Line(blueprint.xPos, blueprint.yPos, blueprint.xPos+(portx.width+2*portx.jackHeight)*blueprint.scale, blueprint.yPos);
line3.strokeColor = '#156B78';
line3.dashArray = [2,3];

var line4 = new Path.Line(blueprint.xPos, blueprint.yPos+portx.length*blueprint.scale, blueprint.xPos+(portx.width+2*portx.jackHeight)*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale);
line4.strokeColor = '#156B78';
line4.dashArray = [2,3];

var line5 = new Path.Line(blueprint.xPos+portx.lockBase*blueprint.scale,blueprint.yPos+portx.length*blueprint.scale/4,blueprint.xPos+portx.lockBase*blueprint.scale,blueprint.yPos+portx.length*blueprint.scale-portx.length*blueprint.scale/4);
line5.strokeColor = '#156B78';
line5.dashArray = [2,3];

var line6 = new Path.Line(blueprint.xPos, blueprint.yPos+portx.length*blueprint.scale-portx.length*blueprint.scale/4, blueprint.xPos, blueprint.yPos+portx.length*blueprint.scale/4);
line6.strokeColor = '#156B78';
line6.dashArray = [2,3];

var line7 = new Path.Line(blueprint.xPos-portx.lockSlope*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale-portx.length*blueprint.scale/4, blueprint.xPos-portx.lockSlope*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale/4);
line7.strokeColor = '#156B78';
line7.dashArray = [2,3];

var line8 = new Path.Line(blueprint.xPos-portx.lockSlope*blueprint.scale-portx.lockHeight*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale-portx.length*blueprint.scale/4, blueprint.xPos-portx.lockSlope*blueprint.scale-portx.lockHeight*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale/4);
line8.strokeColor = '#156B78';
line8.dashArray = [2,3];

/*
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
*/

//Main Outline
var outerPath = new Path();
//outerPath.strokeColor = 'yellow';
outerPath.add(new Point(blueprint.xPos,blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale/3, blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale/2, blueprint.yPos-portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos-portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos));
//outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+portx.jackHeight*blueprint.scale, blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*3*blueprint.scale/4), blueprint.yPos));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2), blueprint.yPos-portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos-portx.finHeight*blueprint.scale));
//cut 1 on jack
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos-2));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-portx.finHeight/2*blueprint.scale, blueprint.yPos-2));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-portx.finHeight/2*blueprint.scale, blueprint.yPos+2));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos+2));
//cut 2 on jack
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale-2));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-portx.finHeight/2*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale-2));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-portx.finHeight/2*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale+2));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale+2));


//outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*blueprint.scale/2), blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+2*(portx.jackHeight*blueprint.scale)-(portx.jackHeight*3*blueprint.scale/4), blueprint.yPos+portx.length*blueprint.scale));
//outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale+portx.jackHeight*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
//Put inclined cut here
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale-portx.jackBase*blueprint.scale+2+(portx.finHeight*portx.jackBase/(2*portx.jackHeight))*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale-portx.jackBase*blueprint.scale+2, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale-portx.finHeight/2*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale-portx.jackBase*blueprint.scale-2, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale-portx.finHeight/2*blueprint.scale));
outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale-portx.jackBase*blueprint.scale-2+(portx.finHeight*portx.jackBase/(2*portx.jackHeight))*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));

outerPath.add(new Point(blueprint.xPos+portx.width*blueprint.scale/2, blueprint.yPos+portx.length*blueprint.scale+portx.finHeight*blueprint.scale));
//asdnjsajkdklasdkjl
outerPath.add(new Point(blueprint.xPos+portx.lockBase*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale));
outerPath.add(new Point(blueprint.xPos, blueprint.yPos+portx.length*blueprint.scale));
//locks
outerPath.add(new Point(blueprint.xPos, blueprint.yPos+portx.length*blueprint.scale-portx.length*blueprint.scale/4));
outerPath.add(new Point(blueprint.xPos-portx.lockSlope*blueprint.scale-(portx.lockHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale-portx.length*blueprint.scale/4));
outerPath.add(new Point(blueprint.xPos-portx.lockSlope*blueprint.scale-(portx.lockHeight*blueprint.scale)-(portx.lockBase*2/3*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale-portx.length*blueprint.scale/4-portx.lockBase*2/3*blueprint.scale));
outerPath.add(new Point(blueprint.xPos-portx.lockSlope*blueprint.scale-(portx.lockHeight*blueprint.scale)-(portx.lockBase*2/3*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale/4+portx.lockBase*2/3*blueprint.scale));
outerPath.add(new Point(blueprint.xPos-portx.lockSlope*blueprint.scale-(portx.lockHeight*blueprint.scale), blueprint.yPos+portx.length*blueprint.scale/4));
outerPath.add(new Point(blueprint.xPos, blueprint.yPos+portx.length*blueprint.scale/4));

outerPath.add(new Point(blueprint.xPos, blueprint.yPos));
outerPath.strokeColor='black';
outerPath.strokeColor.alpha = '0.3';

var roundOuterPath = roundedCorner (outerPath, blueprint.scale/3);
roundOuterPath.strokeColor='#156B78';
roundOuterPath.strokeWidth= 1;

//guides
var guides = new Path();
guides.add(new Point(blueprint.xPos+portx.width*blueprint.scale-portx.jackBase*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale));
guides.add(new Point(blueprint.xPos+portx.width*blueprint.scale-portx.jackBase/2*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale+(Math.sqrt(Math.pow(portx.jackHeight*blueprint.scale, 2)-Math.pow(portx.jackBase*blueprint.scale/2, 2)))));
guides.add(new Point(blueprint.xPos+portx.width*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale));
guides.strokeColor='red';
guides.strokeColor.alpha = '0.3';

var jjjj = new Path.Circle(blueprint.xPos+portx.width*blueprint.scale,blueprint.yPos+portx.length*blueprint.scale,portx.jackHeight*blueprint.scale);
var arcG = new Path();
for(var i=jjjj.length*3/7; i<jjjj.length*7/8; i+=10){
  arcG.add(new Point(jjjj.getPointAt(i)));
}
arcG.strokeColor = 'blue';
arcG.strokeColor.alpha = '0.3';

var guides2 = new Path.Line(blueprint.xPos+portx.lockBase*blueprint.scale, blueprint.yPos, blueprint.xPos+portx.lockBase*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale);
guides2.strokeColor = 'red';
guides2.strokeColor.alpha = '0.3';

var guides3 = new Path.Line(blueprint.xPos+portx.lockBase*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale, blueprint.xPos+portx.width*blueprint.scale-portx.jackBase/2*blueprint.scale, blueprint.yPos+portx.length*blueprint.scale+(Math.sqrt(Math.pow(portx.jackHeight*blueprint.scale, 2)-Math.pow(portx.jackBase*blueprint.scale/2, 2))));
guides3.strokeColor = 'black';
guides3.strokeColor.alpha = '0.3';
//<-- guides

function roundedCorner(oPath, radius){//function for Rounded Corners ###########

  var OriginalRadius = radius;


  //color = oPath.strokeColor;
  //oPath.strokeColor = null;//removing the original path from view -- 'VANISH'
  var roundedPath = new Path();
  //roundedPath.strokeColor = color;

  tp = new Point(); //temporary point - PUC - point under consideration
  var arcFrom,arcTo,arcThrough;

  //Mother Loop ----------------------------------------------------------------
  for(var i = 0;i < oPath.segments.length-1; i++){
    //checking for quick turns - they fuck up corner radius
    radius = OriginalRadius;
    if(i>0 && i<oPath.segments.length-2){
    if(oPath.getOffsetOf(oPath.segments[i].point)+radius>oPath.getOffsetOf(oPath.segments[i+1].point) || (oPath.getOffsetOf(oPath.segments[i].point)-radius<oPath.getOffsetOf(oPath.segments[i-1].point))){
      console.log("TADA!!!!!!!!!!!!!!!!!!!!!!!!!!");
      radius = 2;
    } else {
      radius = OriginalRadius;
    }
  }


    tp = oPath.segments[i].point;
    arcTo = oPath.getPointAt(oPath.getOffsetOf(tp)+radius);
    if(i>0){
      arcFrom = oPath.getPointAt(oPath.getOffsetOf(tp)-radius);
    } else{
      arcFrom = oPath.getPointAt(oPath.length-radius);
    }



    console.log('PUC: index=['+i+'] point: '+tp);
    console.log('arcFrom['+(oPath.getOffsetOf(tp)+radius)+']'+arcFrom);
    console.log('arcTo['+(oPath.getOffsetOf(tp)-radius)+']'+arcTo);
    //console.log(arcFrom.x+radius/4,arcTo.y+radius/4);

    //spotter =Path.Circle(arcFrom,2);
    //spotter.fillColor='black';
    //spotter.fillColor.alpha = '0.3';

    //spotter =Path.Circle(arcTo,2);
    //spotter.fillColor='black';
    //spotter.fillColor.alpha = '0.3';

    //var sk = new Path.Line(arcFrom,arcTo);
    //sk.strokeColor = 'yellow';
    //sk.smooth();

    if(i==0){
      arcThrough = new Point(oPath.getPointAt(oPath.getOffsetOf(tp)+radius/4).x,oPath.getPointAt(oPath.length-radius/4).y);
      console.log('cv through: ',arcThrough);
      console.log('');
    } else if(i%2!=0){
      arcThrough = new Point(oPath.getPointAt(oPath.getOffsetOf(tp)-radius/4).x,oPath.getPointAt(oPath.getOffsetOf(tp)+radius/4).y);
      console.log('cv through: ',arcThrough);
      console.log('');
    } else if(i%2==0){
      arcThrough = new Point(oPath.getPointAt(oPath.getOffsetOf(tp)+radius/4).x,oPath.getPointAt(oPath.getOffsetOf(tp)-radius/4).y);
      console.log('cv through: ',arcThrough);
      console.log('');
    }

    /*
    //draw the curve
    var cv = new Path.Arc({
      from:arcFrom,
      through:arcThrough,
      to:arcTo,
      strokeColor: color
    });
    */

    //draw the lines
    roundedPath.add(new Point(arcFrom));
    roundedPath.arcTo(arcThrough,arcTo);
    //adding the last line
    if(i==oPath.segments.length-2){
      roundedPath.add(new Point(oPath.getPointAt(oPath.length-radius)));
    }
  }//end of Mother loop --------------------------------------------------------

  return roundedPath;

}//end of function #############################################################
