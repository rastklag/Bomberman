export default class Particle {

    constructor(game, x ,y ){
        this.game = game;
        this.x = x;
        this.y = y;
        this.frameX = 1
        this.frameY = 1
        this.gravity = -0.5;
        this.speedX = Math.random() * 6  -3;
        this.speedY = Math.random() * -13;
        this.size = 5;
        this.markedforDeletion = false;
        this.angle= 0;


    }

    update(){
            //this.angle += this.va;
            this.speedY -= this.gravity;
            this.x  -= this.speedX;
            this.y  += this.speedY;

            if (this.y > this.game.height + this.size || this.y < 0 - this.size ){
                this.markedforDeletion = true;
            }

    }

    draw(context){
        context.fillStyle = 'red';
        context.fillRect(this.x,this.y,this.size,this.size);

    }
}