

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0, 200, 100, 20);
    fill('yellow');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX, mouseY, 10,10,10);
    }

    if(mouseX < 200){
        rect(mouseX,mouseY,100,100)
    }else{
        rect(mouseX,mouseY,50,50,25);
    }

    for(var i = 0; i < 1000; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }

    for(var i = 0; i < 2000; i++){
        rect((i*15)%width,(i*5)%height,25,5);
    }
}