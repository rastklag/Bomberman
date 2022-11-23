/**
 * Juste une balle
 */
class Balle {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        };
        this.rayon = 10;

        this.colors = ['#400', '#500', '#600', '#900', '#b00', '#f00','#f20', '#f40', '#f60', '#f80', '#ea0', '#dc0', '#ce0'];
        this.currentColor = 0;
        this.color = this.colors[this.currentColor];

        this.vitesse = {
            x: 1,
            y: 1
        };
    }

    /**
     * Fait avancer la balle en fonction de sa vitesse.
     * La balle rebondit.
     *
     * Les dimensions de l'écran sont en dur.
     */
    updatePosition() {
        this.verifierRebond();

        this.position.x += this.vitesse.x;
        this.position.y += this.vitesse.y;

    }

    /**
     * Vérifie si la balle doit rebondir et change le vecteur vitesse si oui.
     */
    verifierRebond() {
        const limite = {x: 800, y: 600};

        // note: on tient compte de la taille de la balle, pas juste de son centre
        const bordDeLaBalle = {
            gauche: this.position.x - this.rayon,
            droit:  this.position.x + this.rayon,
            haut:   this.position.y - this.rayon,
            bas:    this.position.y + this.rayon
        };


        if (bordDeLaBalle.gauche + this.vitesse.x < 0) {
            this.vitesse.x = -this.vitesse.x;
        }

        if (bordDeLaBalle.haut + this.vitesse.y < 0) {
            this.vitesse.y = -this.vitesse.y;
        }

        if (bordDeLaBalle.droit + this.vitesse.x > limite.x) {
            this.vitesse.x = -this.vitesse.x;
        }

        if (bordDeLaBalle.bas + this.vitesse.y > limite.y) {
            this.vitesse.y = -this.vitesse.y;
        }
    }

    /**
     * Fait changer la balle de couleur
     */
    updateColor() {
        if (Date.now() % 2 === 0) {
            this.currentColor++;
            // retour au début si on dépasse la longueur du tableau
            this.currentColor = this.currentColor % this.colors.length;
        }
        this.color = this.colors[this.currentColor];
    }
}

export default Balle;
