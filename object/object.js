

export default class Object {
    
    constructor(game, x , y ){

        this.game  = game;
        this.width = 8;
        this.height = 8;
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.lineWidth = 3;
        this.moveTimer = 0;
        this.maxmove = 15;
        this.currentmove = 0;
        this.direction = 0.5;
        this.moveInterval = 50;
        this.markedForDelection = false;
        this.rarity;
        this.Rarities = {
            white:  "white",
            green:  "green",
            blue:   "blue",
            yellow: "yellow",
            pink:   "pink",
            purple: "purple"}
        this.color;  
        this.colorStroke = 'black'; 
        this.effect;
        this.setRarity(); 
    }

    update(deltaTime){

    }

    draw(context){
        
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.height);


        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.colorStroke;
        context.stroke();


    }
    /**
     * 
     */
    payload(){

    }
    /**
     * 
     */
    setRarity(){

        // White < Blue <Green <Yellow <Orange <Pink <Purple

        let rarity = Math.floor(Math.random() * 100) + 1;
        // common     
        if (rarity <= 60 ){
           
            this.rarity = "white";

        }
        if (rarity > 60 && rarity <= 80){
            
            this.rarity = "green";
            
        }

        if (rarity > 80 && rarity <= 90){
           
            this.rarity = "blue";
        }

        if (rarity > 90 && rarity <= 95){
           
            this.rarity = "yellow";
        }

        if (rarity > 95 && rarity <= 99){
            
            this.rarity = "pink";
            
        }

        if (rarity == 100){
            this.rarity = "purple";
           
        }

        this.color = this.rarity;
            // White < Blue <Green <Yellow <Orange <Pink <Purple

    }
}