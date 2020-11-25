class ball{
    constructor(x, y){
        var options = {isStatic: false, restitution: 0.3, density: 1};
        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("Ball.png");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 100, 100);
        pop();
    }
}