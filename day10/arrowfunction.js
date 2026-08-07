let a=()=>'hello'
console.log(a());

//implict function
let b=(a1,b1)=>a1+b1
console.log(b(10,20));

let c=(a,b,c)=>a+b+c
console.log(c(10,20));

let d=(a,b,c)=>a+b+c
console.log(d(10,20,30,40,50));

// console.log(e(10,20)); error
// e=(a,b)=>a+b
let e=(a,b)=>a+b
console.log(e(10,20));

//explict function
let f=_=>{
    console.log('hello');
    return 'hi'
}
console.log(f());

let g=a=>{
    return a
}
console.log(g(10));

let h=(a,b)=>{
    return a+b
}
console.log(h(10));

let i=(a,b)=>{
    return a+b
}
console.log(i(10,20,40));

// console.log(j());
// j=_=>{
//     return 'hello'
// }


