export default class UI {
    constructor (game){
        
        this.game = game;
        this.fontSize  = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'yellow';
    
    }

    draw(context){

        
            // ammo
            context.fillStyle = this.color;
            context.font = '18px serif';
            context.fillText('('+this.game.player.ammo + ')', 1, 43)
            for(let i = 0; i < this.game.player.ammo; i++){
                context.fillRect( (38 + 5 * i),30,3,15);

            }  

            context.fillText('Score : '+ this.game.score , 400, 43)
       
    
    }
}