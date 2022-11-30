export default class UIMENU {
    constructor (game,state){
        
        this.game = game;
        this.state = state;
        this.fontSize  = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'grey';
        this.ColorSelected = 'white';

        this.YPos; 
    }

    draw(context,items){
        
        context.fillStyle = 'black';
        context.fillStyle = this.color;
        context.font = '38px serif';
        let str = '(MENU)';
        let xPos = ( this.game.width  / 2 ) - (context.measureText(str).width / 2);
        //context.fillText(str, xPos ,( this.game.height  / 2 ));
        console.log(this.state.menuIndex);
        items.forEach((item,index) => {

            this.YPos = 100 +  ( this.game.height  / 4 )  + ( 50 * index)
            // affichage rectangle de selection 
            if (index == this.state.menuIndex){
                context.fillStyle = this.ColorSelected;
            }else{
                context.fillStyle = this.color;
            }
            context.fillText(item, xPos ,this.YPos);
        });
        
    }
}