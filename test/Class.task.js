// 다중 상속 테스트


// 부모 1
function Parent1(pValue) {
    
    var columnName = "";

    this.name = 'parent';
    this._p = pValue;    // 소유한 데이터테이블
}

// 부모 2
function Parent2(pValue) {
    
    var columnName = "";

    this.name = 'parent';
    this._p = pValue;    // 소유한 데이터테이블
}


// 다중상속
// 자식
function Child(pValue) {
    Parent.call(this, pValue);
    
    var columnName = "";
    
    this.name = 'child';
    this._c = pValue;    // 소유한 데이터테이블
}
// ### prototype 상속 ###

// var F = function() {};
var F = new Parent1();
F.prototype =  Object.create(Parent.prototype); // Array 상속
F.prototype.constructor = Child;
F.prototype.parent = Parent.prototype;

 
function Temp(){}
Temp.prototype =  Object.create(Parent.prototype); // Array 상속
Temp.prototype.constructor = Child;
Temp.prototype.parent = Parent.prototype;

Child.prototype =  Object.create(Parent.prototype); // Array 상속
Child.prototype.constructor = Child;
Child.prototype.parent = Parent.prototype;