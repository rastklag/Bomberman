import State from "./state.js"
import UIMENU from "../ui/UIMENU.js";

export default class MenuState extends State{

    constructor(game){
        super(game);
        this.game = game;
        this.ui = new UIMENU(game);
        this.indexMenu = 0;
    }

    update(deltaTime){

        if (this.game.keys.includes('p')){
            this.game.activeState = this.game.stateGame;
        }

        if (this.game.keys.includes('p')){
            
        }


    }

    draw(context){
        console.log('draUIMenu');
        this.ui.draw(context);
    }

}