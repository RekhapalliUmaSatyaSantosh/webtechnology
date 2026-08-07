// function demo(a,b){
//     setInterval(()=>{
//         for(let i=a;i<=b;i++){
//             console.log(i);
//         }
//     },5000)
// }
// demo(10,20)
// function d1(){
//     console.log('Hello');   
// }
// d1()

// function demo(a,b){
//     setTimeout(()=>{
//         for(let i=a;i<=b;i++){
//             console.log(i);
//         }
//     },5000)
// }
// demo(10,20)
// function d1(){
//     console.log('Hello');   
// }
// d1()

let date=new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTimezoneOffset());
console.log(date.getTime());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

let h1=document.getElementById('d1')
function time1(){
    let date1=new Date()
    h1.innerText=date1.toLocaleTimeString()
}
let x=setInterval(time1,1000)
let btn1=document.querySelector('#btn1')
btn1.onclick=()=>{
    clearInterval(x)
}
let btn2=document.querySelector('#btn2')
btn2.onclick=()=>{
    x=setInterval(time1,1000)
}

let span=document.querySelector('span')
let button1=document.querySelector('#b1')
let button2=document.querySelector('#b2')

button2.onclick=()=>{
    span.innerText++
}