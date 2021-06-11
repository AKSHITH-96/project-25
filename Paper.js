class Paper {
    constructor(x, y, r){
       var options = {
           restitution : 0.3,
           friction : 0,
           density : 1.2
       }
       this.r =r 
       this.body = Bodies.circle(x,y,(this.r-20)/2,options);
       this.image = loadImage("paper.png");
       World.add(world,this.body);

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push()
        /*fill("white");
        stroke("white");*/
        translate(pos.x,pos.y);
        rotate(angle);
        scale(0.3);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        //ellipse(0,0,this.r,this.r);
        pop()

    }
};