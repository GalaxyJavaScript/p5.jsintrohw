function preload(){

}

function setup(){
    canvas = createCanvas(540,380);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0 , 0 , 540, 380);
    stroke("orange")
    fill("red")
    circle(50, 50, 50)
    circle(500, 50, 50)
    circle(50, 325, 50)
    circle(500, 325, 50)
    line(50, 50, 500, 50 )
    line(50, 325, 500, 325 )
    line(500, 50, 500, 325 )
    line(50, 325, 50, 50 )
}

function take_snapshot(){
    save('pictureeeeeeee.png');
}
