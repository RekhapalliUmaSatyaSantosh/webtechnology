let s1='hello world'
console.log(s1);
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.replace('h','H'));
console.log(s1.replace('w','W'));
console.log(s1.replaceAll('l','m'));
let s2='hello '
console.log(s2.repeat(4));
let s3=' hello '
console.log(s3.trim());
console.log(s3.trimStart());
console.log(s3.trimEnd());
let s4='hello how are you hello this hello how this z hello'
console.log(s4.slice(6,50));
console.log(s4.substring(6,20));
console.log(s4.substr(6,30));
console.log(s4.split());
console.log(s4.split(''));
console.log(s4.split(' '));
let s5='hello '
let s6='world'
console.log(s5.concat(s6));
console.log(s4.indexOf('z'));
console.log(s4.lastIndexOf('o'));
console.log(s4.includes('this'));
console.log(s4.includes('they'));
console.log(s4.startsWith('hello'));
console.log(s4.startsWith('how'));
console.log(s4.endsWith('hello'));
console.log(s4.endsWith('how'));
console.log(s4.charAt(50));
console.log(s4.charCodeAt(1));