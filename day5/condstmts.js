//simple if
let a=12
if (a%2==0){
    console.log('Even');   
}

//if-else
let b=3
if (b%2==0){
    console.log('Even');   
}
else{
    console.log('Odd'); 
}

//else-if ladder
let c=0
if (c>0){
    console.log('Positive');   
}
else if(c<0){
    console.log('Negative');
}
else{
    console.log('Zero');
    
}

//nested if
let d=21
if (d>0){
    if (d%2==0){
        console.log('Even');
    }
    else{
        console.log('Odd');
    }
}
else{
    console.log('Negative');   
}

//switch case
let age=23
switch(age){
    case 10: console.log('Child');break;
    case 15: console.log('Adaloence');break;
    case 20: console.log('Teen');break;
    case 30: console.log('Men');break;
    case 50: console.log('Old');break;
    default: console.log('Died');   
}

//for loop
for(let i=1;i<=5;i++){
    console.log('hello');
}

let s=''
for(let i=1;i<=5;i++){
    s+='hello'
    s+='\n'
}
console.log(s);

//while
i=0
while(i<=5){
    console.log('hello');
    
    
}