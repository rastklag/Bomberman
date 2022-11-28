import State from "./state.js"
import UIOPTION from "../ui/uioption.js";

export default class OptionState extends State{

    constructor(game){
        super(game);
        this.game = game;
        this.ui = new UIOPTION(game);
    }

    update(deltaTime){
       
        if (this.game.keys.includes('p')){
            this.game.activeState = this.game.stateGame;
       }

       
    }

    draw(context){
        console.log('draUIOption');
        this.ui.draw(context);
    }

}