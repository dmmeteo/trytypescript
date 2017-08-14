import { MustHaveCoffee } from './src/coffee/getcoffee'

function f(input: boolean) {
    let a = 100
    if(input){
        let b = a + 1202
        return b
    }
    return a
}

console.log(f(true))
console.log(f(false))

let coffee = new MustHaveCoffee()
console.log(coffee)

// class SweetSweetBasil {
//     name: string;
//     color: string;
//     constructor(/*name:string, startColor:string*/) {
//         // console.log('Hello ' + name)
//         // this.color = startColor
//     }
//     getColor(){
//         console.log(this.color)
//     }
// }
// let world = new SweetSweetBasil() //'World!', 'green')
// // let basil = new SweetSweetBasil('Basil', 'blue')
// // console.log(world.color)
//
// class Basil extends SweetSweetBasil {
//     constructor(name:string, startColor:string) {
//         // super(name, startColor)
//         super()
//         this.name = name
//         this.color = startColor
//     }
//     setNewColor(newColor:string) {
//         this.color = newColor
//         super.getColor()
//     }
// }
//
// let basil3 = new Basil('basil', 'red')
//
// basil3.getColor()
// basil3.setNewColor('bright green')
// basil3.getColor()
