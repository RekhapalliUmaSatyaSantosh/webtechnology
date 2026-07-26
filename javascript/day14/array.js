// let arr=[10,20,30,40,50,60,70,80,90,10,20,30,40,50]
// console.log(arr);
// console.log(arr.includes(10));
// console.log(arr.includes(100));
// console.log(arr.includes(1));
// console.log(arr.includes(40));

// let a=[10,20,30,40,50,60,70,80,90,10,20,30,40,50]
// console.log(a.indexOf(60));
// console.log(a.indexOf(50));

// let b=[10,[20,30],[[[40]],[[[[[50]]],[60]],[[[70,80]]]],[90]]]
// console.log(b.flat());
// console.log(b.flat(5));
// console.log(b.flat(Infinity));

// b=[1,2,3,4,5,4,6,7,8,19,1]
// c=b.find((e)=>{
//     return e>5
// })
// console.log(c);
function isprime(n){
    if(n===1){
        console.log('not Prime');
        return
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
// d=b.findLast((e)=>{
//     return e>5
// })
// console.log(d);

// e=b.findIndex((e)=>{
//     return e>6
// })
// console.log(e);

// f=b.findLastIndex((e)=>{
//     return e>6
// })
// console.log(f);

arr=[50,40,30,20,10,8,9,7,20]
h=arr[0]
l=arr[0]
sum=0
avg=0
even=[]
odd=[]
prime=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>h){
        h=arr[i]
    }
    if(arr[i]<l){
        l=arr[i]
    }
    sum+=arr[i]
    avg=sum/arr.length
    if(arr[i]%2===0){
        even.push(arr[i])
    }
    else{
        odd.push(arr[i])
    }
    if(isprime(arr[i])){
        prime.push(arr[i])
    }
}
document.log('Max=',h);
console.log('Min=',l);
console.log('sum=',sum)
console.log('Avg=',avg);
console.log('Even=',even);
console.log('Odd= ',odd);
console.log('Prime= ',prime);

ar=[10,20,10,30,10,50,40,20,80,20,50]
a=[]
for(let i=0;i<ar.length;i++){
    c=0
    for(let j=i+1;j<ar.length;j++){
        if(ar[i]==ar[j]){
            c++;
        }
    }
    if(c>0){
        a.push(ar[i])   
    }
}
console.log(a);
