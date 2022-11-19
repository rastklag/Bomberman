export default class Ennemy {
    constructor(width,heightGame){
        //this.game  = game;
        this.width = 15;
        this.height = 15;
        this.gameHeight = heightGame;
        this.x = width;
        this.y = 15;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDelection = false;
        this.maxSpeed = 2;  
        this.color = 'red';    
        this.lives = 1;
        this.score = this.lives;
    }
    update(){
        this.x += this.speedX;
        if (this.x + this.width < 0){
            this.markedForDelection = true;
        }
    }

    draw(context){
       
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.height);
    }
}