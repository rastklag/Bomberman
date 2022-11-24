import Object from "./object.js";

export default class ObjBarrel extends Object{

    constructor(game ,x , y){
        super(game, x , y );
        this.color ='purple'
        this.ammo = 20;
        
    }

    payload(){
        this.game.player.ammo += this.ammo;
        this.ammo =0;
    }

    draw(context){
        super.draw(context);
        let xoffset = 4;
        let yoffset = 4;
        let wbox = 3;
        let hbox = 8;
        context.fillStyle = this.colorStroke;
        context.fillRect(this.x - xoffset-1, this.y - yoffset, wbox, hbox);
        context.fillRect(this.x-1,this.y - yoffset, wbox, hbox);
        context.fillRect(this.x + xoffset-1, this.y- yoffset, wbox, hbox);
        context.fillStyle = this.color;

        
    }
}