
import Game from "./game.js";
import InputHandler from "./inputHandler.js"
window.addEventListener('load', function (){

//canvas setup
const canvas = document.getElementById('canvas1');
const ctx  = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;





class Layer {

}

class Background {

}

const game = new Game(canvas.width, canvas.height);
const input = new InputHandler(game);
let lastTime = 0;

// Loop game 
function animate(timeStamp){
    // timeStamp come from  silented requestAnimationFrame argument 
    const deltaTime = timeStamp - lastTime;
   // console.log(deltaTime);
    lastTime = timeStamp;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);

    // recusive call that make the loop game effective
    requestAnimationFrame(animate);
}

// first timestamp passed here to zero
animate(0);
});