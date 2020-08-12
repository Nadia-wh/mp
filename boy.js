class Boy{
    constructor(x,y){
        var options = {
            isStatic : true
        }
       
        this.body = Bodies.rectangle(x,y,190,190,options);
        this.width = 190;
        this.height = 190;
        this.image = loadImage("Plucking_Mangoes/boy.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y,this.width,this.height);
    }
}