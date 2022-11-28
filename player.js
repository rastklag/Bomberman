import Projectile from "./projectile.js";

 export default class Player {

    /**
     * 
     * @param {*} game 
     */
    constructor (game){
        // by ref always !!! not a copy
        this.game  = game;
        this.width = 25;
        this.height = 25;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.speedX = 0;
        this.maxSpeed = 4;
        this.projectiles =  [];
        this.ammo = 20;
        this.shield = 100
        this.maxShield = 100
        
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;
        this.BonusFire = false;
      
    } 
    /**
     * 
     */
    update(deltaTime){

        if (this.ammoTimer > this.ammoInterval && this.ammo < this.maxAmmo){
            this.ammo++;
            this.ammoTimer = 0;
        }else{
            this.ammoTimer += deltaTime;
        }

        if (this.game.keys.includes('ArrowUp')){
            this.speedY = Math.max(-this.maxSpeed, this.speedY - this.maxSpeed/10)
        }else if (this.game.keys.includes('ArrowDown')) {
            this.speedY = Math.min(this.maxSpeed, this.speedY + this.maxSpeed/10);
        }else this.speedY = this.speedY/1.1;

        if (this.game.keys.includes('ArrowLeft')){
            this.speedX = Math.max(-this.maxSpeed, this.speedX - this.maxSpeed/10);

        }else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = Math.min(this.maxSpeed, this.speedX + this.maxSpeed/10);
        }else this.speedX = this.speedX/1.1;




        this.y += this.speedY;
        this.x += this.speedX;


        this.projectiles.forEach(projectile => {
            projectile.update();
        });

        //delete marked projectile
        this.projectiles = this.projectiles.filter(projectile => !projectile.markedForDelection);
        

        
    }
    /**
     * 
     * @param {*} context 
     */
    draw(context){
        context.fillStyle = 'black';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.fillRect(this.x + this.width,this.y + this.width / 4,this.width/2,this.height/2);

        this.projectiles.forEach(projectile => {
            projectile.draw(context);
        });
        
    }

    shootUp(){
        if (this.ammo > 0){
            this.projectiles.push(new Projectile(this.game, this.x, this.y));
            this.ammo--;
            //console.log(this.projectiles);
        } 
        
    }

}