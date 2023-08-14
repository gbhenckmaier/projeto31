class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.trajectory = [];
    //escreva um código para definir uma matriz chamada trajectory (trajetória)
   if(this.PlayerArrow.velocity.x > 0 && this.PlayerArrow.velocity.x > 300) {
    var position = [this.playerarrow.velocity.x, this.PlayerArrow.velocity.y];
   }
    
    World.add(world, this.body);
  }
  shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      
        /****escreva um 
         código para adicionar a posição 
         atual da flecha a 
        matriz trajectory (trajetória)**/
        if (this.PlayerArrow.velocity.x > 0 && this.PlayerArrow.position.x > 400) {
          var position = [this.body.position.x, this.PlayerArrow.position.y];
          this.trajectory.push(position);
      }
  

      /****escreva um código correto para adicionar o loop for e exibir pequenos pontos
           em todas as posições armazenadas na matriz trajectory (trajetória)
           *******/
           for  (var i = 0; i < this.trajectory.length; i++ ) { 
            image(this.image, this.trajectory[i][0],this.trajectory[i][1], 5,5);
            }
         
  }
}