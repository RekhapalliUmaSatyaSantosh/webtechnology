let b=document.body
console.log(b);

let d=b.firstElementChild.nextElementSibling
console.log(d);
console.log(d.lastElementChild);
console.log(d.lastChild);
console.log(d.firstChild);
console.log(d.firstElementChild);
console.log(d.previousElementSibling);
console.log(d.nextElementSibling);
console.log(b.firstChild);
console.log(b.lastChild);
console.log(b.lastChild.previousSibling);

console.log(d.children);
console.log(d.childNodes);

let x=document.body.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.previousSibling
console.log(x);
console.log(x.parentElement);
console.log(x.parentNode);
