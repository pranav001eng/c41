
var distance = 0;

var form;
var car, car1, car3, car4, track;
var track_img, car_img , car1_img, car3_img, car4_img;

function preload(){
  track_img = loadImage("images/track.jpg");
  car_img = loadImage("images/car.png");
  car1_img = loadImage("images/car1.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  track = createSprite(500,300);
  track.addImage("track infinite",track_img);
  track.scale = 10;
  track.velocityY = 5;

  car = createSprite(420,900);
  car.addImage("car running",car_img);
  car.scale = 0.1;
}

function draw() {
  background(150);  

  //form = new Form();
  //form.display();

  if (track.y > displayHeight-30){
    track.y = track.height/2
  }

  drawSprites();
}

