class Paper {
    constructor(x, y, r){
        this.paperIMG = loadImage("paper.png")
        var options = {
            isStatic:false,
		    restitution:0.3,
		    friction:0.5,
		    density:1.2
        }
        this.x=x
        this.y=y
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display() { 
        var paperposX=this.body.position.x;
        var paperposY = this.body.position.y;
        image(this.paperIMG, paperposX, paperposY-25, this.r, this.r)
        push() 
        //translate(paperpos.x, paperpos.y); 
        rectMode(CENTER) 
        strokeWeight(3); 
        fill(255,0,255) 
        //ellipse(0,0,this.r, this.r); 
        pop()
    }
}