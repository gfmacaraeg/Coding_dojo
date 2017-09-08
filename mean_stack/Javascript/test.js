// Old ES5 way
// var Dot = function Dot(x, y){
//     this.x = x;
//     this.y = y;
// }
// Dot.prototype.showLocation(){
//     console.log("This Dot is at x " + this.x + " and y " + this.y);
// }
// var dot1 = new Dot(55, 20);
// dot1.showLocation();

// New ES6 way
class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    showLocation(){
        // ES6 String Interpolation!
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
let dot2 = new Dot(5, 13);
dot2.showLocation();
