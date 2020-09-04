
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var gamestate="play";

var m1,m1img;
var m2,m2img;
var q,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l;
var q1,e1,r1,t1,y1,u1,i1,o1,p1,a1,s1,d1,f1,g1,h1,j1,k1,l1;

function preload()
{
  m1img=loadImage("images/front.png");
  m2img=loadImage("images/play.png")

  q=loadImage("images/().png");
  
  e=loadImage("images/(2).png");
  r=loadImage("images/(3).png");
  t=loadImage("images/(4).png");
  y=loadImage("images/(5).png");
  u=loadImage("images/(6).png");
  i=loadImage("images/(7).png");
  o=loadImage("images/(8).png");
  p=loadImage("images/(9).png");
  a=loadImage("images/(10).png");
  s=loadImage("images/(11).png");
  d=loadImage("images/(12).png");
  f=loadImage("images/(13).png");
  g=loadImage("images/(14).png");
  h=loadImage("images/(15).png");
  j=loadImage("images/(16).png");
  k=loadImage("images/(17).png");
  l=loadImage("images/(18).png");




}

function setup() {
	createCanvas(1537, 710);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(43,80,106);
  if (gamestate==="play"){
    play();
    textSize(20);
    fill ("white");
    textFont("bold")
    text ("PRESS SPACE TO PLAY",650,690)
  }
  if(keyCode ===32){
    gamestate="note";
  
  }

if(gamestate==="note"){
  background(0)
  q1=createSprite(150,50,200,20);
  q1.addImage("img",q);
  q1.scale=0.8;

  e1=createSprite(150,200,20,20);
  e1.addImage("img",e);
  e1.scale=0.8;

  r1=createSprite(150,350,20,20);
  r1.addImage("img",r);
  r1.scale=0.8;

  t1=createSprite(150,500,20,20);
  t1.addImage("img",t);
  t1.scale=0.8;

  y1=createSprite(150,650,20,20);
  y1.addImage("img",y);
  y1.scale=0.8;

  u1=createSprite(450,50,20,20);
  u1.addImage("img",u);
  u1.scale=0.8;

  i1=createSprite(450,200,20,20);
  i1.addImage("img",i);
  i1.scale=0.8;

  o1=createSprite(450,350,20,20);
  o1.addImage("img",o);
  o1.scale=0.8;

  p1=createSprite(450,500,20,20);
  p1.addImage("img",p);
  p1.scale=0.8;

  a1=createSprite(450,650,20,20);
  a1.addImage("img",a);
  a1.scale=0.8;

  s1=createSprite(450,650,20,20);
  s1.addImage("img",s);
  s1.scale=0.8;

  d1=createSprite(750,290,20,20);
  d1.addImage("img",d);

  f1=createSprite(750,290,20,20);
  f1.addImage("img",f);

  g1=createSprite(750,290,20,20);
  g1.addImage("img",g);

  h1=createSprite(750,290,20,20);
  h1.addImage("img",h);

  j1=createSprite(750,290,20,20);
  j1.addImage("img",j);

  k1=createSprite(750,290,20,20);
  k1.addImage("img",k);

  l1=createSprite(750,290,20,20);
  l1.addImage("img",l);

 

  
}
  drawSprites();
 
}

function play(){
  m1=createSprite(750,290,20,20);
  m1.addImage("img",m1img);
  m1.scale=1.5
  m2=createSprite(750,640,20,20);
  m2.addImage("img",m2img);
  m2.scale=0.5;
}




