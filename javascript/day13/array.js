arr=[10,20,30,40,50]
console.log(arr);
let x=[]
for(let i=0;i<arr.length;i++){
    x.push(arr[i]+5)
}
//map
console.log(x);
let a=arr.map((e)=>{
    return e*5
})
console.log(a);

//reduce
arr1=[1,2,3,4,5]
let b=arr1.reduce((c,v)=>{
    return c*v
})
console.log(b);

//sort
// arr2=[13.34,1.24,1.23,12.65,1.44,1.67,1.89]
arr2=[1,4,5,9,43,20]
console.log(arr2.sort());
let c=arr2.sort((a,b)=>{
    return a-b
})
console.log(c);

//reverse
console.log(arr2.reverse());

//filter
arr3=[10,20,30,40,50]
x=arr3.filter((a)=>{
    return a>20
})
console.log(x);

//slice
arr4=[1,2,34,5,7,8,3,4,50]
console.log(arr4.slice(1,4));
console.log(arr4.slice(-3));

//splice
arr5=[2,5,8,9,6,7,4,1]
arr5.splice(2,0,'Hello')
console.log(arr5);
arr5.splice(2,1)
console.log(arr5);
arr5.splice(3,0,2,3,4,5,6,6)
console.log(arr5);
