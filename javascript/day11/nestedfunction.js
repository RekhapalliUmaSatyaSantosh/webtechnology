//nested function
function demo(){
    function d1(){
        console.log('Hello d1');
    }
    function d2(){
        console.log('Hello d2');
    }
    return d1(),d2()
}
// demo()

function demo1(){
    function d1(){
        console.log('Hello d1');
    }
    function d2(){
        console.log('Hello d2');
    }
    d1(),d2()
}
// demo1()

function demo2(){
    function d1(){
        console.log('Hello d1');
    }
    function d2(){
        console.log('Hello d2');
    }
    d1()
    d2()
}
// demo2()

function demo3(){
    function d1(){
        console.log('Hello d1');
    }
    function d2(){
        console.log('Hello d2');
    }
    return [d1,d2]
}
// demo3()[0]()
// demo3()[1]()

//lexical scope
var a=10
function demo4(){
    var a=20
    function d1(){
        var a=30
        console.log('Hello d1');
        console.log(a);
        console.log(this.a);
    }
    function d2(){
        var a=40
        console.log('Hello d2');
        console.log(this.a);
        console.log(a);
    }
    console.log(a);
    console.log(this.a);   
    d1()
    d2()
}
// console.log(a);
// demo4()

// function f(n){
//     a=0,b=1
//     while(n!=0){
//         console.log(a);
//         temp=a
//         a=b+a
//         b=temp
//         n--
//     }
// }
// f(10)

//recursion
function fact(n){
    if(n<=1){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5));

//currying function
function demo5(x){
    return function (y){
        return x**y
    }
}
let m=demo5(29)
console.log(m(9));
