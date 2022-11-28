export default class State {

    constructor() {
        if(this.constructor == State){
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }
    
    update(deltaTime){
        throw new Error("Abstract Method has no implementation");
    }

    draw(context){
        throw new Error("Abstract Method has no implementation");
    }
}