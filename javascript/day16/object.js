obj={
    name:'Bruce wayne',
    role:'Batman',
    position:'billionare',
}
console.log(obj);
obj.position='Superhero'
console.log(obj);
obj.city='Gotham city'
console.log(obj);

//seal
console.log(Object.isSealed(obj));
Object.seal(obj)
console.log(Object.isSealed(obj));
//no inserting after seal
obj.sleep='nosleep'
console.log(obj);
//can update existing key's value after sealed
obj.city='Gothamcity'
console.log(obj);

//freeze
console.log(Object.isFrozen(obj));
Object.freeze(obj)
console.log(Object.isFrozen(obj));
//no inserting after freeze
obj.sleep='nosleep'
console.log(obj);
//no updation after freeze
obj.city='GothamCity'
console.log(obj);

//keys of a object
x=Object.keys(obj)
console.log(x);
for(let i of x){
    console.log(i);   
}

//values of a object
y=Object.values(obj)
console.log(y);
for(let i of y){
    console.log(i);
}

//key and values of a object
z=Object.entries(obj)
console.log(z);
for(let i of z){
    console.log(i);
}

//assign
obj1={
    name:'Tony Stark',
    role:'Iron Man'
}
obj2={
    position:'Superhero',
    city:'Washington'
}
o=Object.assign(obj1,obj2)
console.log(o);

//json
let obj3={
    name:'satya',
    role:'gangster',
    position:'dada',
    city:'bombay'
}
x=JSON.stringify(obj3)
console.log(x);
console.log(JSON.parse(x));
