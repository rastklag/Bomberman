export default class InputHandler{

    constructor(game){
        this.game = game;
        window.addEventListener('keydown', e => {

            if (e.key == 'ArrowUp' || 
                e.key == 'ArrowDown'  || 
                e.key == 'ArrowLeft' || 
                e.key == 'ArrowRight'){

                // prevent multiple fire on keydown and hold
                if (this.game.keys.indexOf(e.key) == -1){
                  this.game.keys.push(e.key);
                }

            }else if (e.key == 'a'){
                this.game.player.shootUp();
            }

            console.log(this.game.keys);

        });

        window.addEventListener('keyup', e => {
            
            if (this.game.keys.indexOf(e.key) > -1){
                this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
            }
        });
    }
}