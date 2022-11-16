import Projectile from "./projectile.js";

 export default class Player {

    /**
     * 
     * @param {*} game 
     */
    constructor (game){
        // by ref always !!! not a copy
        this.game  = game;
        this.width = 50;
        this.height = 50;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.speedX = 0;
        this.maxSpeed = 2;
        this.projectiles =  [];
        this.ammo = 20;
        this.maxAmmo = 30;
        this.ammoTimer = 0;
        this.ammoInterval = 2500;
      
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
            this.speedY = -this.maxSpeed;
        }else if (this.game.keys.includes('ArrowDown')) {
            this.speedY = this.maxSpeed;
        }else this.speedY = 0;

        if (this.game.keys.includes('ArrowLeft')){
            this.speedX = -this.maxSpeed;

        }else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxSpeed;
        }else this.speedX = 0;




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