status="";
user_data="";

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
    user_data=document.getElementById("input").value;
    console.log(user_data);
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
}

function draw(){
    image(video,0,0,640,420);
}