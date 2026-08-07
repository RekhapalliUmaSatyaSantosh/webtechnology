//declaring a function with no parameters and no arguments
function demo(){
    console.log('Hello');   
}
demo()

//with parameters & arguments
function demo1(a,b){
    console.log(a+b);
    console.log('javascript');   
}
demo1(10,20)

//with more parameters & less arguments
function demo2(a,b,c) {
    console.log(a+b+c);
    console.log('js');
}
demo2(1,20)

//with less parameters & more arguments
function demo3(a,b){
    console.log(a+b);
    console.log('javascript1');
    console.log(arguments[0]+arguments[1]+arguments[2]);
    console.log(arguments[0],arguments[1],arguments[2]);
}
demo3(10,20,30)

//this keyword
var c=10
function demo4(a,b){
    console.log('helloolloolloo');
    console.log(a+b);
    var c=20
    console.log(c);
    console.log(this.c);
    console.log(window.c);
}
demo4(10,20)

//function hoisting
demo5(100,200)
demo5()
function demo5(a,b){
    console.log('Hello hi');
    console.log(a+b);
}

function demo6(){
    console.log('hello');
    
}
console.log('prototype' in demo6);
let z=new demo6()
console.log(Object.getPrototypeOf(z)==demo6.prototype);
