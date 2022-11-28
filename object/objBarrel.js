import Object from "./object.js";

export default class ObjBarrel extends Object{

    constructor(game ,x , y){
        super(game, x , y );
        this.ammo = this.rarityToNbAmmo(this.rarity);
    }

    payload(){
        this.game.player.ammo += this.ammo;
        this.ammo =0;
    }

    update(){

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

    /**
     * 
     * @param {*} rarity 
     */
    rarityToNbAmmo(rarity){

        switch (rarity) {
            case this.Rarities.white:
              return 5
            case this.Rarities.green:
                return 10
            case this.Rarities.blue:
              return 15
            case this.Rarities.yellow:
                return 20
            case this.Rarities.pink:
                return 25     
            case this.Rarities.purple:
                return 50     
            default:
              console.log(`Sorry, we are out of ${rarity}.`);
          }
    }
}