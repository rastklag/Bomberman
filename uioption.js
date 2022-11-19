export default class UIOPTION {
    constructor (game){
        
        this.game = game;
        this.fontSize  = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'black';
    
    }

    draw(context){
        
        console.log('draW on optionUI');
        context.fillStyle = 'black';
        context.fillStyle = this.color;
        context.font = '38px serif';
        context.fillText('(OPTION)', 100, 443)
       
    
    }
}