class SweetSweetBasil {
    color: string;
    constructor(name:string, startColor:string) {
        console.log('Hello ' + name)
        this.color = startColor
    }
    getColor(){
        console.log(this.color)
    }
}
let world = new SweetSweetBasil('World!', 'green')
let basil = new SweetSweetBasil('Basil', 'blue')
world.getColor()
basil.getColor()