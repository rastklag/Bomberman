export default class UIGAMEOVER {
    constructor (game){
        
        this.game = game;
        this.fontSize  = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'black';
    
    }

    draw(context){
        
        console.log('draW on optionUI');
        context.fillStyle = 'white';
        context.fillStyle = this.color;
        context.font = '38px serif';
        context.fillText('GAME OVER', 100, 443)
       
    
    }
}