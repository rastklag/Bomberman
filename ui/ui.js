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
            context.font = '15px serif';
           // context.fillText('('+this.game.player.ammo + ')', 1, 40)
            for(let i = 0; i < this.game.player.ammo; i++){
                context.fillRect( (38 + 3 * i),30,2,10);

            }

            context.fillStyle = 'blue';
            context.font = '18px serif';
            //context.fillText('('+this.game.player.shield + ')', 1, 65)
            for(let i = 0; i < this.game.player.shield; i++){
                context.fillRect( (37 + 1 * i),43,2,10);

            }
            // SHIELD


            context.fillText('Score : '+ this.game.score , 400, 43)
       
    
    }
}