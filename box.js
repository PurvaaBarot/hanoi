class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    console.log(pos)
    var ang=this.body.angle;
    push();
    translate(pos.x,pos.y);
    
    rotate(ang);
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    pop();
  }
};
