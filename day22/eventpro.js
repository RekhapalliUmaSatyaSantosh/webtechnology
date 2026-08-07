let gp=document.getElementById('gp')
// let p1=document.getElementById('p1')
// let p2=document.getElementById('p2')
// let ch1=document.getElementById('ch1')
// let ch2=document.getElementById('ch2')
// let ch3=document.getElementById('ch3')

// gp.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor='red'
//     e.target.style.color='white'
//     e.target.style.borderColor='black'
//     console.log('grand parent clicked');  
// })

// p1.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor='yellow'
//     e.target.style.borderColor='black'
//     e.target.style.color='red'
//     console.log('parent clicked');  
// })

// p2.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor='orange'
//     e.target.style.borderColor='black'
//     e.target.style.color='wheat'
//     console.log('parent clicked');  
// })

// ch1.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor='brown'
//     e.target.style.color='aqua'
//     e.target.style.borderColor='black'
//     console.log('children clicked');  
// })

// ch2.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor='green'
//     e.target.style.color='white'
//     e.target.style.borderColor='black'
//     console.log('children clicked');  
// })

// ch3.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor='crimson'
//     e.target.style.color='aqua'
//     e.target.style.borderColor='black'
//     console.log('children clicked');  
// })

gp.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.tagName);
    // console.log(e.target.innerText);
    // console.log(e.screenX);
    // console.log(e.screenY);
    if(e.target.id=='gp'){
        console.log('grand parent clicked');
        e.target.style.backgroundColor='red'
    }
    else if(e.target.id=='p1'){
        console.log('parent clicked');
        e.target.style.backgroundColor='yellow'
    }
    else if(e.target.id=='p2'){
        console.log('parent clicked');
        e.target.style.backgroundColor='orange'
    }
    else if(e.target.id=='ch1'){
        console.log('children clicked');
        e.target.style.backgroundColor='skyblue'
    }
    else if(e.target.id=='ch2'){
        console.log('children clicked');
        e.target.style.backgroundColor='green'
    }
    else if(e.target.id=='ch3'){
        console.log('grand children clicked');
        e.target.style.backgroundColor='aqua'
    }
})

let butt=document.getElementById('butt')
butt.addEventListener('click',()=>{
    console.log(window.fr);
    
})