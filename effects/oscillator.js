import Effect from "./effect.js"

export default class Oscillator extends Effect{

    constructor(object,x,y){
        console.log(object,x,y);
        super(object,x,y); 
        this.moveTimer = 0;
        this.maxmove = 15;
        this.currentmove = 0;
        this.direction = 0.5;
        this.moveInterval = 50;
    }

    update(deltaTime){
        console.log('effect update oscillator');
        //@todo test d'oscillation  ... pas terrible 
        // à transferer dans une class effect 
        if (this.moveTimer > this.moveInterval ){
            
            if (this.currentmove < this.maxmove){
                this.currentmove++;
                this.object.y += this.direction;
            }else{
                if (this.direction > 0 ){
                    this.direction = -0.5
                }else{
                    this.direction = 0.5
                }
              this.currentmove = 0;
            }
            
            this.moveTimer = 0;
        }else{
            this.moveTimer += deltaTime;
        }  
        console.log (this.object.y);
    }

    draw(){}
}