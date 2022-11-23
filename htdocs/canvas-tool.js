// import './dom-tools.js';

// /**
//  * Wrapper autour de l'API canvas du navigateur pour avoir quelques simplifications pour le dessin
//  */
// class CanvasTool {
//     constructor(dimensions, parent) {
//         const canvas = this.canvas = document.createElement('canvas');
//         const ctx = this.ctx = this.canvas.getContext('2d');
//         canvas.width = dimensions.x;
//         canvas.height = dimensions.y;
//         canvas.style.border = '1px solid black';
//         parent.appendChild(canvas);
//     }
//
//     /**
//      * Efface la zone de jeu de l'écran
//      * @param {String} color
//      */
//     clear(color) {
//         const ctx = this.ctx;
//         ctx.fillStyle = color;
//         this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }
//
// export default CanvasTool;