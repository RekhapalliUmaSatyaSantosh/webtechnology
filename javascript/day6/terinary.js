// let a=100,b=20,c=30,d=40
// let res=a>b?'a is bigger':'b is bigger';
// console.log(res);

// let res1=a>b?a>c?'a is bigger':'c is bigger':b>c?'b is bigger':'c is bigger';
// console.log(res1);

// let res2=a>b?a>c?a>d:'a is bigger':'d is bigger';
// console.log(res2);

str=''
for(let i=0;i<=4;i++){
    for(let j=0;j<=i;j++){
        str+='* '
    }
    str+='\n'
}
console.log(str);

str=''
for(let i=1;i<=4;i++){
    for(let j=4;j>=i;j--){
        str+='* '
    }
    str+='\n'
}
console.log(str);

str1=''
for(let i=5;i<=5;i--){
    for(let j=1;j<=i;j++){
        str1+='* '
    }
    str1+='\n'
}
console.log(str1);
