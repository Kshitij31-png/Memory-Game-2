//var cards = [];
const numberOfRows = 4;
const numberofColumns = 4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var tries = 0;
var engine, world;
var cards=[]
function preload() {
cardImg = loadImage("Card.png");
Img1 = loadImage("1.png");
Img2 = loadImage("2.png");
Img3 = loadImage("3.jpg");
Img4 = loadImage("4.png");
Img5 = loadImage("5.png");
}
function setup() {
createCanvas(1000, 1000);
engine = Engine.create();
world = engine.world;
card1 = createSprite(200,200,120,170);
card1.addImage(cardImg);
card1.scale=0.8;
card2 = createSprite(400,200,120,170);
card2.addImage(cardImg);
card2.scale=0.8;
card3 = createSprite(600,200,120,170);
card3.addImage(cardImg);
card3.scale=0.8;
card4 = createSprite(200,500,120,170);
card4.addImage(cardImg);
card4.scale=0.8;
card5 = createSprite(400,500,120,170);
card5.addImage(cardImg);
card5.scale=0.8;
card6 = createSprite(600,500,120,170);
card6.addImage(cardImg);
card6.scale=0.8;
card7 = createSprite(200,800,120,170);
card7.addImage(cardImg);
card7.scale=0.8;
card8 = createSprite(400,800,120,170);
card8.addImage(cardImg);
card8.scale=0.8;
card9 = createSprite(600,800,120,170);
card9.addImage(cardImg);
card9.scale=0.8;
cards = [card1,card2,card3,card4,card5,card6,card7,card8,card9];
}
function draw() {
background("orange");
Engine.update(engine);
if(tries!==3 && keyDown("space")){
  var i=1
  while(i<10)
  {
    var x = random(Img1,Img2,Img3,Img4,Img5)
     cards[i].addImage("mage",Img1);
    i++;
  }
  // rand = Math.round(random(1,5));
  // switch(rand){
  //   case 1: 
  // }
}
 

drawSprites();
}

// function createCard() {
// for (var i = 0; i < numberofColumns; i = i + 1) {
//   for (var j = 0; j < numberOfRows; j = j + 1) {
//     fill("blue")
//     // rect(i*150+30,j*150+50,40,40);
//     card = createSprite(i * 150 + 30, j * 150 + 50, 40, 40);
//     cards.add(card);

//     // rect(i*380+30,j*380+50,40,40);
//   }
// }
// }




