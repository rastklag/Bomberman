export default class Projectile {

    constructor(game, x, y){
           this.game = game;
           this.x = x + game.player.width /2;
           this.y = y + (game.player.height /  2); 
           this.width = 10;
           this.height = 6;
           this.speed = 13;
           this.removeElement = false;
    }
    update(){
        this.x += this.speed;
        if (this.x > this.game.width){
            this.removeElement = true;
        }
    }

    draw(context){
        context.fillStyle = 'red';
          context.fillRect(this.x,this.y,this.width,this.height);  
    }
}