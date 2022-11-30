import State from "./state.js"
import UIMENU from "../ui/UIMENU.js";

export default class MenuState extends State{

    constructor(game){
        super(game);
        this.game = game;
        this.ui = new UIMENU(game, this);
        this.menuItems = ['Play','Option','Quit'];
        this.menuIndex = 0;

    }

    update(deltaTime){

    
        if (this.game.keys.includes('ArrowUp')){
            
            if (this.menuIndex > 0 ){
                this.menuIndex--;
            }else{
                this.menuIndex= this.menuItems.length - 1;
            }

        }
        if (this.game.keys.indexOf('ArrowUp') > -1){
            this.game.keys.splice(this.game.keys.indexOf('ArrowUp'), 1);
        }

        if (this.game.keys.includes('ArrowDown')){
            
            if (this.menuIndex < this.menuItems.length - 1 ){
                this.menuIndex++;
            }else{
                this.menuIndex= 0;
            }

        }
        if (this.game.keys.indexOf('ArrowDown') > -1){
            this.game.keys.splice(this.game.keys.indexOf('ArrowDown'), 1);
        }


        if (this.game.keys.includes('Enter')){
            if (this.menuIndex == 0){
                this.game.activeState = this.game.runState;
            }

            if (this.menuIndex == 1){
                this.game.activeState = this.game.optionState;
            }
        }
            
        if (this.game.keys.indexOf('Enter') > -1){
            this.game.keys.splice(this.game.keys.indexOf('Enter'), 1);
        }


    }

    draw(context){
      
        this.ui.draw(context, this.menuItems);
    }

}