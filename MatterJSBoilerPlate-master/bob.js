class Bob{
    constructor(x,y) {
        var options={
            restitution: 0.9,
            friction: 0,
            density: 1.2
        }
    
        this.body=Bodies.circle(x,y,10,options);

        World.add(world,this.body);
    }

    display() {
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop();
    }
}