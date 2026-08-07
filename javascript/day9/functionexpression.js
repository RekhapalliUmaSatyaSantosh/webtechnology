let a=function (){
    console.log('Hello hi function expression');
}
a()

let b=function (a,b){
    console.log(a+b);
    console.log('sum');
}
b(10,20)

let c=function (a,b,c){
    console.log('a=',a,'b=',b,'c=',c);
    console.log('variables');
}
c(10,20)

let d=function (a,b){
    console.log(a+b);
    console.log('sum');
    console.log('a=',arguments[0],'b=',arguments[1],'c=',arguments[2],'b=',arguments[3]);
}
d(10,20,30,40)

var x=10
let e=function (a){
    var x=11
    console.log('a=',a);
    console.log(x);
    console.log(this.x);
    console.log(window.x);
}
e(200)

let f=function (a,b){
    console.log('sum');
    return a+b
}
console.log(f(101,202));
console.log(f);

// g()
// var g=function (){
//     console.log('java');
// }

let h=function (){
    console.log('hello');
}
console.log('prototype' in h);
let i=new h()
console.log(Object.getPrototypeOf(i)==h.prototype);
