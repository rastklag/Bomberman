import ObjBarrel from "../object/objBarrel.js";
import ObjFire from "../object/objFire.js";
import Particle from "../graphics/particles.js";
import State from "./state.js"

export default class GameState extends State{

    constructor(game){
        super(game);
        this.game = game;
        this.nb = new ObjBarrel(game, 200,200);
        
    }

    update(deltaTime){

           // test objet design
           //this.nb.update(deltaTime);
            
            if (this.game.EnemyTimer > this.game.EnemyInterval && this.game.enemies.length < this.game.maxEnemies){
                this.game.addEnemy();
                this.game.EnemyTimer = 0;
            }else{
                this.game.EnemyTimer += deltaTime;
            }
    
            this.game.player.update(deltaTime);
    
            this.game.enemies.forEach(enemy => {
                
                enemy.update();
                
                // test collision avec enemy et player
                if (this.game.checkCollision(this.game.player,enemy)){
                    enemy.removeElement = true;


                    this.game.player.shield -= enemy.UnitShieldRemovedOnHIt;
                    
                }

                // test collision avec enemy et projectiles
                this.game.player.projectiles.forEach(projectile =>{
                    if (this.game.checkCollision(enemy,projectile)){
                        projectile.removeElement =true;
                        let numPart = Math.random() * 10
                        for (let i = 0 ; i < numPart; i++){
                            //particule sur enemy touché
                            // un truc ici pas terrible si, l'ennemi est detruit les particules aussi ...
                            // peut être extraire les particules de l'object et les traiter le cran au dessus
                            // dans un array de particules
                            enemy.particles.push(new Particle(this.game,enemy.x, enemy.y));    
                        }
                        
                        enemy.lives--;
    
                        if (enemy.lives <= 0 ){
                            enemy.removeElement = true;
                            this.game.score += enemy.score;

                            //@todo test random pour affichage d'un power up
                        
                            let lootChance = Math.floor(Math.random() * 100) + 1;
                            if (lootChance > 40 && lootChance < 60){
                                this.game.objects.push(new ObjBarrel(this.game, enemy.x , enemy.y));    
                            }
                            if (lootChance > 60 && lootChance < 80){
                                this.game.objects.push(new ObjFire(this.game, enemy.x , enemy.y));    
                            }


                            this.game.deathParticles.push(new Particle(this.game,enemy.x, enemy.y, 15));  
                            
                            

                            
                        }
                    }
                });
                // test collision entre player et object    
                this.game.objects.forEach(obj =>{
                    obj.update(deltaTime);
                    if (this.game.checkCollision(this.game.player, obj)){
                        obj.removeElement = true;
                        
                        // on ajoute ici le bonus  ... je ne sais pas encore commetn cela va se faire
                        obj.payload();
                    }


                });
                
            });
    
            this.game.enemies = this.game.enemies.filter(enemy => !enemy.removeElement);
            this.game.objects = this.game.objects.filter(obj => !obj.removeElement);
            
            this.game.deathParticles.forEach(particle =>{
                particle.update();
            })
            
            this.game.deathParticles = this.game.deathParticles.filter(particle => !particle.removeElement);

           // console.log(this.game.objects);
    }

    draw(context){
        // test objet design
       // this.nb.draw(context);

        context.fillStyle = 'black';

        this.game.player.draw(context);

        this.game.enemies.forEach(enemy => {
            enemy.draw(context);
        });

        this.game.objects.forEach(obj => {
            obj.draw(context);
        });

        this.game.deathParticles.forEach(particle =>{
            particle.draw(context);
        })

        this.game.ui.draw(context);
    }

}