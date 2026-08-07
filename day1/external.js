let a=10n
console.log(a);
console.log(window)
window.console.log('Hello world')
console.log(typeof a);
a=10
console.log(typeof a);
a='h'
console.log(typeof a)
a="hello "
console.log(typeof a)
a=`hello
how are you`
console.log(a)
console.log(typeof a );
y=10
console.log('I am dev since '+y+' years');
console.log("I'm dev since",y,'years');
console.log("I'm dev since",y,"years");
console.log(`I'm dev since ${y} years`);
y=undefined
console.log(y);
console.log(typeof y);
y=null
console.log(y);
console.log(typeof y);
y=10
console.log(Symbol(y));
y=Number(prompt('Enter a number= '))
if (y%2===0){
    console.log('Even');
} 
else{
    console.log('Odd');   
}