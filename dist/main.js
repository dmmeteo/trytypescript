"use strict";
exports.__esModule = true;
var getcoffee_1 = require("./src/coffee/getcoffee");
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1202;
        return b;
    }
    return a;
}
console.log(f(true));
console.log(f(false));
var coffee = new getcoffee_1.MustHaveCoffee();
console.log(coffee);
