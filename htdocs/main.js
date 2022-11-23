import Balle from './balle.js';
// import CanvasTool from './canvas-tool.js';

function main() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let running;

    // const ecran = new CanvasTool({x: 800, y: 600}, document.body);
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.border = '1px solid black';
    document.body.appendChild(canvas);

    const balle = new Balle();

    /**
     * Fonction de la "boucle" principale appelée par setInterval
     */
    const updateMain = function () {
        // effacerEcran('white');
        balle.updatePosition();
        balle.updateColor();

        ctx.fillStyle = balle.color;
        ctx.beginPath();
        ctx.arc(balle.position.x, balle.position.y, balle.rayon, 2 * Math.PI, false);
        ctx.fill();
    };

    const demarrer = function () {
        // TODO: utiliser requestAnimationFrame: méthode plus propre que setInterval
        //  et plus économe en CPU lorsque l'onglet n'est pas actif (évite de laisser
        //  tourner le jeu tant qu'on ne joue pas)
        running = setInterval(updateMain, 10);
    };

    const effacerEcran = function (color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    demarrer();
}


main();