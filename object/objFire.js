import Object from "./object.js";

export default class ObjFire extends Object{

    constructor(game ,x , y){
        super(game, x , y );
        this.color ='orange'
        this.ammo = 20;
        
    }

    payload(){
        this.game.player.BonusFire = true;
    }

    draw(context){
        super.draw(context);
        let xoffset = 4;
        let yoffset = 4;
        let wbox = 3;
        let hbox = 8;
        context.fillStyle = this.colorStroke;

        context.font='13px FontAwesome';
        context.fillText('\uf06d',this.x-5,this.y+3);
        // context.fillRect(this.x - xoffset-1, this.y - yoffset, wbox, hbox);
        // context.fillRect(this.x-1,this.y - yoffset, wbox, hbox);
        // context.fillRect(this.x + xoffset-1, this.y- yoffset, wbox, hbox);
        context.fillStyle = this.color;

        
    }
}