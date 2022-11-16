import Player from "./player.js";
import InputHandler from "./inputHandler.js";
import UI from "./ui.js";
import Trouper from "./enemy/trouper.js";
import Assassin from "./enemy/assasin.js";


export default class Game {

    constructor (width, height){
        this.width = width;
        this.height = height;
        this.keys = [];
        this.enemies = [];
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.ui = new UI(this);
        this.maxEnemies = 15;
        this.EnemyInterval = 1500;
        this.EnemyTimer = 0;
        this.score = 0;
    } 


    /**
     * 
     * @param {*} deltaTime 
     */
    update(deltaTime){
        
        if (this.EnemyTimer > this.EnemyInterval && this.enemies.length < this.maxEnemies){
            this.addEnemy();
            this.EnemyTimer = 0;
        }else{
            this.EnemyTimer += deltaTime;
        }

        this.player.update(deltaTime);

        this.enemies.forEach(enemy => {
            enemy.update();
            if (this.checkCollision(this.player,enemy)){
                enemy.markedForDelection = true;
            }
            this.player.projectiles.forEach(projectile =>{
                if (this.checkCollision(enemy,projectile)){
                    projectile.markedForDelection =true;
                    enemy.lives--;

                    if (enemy.lives <= 0 ){
                        enemy.markedForDelection = true;
                        this.score += enemy.score;
                    }
                }
            });
        });

        this.enemies = this.enemies.filter(enemy => !enemy.markedForDelection);
    }

    /**
     * 
     * @param {*} context 
     */
    draw(context){
        context.fillStyle = 'black';

        this.player.draw(context);

        this.enemies.forEach(enemy => {
            enemy.draw(context);
        });

        this.ui.draw(context);
    }

    /**
     * 
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