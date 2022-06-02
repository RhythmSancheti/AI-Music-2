song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("PoseNet is Initialised");
}

function gotPoses(){
    if (results.length > 0){
        console.log(results);
        leftwristX=results[0].pose.leftwrist.X;
        leftwristY=results[0].pose.leftwrist.Y;
        rightwristX=results[0].pose.rightwrist.X;
        reghtwristY=results[0].pose.rightwrist.Y;

        console.log("leftwristX="+leftwristX+"leftwristY="+leftwristY);
        console.log("rightwristX="+rightwristX+"rightwristY"+rightwristY);
    }
}





