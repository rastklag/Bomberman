
import State from "./state.js"

export default class InventoryState extends State{

    constructor(game){
        super(game);
        this.game = game;
        
        
    }

    update(deltaTime){
       
        if (this.game.keys.includes('p')){
            this.game.activeState = this.game.runState;
        }
           
   
    }

    draw(context){
        
    }

}