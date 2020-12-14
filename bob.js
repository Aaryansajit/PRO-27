class Bob {
    constructor(x ,y,diameter){
        var options = {
            isStatic : true,
            restituton:0.3,
            friction : 3,
            density :1.2
        }
        this.body=Bodies.circle(x,y,diameter/2,options);
        this.diameter=diameter;
        World.add(world,this.body); 

    }
    display(){
        push()
        fill("white");
        ellipseMode(RADIUS);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipse(0,0,this.diameter,this.diameter)
        pop()
    }
}