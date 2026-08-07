let b=document.body
console.log(b);

// let c=b.innerHTML+=`
// <table border=2px solid height=100px width=100px>
//     <tr>
//         <td>hello1</td>
//         <td>hello2</td>
//     </tr>
//     <tr>
//         <td>hello3</td>
//         <td>hello4</td>
//     </tr>
// </table>`
// console.log(c);
// console.log(c.firstElementChild.firstElementChild);
// console.log(b);
// console.log(b.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild);

let t=document.createElement('table')
console.log(t);
b.append(t)

let tr1=document.createElement('tr')
let tr2=document.createElement('tr')
let tr3=document.createElement('tr')
t.append(tr1,tr2,tr3)

let td1=document.createElement('td')
let td2=document.createElement('td')
let td3=document.createElement('td')
let td4=document.createElement('td')
let td5=document.createElement('td')
let td6=document.createElement('td')
tr1.append(td1,td2)
tr2.append(td3,td4)
tr3.append(td5,td6)

t.setAttribute('border','3px solid')
t.setAttribute('cellpadding','50px')
t.setAttribute('cellspacing','0px')
t.style.height='200px'
t.style.width='300px'
t.style.borderColor='skyblue'

td1.innerText='HTML CSS JS'
td2.innerText='CSS'
td3.innerText='JAVA'
td4.innerText='PYTHON'
td5.innerHTML='SQL'

td1.style.backgroundColor='olive'
td2.style.backgroundColor='blue'
td3.style.backgroundColor='green'
td4.style.backgroundColor='darkorange'
td5.style.backgroundColor='crimson'

t.style.color='white'

td1.setAttribute('colspan','2')
td2.remove()
td5.setAttribute('colspan','2')
td6.remove()

t.style.textAlign='center'
t.style.fontSize='30px'
t.style.fontWeight='bolder'
// t.style.marginLeft='30%'
// t.style.marginTop='5%'

let i=document.createElement('img')
b.append(i)
i.setAttribute('src','D:\webtech\javascript\day20\mobile_benefit.png')
i.style.height='100px'
i.style.width='200px'