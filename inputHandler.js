export default class InputHandler{

    constructor(game){

        this.game = game;
        
        window.addEventListener('keydown', e => {
         
            if (e.key == 'ArrowUp' || 
                   e.key == 'ArrowDown'  || 
                   e.key == 'ArrowLeft' || 
                   e.key == 'ArrowRight' ||
                   e.key == 'g' || 
                   e.key == 'p' ||
                   e.key == 'a' ||  
                   e.key == 'o' ||
                   e.key == 'm'){
       
                   //@todo ajouter un test ici pour voir si la key est déjà presente
                   // pour prevenir du hold pressed effect sur les munitions
                   if (this.game.keys.indexOf(e.key) == -1){
                    this.game.keys.push(e.key);
                   }
                }            
        });
       

        
        window.addEventListener('keyup', e =>{
               
            // on retire le dernier element de l'array 
            if (game.keys.indexOf(e.key) > -1){
                game.keys.splice(game.keys.indexOf(e.key), 1);
            }
       
        });
    }
}