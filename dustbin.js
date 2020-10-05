class dustbin {
        constructor(x,y,width,height) {
          var options = {
              isStatic: true
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = 170;
          this.height = 190;
          this.image = loadImage("dustbingreen.png");
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          imageMode(CENTER);
          image(this.image, 650, 580,this.width, this.height);
        }
      };