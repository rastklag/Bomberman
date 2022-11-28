export default class InputHandler{

    constructor(game){

        this.game = game;
        console.log(this.game.currentState);    
        window.addEventListener('keydown', e => {
            console.log(this.game.currentState);    
            

            if (this.game.currentState == 'gameOverState'){
                console.log("i'm in gameoverSate inputHandler");
                if (e.key == 'g'){
                   
                    this.game.currentState = 'gameState';
                    this.game.init(); 
                      
                }
            }

            console.log (this.game.currentState)
            if (this.game.currentState == 'optionState'){

                if (e.key == 'p'){
                   
                    this.game.currentState = 'gameState';
                }


            }

            if (this.game.currentState == 'gameState'){
                   if (e.key == 'ArrowUp' || 
                   e.key == 'ArrowDown'  || 
                   e.key == 'ArrowLeft' || 
                   e.key == 'ArrowRight' ||
                   e.key == 'g' || 
                   e.key == 'p' ||
                   e.key == 'a' ||  
                   e.key == 'o' ||
                   e.key == 'm'){
       
                   // prevent multiple fire on keydown and hold
                   if (this.game.keys.indexOf(e.key) == -1){
                    this.game.keys.push(e.key);
                   }
                       
       
                   }else if (e.key == 'a'){
       
                    this.game.player.shootUp();
       
                   }else if (e.key == 'o'){
                       
                    this.game.currentState = 'optionState';

                   }else if (e.key == 'm'){
                       
                    this.game.currentState = 'menuState';
                   }
            }


        });
       
        window.addEventListener('keyup', e =>{
                   
            if (game.keys.indexOf(e.key) > -1){
                game.keys.splice(game.keys.indexOf(e.key), 1);
            }
       
        });
    }
}