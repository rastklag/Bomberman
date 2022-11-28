import Ennemy from "./enemy.js";

export default class Assassin extends Ennemy{

    constructor(width, height){
        super(width,height);
        this.color ='purple'
        this.lives = 5;
        this.score = this.lives;
        this.y = Math.random() * (this.gameHeight * 0.9 - this.height);

    }
}