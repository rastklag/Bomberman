export default class UIGAMEOVER {
    constructor (game){
        
        this.game = game;
        this.fontSize  = 55;
        this.fontFamily = 'Helvetica';
        this.color = 'white';
    
    }

    draw(context){
        
        //console.log('draW on optionUI');
        
        context.fillStyle = this.color;
        context.font = this.fontSize+'px serif';
        let str = 'GAME OVER';
        let finalScore = this.game.score + ' pts';
        let xPos = ( this.game.width  / 2 ) - (context.measureText(str).width / 2);
        context.fillText(str, xPos ,( this.game.height  / 2 ))

        xPos = ( this.game.width  / 2 ) - (context.measureText(finalScore).width / 2);
        context.fillText(finalScore, xPos ,( this.game.height  / 2 ) + 55)
        
       
    
    }
}