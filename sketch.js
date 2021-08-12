var bg ;
var cat , catImg1,catImg2,catImg3;
//var mouse, mouseImg1,mouseImg2,mouseImg3

function preload() {
    bg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png","images/cat3.png")
    catImg3 = loadimage("images/cat4.png");
    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600);
    cat1.addImage("cat_sitting",catImg1);
    cat.scale = 0.1

    mouse = createSprite(200,650)

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
