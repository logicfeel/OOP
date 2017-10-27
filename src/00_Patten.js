/**
 * 데코리이션 패턴
 */


function IFood() {
    
    this.isDebug            = false;

    // ### 생성자 처리 위치 ###
}
(function() {
    // ### 메소드 ###
    IFood.prototype.printMe = function() {
        throw new Error('구현'); 
    };
    
}());


function FoodAttr(pFood) {
    // 인터페이스 상속이므로
    IFood.call(this);  // ### prototype 상속 ###
    
    this.m_super = pFood;

    // FoodAttr.super = pFood;    // 2번째 방법 => 이건 정적 방식임 => X


    // ### 생성자 처리 위치 ###
}
(function() {
    // ### prototype 상속 ###
    FoodAttr.prototype =  Object.create(IFood.prototype); // IFood 상속
    FoodAttr.prototype.constructor = FoodAttr;
    FoodAttr.prototype.parent = IFood.prototype;

    // ### 메소드 ###
    FoodAttr.prototype.printMe = function() {
        this.m_super.printMe();
        console.log('printMe()');
        
    };
    
    // FoodAttr.prototype.super = this._super;

}());


function WithPrima(pFood) {
    FoodAttr.call(this, pFood);  // ### prototype 상속 ###

}
(function() {
    // ### prototype 상속 ###
    WithPrima.prototype =  Object.create(FoodAttr.prototype); // FoodAttr 상속
    WithPrima.prototype.constructor = WithPrima;
    WithPrima.prototype.parent = FoodAttr.prototype;

    // ### 메소드 ###
    WithPrima.prototype.printMe = function() {
        // this.m_super.printMe();
        this.parent.printMe();
        console.log('with Prima');
    };
    
}());

function WithCrime(pFood) {
    FoodAttr.call(this, pFood);  // ### prototype 상속 ###

}
(function() {
    // ### prototype 상속 ###
    WithCrime.prototype =  Object.create(FoodAttr.prototype); // Array 상속
    WithCrime.prototype.constructor = WithCrime;
    WithCrime.prototype.parent = FoodAttr.prototype;

    // ### 메소드 ###
    WithCrime.prototype.printMe = function() {
        // this.m_super.printMe();
        this.parent.printMe();
        console.log('with Crime');
    };
    
}());

// function WithCrime2(pFood) {
//     WithCrime.call(this, pFood);  // ### prototype 상속 ###

// }
// (function() {
//     // ### prototype 상속 ###
//     WithCrime2.prototype =  Object.create(WithCrime.prototype); // Array 상속
//     WithCrime2.prototype.constructor = WithCrime2;
//     WithCrime2.prototype.parent = WithCrime.prototype;

//     // ### 메소드 ###
//     WithCrime2.prototype.printMe = function() {
//         this.parent.printMe();
//         // this.m_super.printMe();
//         console.log(' Crime2');
//     };
    
// }());


function Coffee() {
    // ### 생성자 처리 위치 ###
}
(function() {
    // ### prototype 상속 ###
    Coffee.prototype =  Object.create(IFood.prototype); // IFood 상속
    Coffee.prototype.constructor = Coffee;
    Coffee.prototype.parent = IFood.prototype;

    // ### 메소드 ###
    Coffee.prototype.printMe = function() {
        console.log('Coffee');
    };
    
}());

// #################################################
// 테스트

var f1 = new WithPrima(new Coffee());
var f2 = new WithCrime(new WithPrima(new Coffee()));
var f3 = new FoodAttr(new Coffee());
// var f4 = new WithCrime2(new Coffee());

f1.printMe();
console.log('----------------');
f2.printMe();
console.log('----------------');
f3.printMe();
// console.log('----------------');
// f4.printMe();