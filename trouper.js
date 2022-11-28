import Ennemy from "./enemy.js";

export default class Trouper extends Ennemy{

    constructor(width,height){
        super(width,height);
        this.color ='blue'
        this.lives = 3;
        this.score = this.lives;
        this.y = Math.random() * (this.gameHeight * 0.9 - this.height);

    }
}