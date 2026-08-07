function * demo(){
    yield 'hello'
    yield 'hell'
    yield 'hel'
    yield 'he'
    yield 'h'
}
a=demo()
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
// console.log(a.next().done);
console.log(a.next().value);
// console.log(a.next().done);

x=function * (){
    yield 'h'
    yield 'he'
    yield 'hel'
    yield 'hell'
    yield 'hello'
}
b=x()
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);