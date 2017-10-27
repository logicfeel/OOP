'use strict'; 
/**
 * 다형성 테스트
 */


// 부모
function Parent(pValue) {
    
    var columnName = "";

    this.name = 'parent';
    this._p = pValue;    // 소유한 데이터테이블
}
Parent.prototype.copy = function() {};

// 자식
function Child(pValue) {
    Parent.call(this, pValue);
    
    var columnName = "";
    
    this.name = 'child';
    this._c = pValue;    // 소유한 데이터테이블
}
// ### prototype 상속 ###
Child.prototype =  Object.create(Parent.prototype); // Array 상속
Child.prototype.constructor = Child;
Child.prototype.parent = Parent.prototype;

Child.prototype.copy2 = function() {};


// 자식 2
function Child2(pValue) {
    Parent.call(this, pValue);
    
    var columnName = "";
    
    this.name = 'child2';
    this._c = pValue;    // 소유한 데이터테이블
}
// ### prototype 상속 ###
Child2.prototype =  Object.create(Parent.prototype); // Array 상속
Child2.prototype.constructor = Child2;
Child2.prototype.parent = Parent.prototype;

// 자식 3
function Child3(pValue) {
   
    var columnName = "";
    
    this.name = 'child';
    this._c = pValue;    // 소유한 데이터테이블
}
Child3.prototype =  new Parent();
Child3.prototype.constructor = Child3;
Child3.prototype.parent = Parent.prototype;


// ############################# 

var c = new Child(1);
var c2 = new Child2(1);
var c3 = new Child3(1);

var e = new String(1);


function logPrint(pObj) {
    if (pObj instanceof Parent) {
        console.log('name:' + pObj.name);
    } else {
        console.log('Err');
    }
    
}

logPrint(c);
logPrint(c2);
logPrint(e);

cconsole.log('-End-');