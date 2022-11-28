
export default class Effect {

    constructor(object ,x , y){

        this.object = object;
        this.x= x ;
        this.y = y;
        this.moveTimer;
        this.maxmove;
        this.currentmove;
        this.direction;
        this.moveInterval;
    }

    

    update(deltaTime){
        console.log('mther update')
    }

    draw(context){
    
    }

 
}