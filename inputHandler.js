export default class InputHandler{

    constructor(game){
        //this.game = game;
        window.addEventListener('keydown', function(e) {
        
    console.log (game.currentState)
            if (game.currentState == 'optionState'){

                if (e.key == 'p'){
                   
                    game.currentState = 'gameState';
                }


            }

            if (game.currentState = 'gameState'){
                   if (e.key == 'ArrowUp' || 
                   e.key == 'ArrowDown'  || 
                   e.key == 'ArrowLeft' || 
                   e.key == 'ArrowRight'){
       
                   // prevent multiple fire on keydown and hold
                   if (game.keys.indexOf(e.key) == -1){
                        game.keys.push(e.key);
                   }
                       
       
                   }else if (e.key == 'a'){
       
                    game.player.shootUp();
       
                   }else if (e.key == 'o'){
                       
                    game.currentState = 'optionState';

                   }else if (e.key == 'm'){
                       
                    game.currentState = 'menuState';
                   }
            }
        });
       
        window.addEventListener('keyup', function(e){
                   
            if (game.keys.indexOf(e.key) > -1){
                game.keys.splice(game.keys.indexOf(e.key), 1);
            }
       
            if (game.currentState == 'gameState'){
                       
            }
        });
    }
}