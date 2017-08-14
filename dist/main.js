var SweetSweetBasil = (function () {
    function SweetSweetBasil(name, startColor) {
        console.log('Hello ' + name);
        this.color = startColor;
    }
    SweetSweetBasil.prototype.getColor = function () {
        console.log(this.color);
    };
    return SweetSweetBasil;
}());
var world = new SweetSweetBasil('World!', 'green');
var basil = new SweetSweetBasil('Basil', 'blue');
world.getColor();
basil.getColor();
