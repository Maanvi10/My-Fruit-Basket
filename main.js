x = 0;
y = 0;

width = "";
height = "";

apple= "";

orange="";

mango="";

watermelon="";

stawberry="";

banana="";

speak_data="";

to_number="";

function preload(){
apple= loadImage("a.png");

mango= loadImage("m.png");

watermelon= loadImage("w.png");

strawberry= loadImage("s.png");

banana= loadImage("b.png");

orange= loadImage("o.png");
}

draw_apple = "";

draw_o = "";

draw_m = "";

draw_b = "";

draw_s = "";

draw_w = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 to_number = Number(content);

 if (content == to_number + "Apples."){
  document.getElementById("status").innerHTML = "Initializing 'Apple' ";
  draw_apple= "set"
}
if (content == to_number + "Mangoes."){
  document.getElementById("status").innerHTML = "Initializing 'Mango' ";
  draw_m= "set"

 if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Drawing The Fruit";
  draw_apple="set";
 }else{
  document.getElementById("status").innerHTML ="Number not recognised."
 }
}

function setup() {

 width= window.innerWidth;
 height= window.innerHeight;
 canvas= createCanvas(width, height - 150)
 canvas.position(0, 100)

}

function draw() {
  if(draw_apple == "set")
  {
    for(var a=1; a <= to_number ; a ++){
      x= Math.floor(Math.random * 700);
      y= Math.floor(Math.random * 400) ;
      image(apple, x, y, 50, 50);
    } 
    speak_data = to_number +  "Apple/s drawn";
    document.getElementById("status").innerHTML = to_number + " Apple/s drawn";
    draw_apple = "";
  }
  if(draw_m == "set")
  {
    for(var m=1; m <= to_number ; m ++){
      x= Math.floor(Math.random * 700);
      y= Math.floor(Math.random * 400) ;
      image(mango, x, y, 50, 50);
    } 
    speak_data = to_number +  "Mango/s drawn";
    document.getElementById("status").innerHTML = to_number + " Mangoes/s drawn";
    draw_m = "";
  }


}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}
