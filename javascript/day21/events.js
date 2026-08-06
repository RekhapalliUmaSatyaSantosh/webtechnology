function demo(){
    // document.body.style.backgroundColor="red";
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`; 
}
function demo1(){
    document.body.style.backgroundColor="white";
}

function smile(){
    let d=document.getElementById("hov");
    d.innerText="😃";
    d.onclick="😶";
}