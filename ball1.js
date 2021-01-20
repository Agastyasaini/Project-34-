class BallClass2{
    constructor(x, y, width, height, angle) {
        var options = {
          'restitution':0.8,
          'frictionAir':0.002,
          'density':20.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster-01.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
}