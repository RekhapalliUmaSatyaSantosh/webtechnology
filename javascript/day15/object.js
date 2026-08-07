//literal way
let obj={}
console.log(obj);

let obj1={name:'innova creta',
    price:'30lakhs',
    wheels:5}
console.log(obj1);

//new keyword
let obj2=new Object()
console.log(obj2);

//constructor
let obj3=Object()
console.log(obj3);

//function constructor
function demo(name,brand){
    this.name=name
    this.brand=brand
}
let obj4=new demo('Fortuner','Toyota')
console.log(obj4);

//create
let obj5=new Object()
console.log(obj5);
obj5.name='Xuv700'
obj5.brand='Mahendra'
obj5.price='35lakhs'
obj5.color='white'
obj.wheels=5
obj.steering=1
console.log(obj5);

//updation
obj5.steering=2
obj5.wheels=4
console.log(obj5);

//deletion
delete obj5.wheels
delete obj5.steering
console.log(obj5);

//read
console.log(obj5.name);
console.log(obj5.brand);
console.log(obj5.price);
