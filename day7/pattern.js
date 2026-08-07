let str=''
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if((i==3||j==3)||(j==1&&i<=3)||(i==1&&j>=3)||(i==5&&j<=3)||(j==5&&i>=3)){
            str+='* '
        }
        else{
            str+='  '
        }
    }
    str+='\n'
}
console.log(str);

let str1=''
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if((i==1&&j==1)||(i==1&&j==5)||(i==2&&j==2)||(i==2&&j==4)||(i==3&&j==3)||(i==4&&j==2)||(i==4&&j==4)||(i==5&&j==1)||(i==5&&j==5)){
            str1+='* '
        }
        else{
            str1+='  '
        }
    }
    str1+='\n'
}
console.log(str1);

let str2=''
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if((i==1||j==1)||(i==5||j==5)){
            str2+='* '
        }
        else{
            str2+='  '
        }
    }
    str2+='\n'
}
console.log(str2);

let str3=''
for(let i=1;i<=7;i++){
    for(let j=1;j<=7;j++){
        if((i==5)){
            str3+='* '
        }
        else{
            str3+='  '
        }
    }
    str3+='\n'
}
console.log(str3);

let s=''
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==1||i==5||j==1||j==5||(i==3&&j==3)||((i==2||i==4)&&(j==2||j==4))){
            s+='* '
        }
        else{
            s+='  '
        }
    }
    s+='\n'
}
console.log(s);

let s1=''
for(let i=1;i<=5;i++){
    for(let j=5;j>=1;j--){
        s1+='* '
    }
    s1+='\n'
}
console.log(s1);
