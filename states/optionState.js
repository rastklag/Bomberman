import State from "./state.js"
import UIOPTION from "../ui/uioption.js";

export default class OptionState extends State{

    constructor(game){
        super(game);
        this.game = game;
        this.ui = new UIOPTION(game);
    }

    update(deltaTime){
       


       
    }

    draw(context){
        console.log('draUIOption');
        this.ui.draw(context);
    }

}