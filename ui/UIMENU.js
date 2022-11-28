export default class UIMENU {
    constructor (game){
        
        this.game = game;
        this.fontSize  = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'black';
    
    }

    draw(context){
        console.log('draW on menuUI');
        context.fillStyle = 'black';
        context.fillStyle = this.color;
        context.font = '38px serif';
        let str = '(MENU)';
        let xPos = ( this.game.width  / 2 ) - (context.measureText(str).width / 2);
        context.fillText(str, xPos ,( this.game.height  / 2 ))
       
    console.log(context.measureText(str).width / 2);
    }
}