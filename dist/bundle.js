!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();t.__esModule=!0;var r=o(1),f=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.f=function(e){if(e){return 1302}return 100},t.prototype.setCoffeeType=function(t){e.prototype.setCoffeeType.call(this,t),console.log("hello there "+this.coffeeType)},t}(r.MustHaveCoffee),u=new f;u.f(!0),u.setCoffeeType("bulletproof");new r.MustHaveCoffee},function(e,t,o){"use strict";t.__esModule=!0;var n=function(){function e(){console.log("Make it bulledproof")}return e.prototype.setCoffeeType=function(e){this.coffeeType=e},e}();t.MustHaveCoffee=n}]);