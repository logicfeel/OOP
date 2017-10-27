

/**
 * ############################################################
 * 최상위 클래스
 */

function Parent(pOnwerContainerAdapter) {
    
    this.isDebug            = false;

    // ### 생성자 처리 위치 ###
}
(function() {
    // ### 메소드 ###
}());

/**
 * ############################################################
 * 상속 클래스
 */
function Child(pOnwerContainerAdapter, pAttrName) {
    Parent.call(this, pOnwerContainerAdapter);  // ### prototype 상속 ###
    
    this.name               = pAttrName;
    this.callback           = null;

    // ### 생성자 처리 위치 ###
}
(function() {
    // ### prototype 상속 ###
    Child.prototype =  Object.create(Parent.prototype); // Array 상속
    Child.prototype.constructor = Child;
    Child.prototype.parent = Parent.prototype;

    // ### 메소드 ###
    Child.prototype.clear = function() {
        this.parent.clear.call(this);    // 오버라이딩 메소드 호출
    };
    
}());