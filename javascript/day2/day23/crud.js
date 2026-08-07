let form=document.querySelector('form')
let inp1=document.getElementById('inp1')
let inp2=document.getElementById('inp2')
let inp3=document.getElementById('inp3')
let inp4=document.getElementById('inp4')
let inp5=document.getElementById('inp5')
let inp6=document.getElementById('inp6')
let table=document.querySelector('table')
let add=document.getElementById('btn')

form.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.innerText=='Add'){
        if(inp1.value!=""&&inp2.value!=""&&inp3.value!=""&&inp4.value!=""&&inp5.value!=""&&inp6.value!=""){
            table.innerHTML+=`
            <tr>
                <th>${inp1.value}</th>
                <th>${inp2.value}</th>
                <th>${inp3.value}</th>
                <th>${inp4.value}</th>
                <th>${inp5.value}</th>
                <th>${inp6.value}</th>
                <th><button>Edit</button></th>
                <th><button>Delete</button></th>
            </tr>`
            inp1.value=''
            inp2.value=''
            inp3.value=''
            inp4.value=''
            inp5.value=''
            inp6.value=''
        }   
        else{
            window.alert('Please Enter the details')
        }
    }
    else if(e.target.innerText=='Delete'){
        e.target.parentElement.parentElement.remove()
    }
    else if(e.target.innerText=='Edit'){
        inp6.value=e.target.parentElement.previousElementSibling.innerText
        inp5.value=e.target.parentElement.previousElementSibling.previousElementSibling.innerText
        inp4.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        inp3.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        inp2.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        inp1.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        add.setAttribute('disabled','true')
        e.target.innerText='Update'
    }
    else if(e.target.innerText=='Update'){
        e.target.parentElement.previousElementSibling.innerText= inp6.value
        e.target.parentElement.previousElementSibling.previousElementSibling.innerText= inp5.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText= inp4.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText= inp3.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText= inp2.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText= inp1.value
        e.target.innerText='Edit' 
        inp1.value=''
        inp2.value=''
        inp3.value=''
        inp4.value=''
        inp5.value=''
        inp6.value=''
        add.removeAttribute('disabled')
    }
})
