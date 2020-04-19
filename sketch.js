var database;
var drawing = [],currentpath = [];
var canvas;
function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    canvas.mousePressed(startpath);
    canvas.mouseReleased(endpath);
}
function startpath(){
    currentpath = [];
    drawing.push(currentpath);
}
function draw(){
    background("white");
    if(mouseIsPressed){
        var point = {x:mouseX,y:mouseY};
        currentpath.push(point);
    }
    stroke("black");
    strokeWeight(4);
    for(var i = 0;i<drawing.length;i++){
        var path = drawing[i];
        beginShape();
        for(var j = 0;j<path.length;j++){
            vertex(path[j].x,path[j].y)
        }
        endShape();
    }
    text("S T A R T  D R A W I N G ! ! ! ! ! ",displayWidth/2-70,30);
}
function endpath(){

}