class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visblity=255
  }
 display() {
   if(this.body.velocity.x<3){
     super.display()
     
     
   }
   
   else{
     World.remove(world,this.body)
     push()
     tint(255,this.visblity)
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     this.visblity=this.visblity-5
     pop()
   }
 }
};