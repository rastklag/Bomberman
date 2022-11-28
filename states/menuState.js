import State from "./state.js"
import UIMENU from "../ui/UIMENU.js";

export default class MenuState extends State{

    constructor(game){
        super(game);
        this.game = game;
        this.ui = new UIMENU(game);
    }

    update(deltaTime){
    }

    draw(context){
        console.log('draUIMenu');
        this.ui.draw(context);
    }

}