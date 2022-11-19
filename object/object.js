export default class Object {
    
    constructor(game, x , y ){
        this.game  = game;
        this.width = 8;
        this.height = 8;
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.lineWidth = 3;

       // this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDelection = false;
       // this.maxSpeed = 2;  
        this.color = 'green';  
        this.colorStroke = '#003300'; 
      //  this.lives = 1;
       // this.score = this.lives;
    }
    update(){
         /**
           this.x += this.speedX;
        if (this.x + this.width < 0){
            this.markedForDelection = true;
        }
        */
    }

    draw(context){
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.height);


        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.colorStroke;
        context.stroke();


    }
}