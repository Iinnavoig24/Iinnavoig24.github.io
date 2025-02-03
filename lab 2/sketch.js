var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    color: 'red',
    draw: function(){
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width -this.w){
            this.xSpeed *= -1;
        }
        if (this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 2,
    color: 'blue',
    draw: function(){
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(720,480);
};

function draw(){
    background('grey')
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();

};
