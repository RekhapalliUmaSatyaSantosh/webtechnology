function demo(a,b,task){
    task(a,b)
}
demo(10,20,function (e,f){
    console.log(e+f);
})
demo(10,20,function (e,f){
    console.log(e-f);
})
demo(10,20,function (e,f){
    console.log(e*f);
})
demo(10,20,function (e,f){
    console.log(e/f);
})

function demo1(a,b,c,task1){
    task1(a,b,c)
}
demo1(10,20,30,function(a,b){
    console.log(a+b);  
})

function demo1(a,b,task1){
    task1(a,b)
}
demo1(10,20,function(a,b,c){
    console.log(a+b+c);
})