class Player{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage ("sprites/humano.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
    imageMode(CENTER);
    fill("blue");
    image(this.image,pos.x, pos.y,this.width,this.height);
    }
}