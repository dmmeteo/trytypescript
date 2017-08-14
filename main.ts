class SweetSweetBasil {
    name: string;
    color: string;
    constructor(/*name:string, startColor:string*/) {
        // console.log('Hello ' + name)
        // this.color = startColor
    }
    getColor(){
        console.log(this.color)
    }
}
let world = new SweetSweetBasil() //'World!', 'green')
// let basil = new SweetSweetBasil('Basil', 'blue')
// console.log(world.color)

class Basil extends SweetSweetBasil {
    constructor(name:string, startColor:string) {
        // super(name, startColor)
        super()
        this.name = name
        this.color = startColor
    }
    setNewColor(newColor:string) {
        this.color = newColor
        super.getColor()
    }
}

let basil3 = new Basil('basil', 'red')

basil3.getColor()
basil3.setNewColor('bright green')
basil3.getColor()
