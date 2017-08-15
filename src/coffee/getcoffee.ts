export class MustHaveCoffee {
    coffeeType: string;
    constructor() {
        console.log('Make it bulledproof')
    }
    setCoffeeType(name:string) {
        this.coffeeType = name
    }
}