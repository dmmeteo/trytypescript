var hello = 'Hi!';
var hi = 'Hello';
hello = 123;
hi = 'abcabc';
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
