class Bob {
    constructor(x, y, radius) {
      var options ={ 
        'restitution':1.0,
       'friction':1.0, 
       'density' : 1.2,
        'inertia' : Infinity,
         'frictionAir':0 
        }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
  
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  