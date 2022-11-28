import Ennemy from "./enemy.js";

export default class Trouper extends Ennemy{

    constructor(game){
        super(game);
        this.color ='blue'
        this.lives = 3;
        this.score = this.lives;
        this.UnitShieldRemovedOnHIt = 8;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);

    }
}