import Player from "./player.js";



import UI from "./ui/ui.js";
import UIMENU from "./ui/UIMENU.js";
import UIOPTION from "./ui/uioption.js";

import Trouper from "./enemy/trouper.js";
import Assassin from "./enemy/assasin.js";

import GameState from "./states/gameState.js";
import MenuState from "./states/menuState.js";
import OptionState from "./states/optionState.js";
import GameOverState from "./states/gameOverState.js";
import InputHandler from "./inputHandler.js";

export default class Game {

    constructor (width, height){

        this.width = width;
        this.height = height;
        this.keys = [];
        this.enemies = [];
        this.objects = [];
        this.player = new Player(this);
        
        this.ui = new UI(this);
        this.uimenu = new UIMENU(this);
        this.uioption = new UIOPTION(this);
        this.maxEnemies = 15;
        this.EnemyInterval = 1500;
        this.EnemyTimer = 0;
        this.score = 0;
        this.states = {
            run: 'gameState',
            option :'optionState',
            menu :'menuState',
            gameover:'gameOverState'
        }
        this.currentState = this.states.run;
        this.stateGame = new GameState(this);
        this.menuGame = new MenuState(this);
        this.optionGame = new OptionState(this);
        this.GameOverState = new GameOverState(this);
        this.activeState = this.stateGame;
        this.deathParticles = [];
        this.input = new InputHandler(this);
        console.log('game constructor');
    }

    init(){

        this.score = 0;
        this.enemies = [];
        this.player.x = 20;
        this.player.y = 100;
        this.player.ammo = 10;
        this.player.shield = 100;
        this.objects = [];
    }

    /**
     * 
     * @param {*} deltaTime 
     */
    update(deltaTime){   

     this.setState(this.keys);
     this.activeState.update(deltaTime);
    }

    /**
     * 
     * @param {*} context 
     */
    draw(context){
        this.activeState.draw(context);
        
    }

    setState(keys){
        if (keys.includes('o')){
             this.activeState = this.optionGame;
        }else if (keys.includes('m')){
             this.activeState = this.menuGame;
        }
        else if (this.player.shield <=  0){ 
          this.activeState = this.GameOverState;
      }
    }
    /**
     * a bouger dans level handler  ou wave handler
     */
    addEnemy(){
        let r = Math.floor(Math.random() * 100) + 1;
        if (r < 80 ){
            this.enemies.push(new Trouper(this));
        }else{
            this.enemies.push(new Assassin(this));
        }
    }

     /**
      * 
      * @param {*} rect1 
      * @param {*} rect2 
      */   
    checkCollision(rect1,rect2){
        return ( rect1.x < rect2.x + rect2.width &&
                 rect1.x + rect1.width > rect2.x   &&
                 rect1.y < rect2.y + rect2.height &&
                 rect1.y + rect1.height > rect2.y 
        )
    }

}