class Bob{
    constructor(x,y){
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,50,options)
        
        World.add(world,this.body)
        this.r1=50;
        
    }
    display(){
        var bobpos=this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(bobpos.x,bobpos.y,this.r1)
        
        
    }
}