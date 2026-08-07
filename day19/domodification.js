let b=document.body
console.log(b);

console.log(b.firstElementChild);

console.log(b.firstElementChild.textContent);

b.firstElementChild.textContent='Tata js'
console.log(b.firstElementChild.textContent);

b.firstElementChild.textContent+='Good bye'
console.log(b.firstElementChild.textContent);

b.innerHTML+='<h4>Hello h4</h4>'
console.log(b.innerHTML);

b.innerHTML+='<h1>kingpin</h1>'
console.log(b.innerHTML);
