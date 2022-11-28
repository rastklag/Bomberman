import State from "./state.js"
import UIGAMEOVER from "../ui/UIGameOver.js";

export default class GameOverState extends State{

    constructor(game){
        super(game);
        this.game = game;
        this.ui = new UIGAMEOVER(game);
    }

    update(deltaTime){

        if (this.game.keys.includes('p')){
            this.game.init();
            this.game.activeState = this.game.stateGame;
        }
        
    }

    draw(context){
        //console.log('draUI GAMEOVER');
        this.ui.draw(context);
    }

}