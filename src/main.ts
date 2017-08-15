// https://www.typescriptlang.org/docs/handbook/basic-types.html

import * as $ from 'jquery'
import { MustHaveCoffee } from './coffee/getcoffee'

class ReallyCoffee extends MustHaveCoffee {
    constructor(){super()}
    f(input: boolean){
        let a = 100
        if(input){
            let b = a + 1202
            return b
        }
        return a
    }
    setCoffeeType(name:string) {
        super.setCoffeeType(name)
        console.log('hello there ' + this.coffeeType)
        $('body').css('background-color', 'green')
    }
}

let newCoffee = new ReallyCoffee()
newCoffee.f(true)
newCoffee.setCoffeeType('bulletproof')

let oldCoffee = new MustHaveCoffee()
