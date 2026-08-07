//pending
// function demo(a,b){
//     new Promise((res,rej)=>{
//         setTimeout(()=>{
//             for(let i=a;i<=b;i++){
//                 console.log(i);
//             }
//         },5000)
//     })
// }
// demo(10,20)
// function d1(){
//     console.log('hello');
// }
// d1()

//reslove and rejected
// function demo(a,b){
//     new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(isNaN(a)||isNaN(b)){
//                 rej()
//             }
//             else{
//                 res()
//             }
//         },5000)
//     })
//     .then(()=>{
//         for(let i=a;i<=b;i++){
//             console.log(i);
//         }
//     })
//     .catch(()=>{
//         console.log('Enter correct inputs');
//     })
// }
// demo(10,20)
// demo(10,'20a')

//promise chaining
function demo(a,b){
    new Promise((res,rej)=>{
        setTimeout(()=>{
            if(isNaN(a)||isNaN(b)){
                rej()
            }
            else{
                res()
            }
        },5000)
    })
    .then(()=>{
        for(let i=a;i<=b;i++){
            console.log(i);
        }
    })
    .then(()=>{
        console.log('Resolved 1');
    })
    .then(()=>{
        console.log('Resolved 2');
    })
    .then(()=>{
        console.log('Resolved 3');
    })
    .then(()=>{
        console.log('Resolved 4');
    })
    .catch(()=>{
        console.log('Enter correct inputs');
    })
    .catch(()=>{
        console.log('Rejected 1');  
    })
    .catch(()=>{
        console.log('Rejected 2');  
    })
    .catch(()=>{
        console.log('Rejected 3');  
    })
    .finally(()=>{
        console.log('Finally block');
    })
    .finally(()=>{
        console.log('Finally block 2');
    })
    .finally(()=>{
        console.log('Finally block 3');
    })
}

// demo(10,20)
demo(10,'20a')