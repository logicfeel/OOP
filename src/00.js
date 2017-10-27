function Parent1(param) {
    this.abc1 = 1;
    this.obj = param;
}
Parent1.prototype.method1 = function () { return 1 }

function Child1(param) {
    Parent1.call(this, param);
    this.abc2 = 2;
}
Child1.prototype = new Parent1();
Child1.prototype.constructor = Child1;
// Child1.prototype.parent =Child1.prototype;
Child1.prototype.method2 = function () { return 2 }

var a1 = new Parent1();
var b1 = new Child1(10);


console.log('----------------');
console.log('상속: new');


function Parent2() {
    this.abc1 = 1;
}
Parent2.prototype.method1 = function () { return 1 }

function Child2() {
    this.abc2 = 2;
}
Child2.prototype =  Object.create(Parent2.prototype);
Child2.prototype.constructor = Child2;
Child2.prototype.parent = Parent2.prototype;

Child2.prototype.method2 = function () { return 2 }


var a2 = new Parent2();
var b2 = new Child2();

console.log('----------------');
console.log('상속: Object.create');
