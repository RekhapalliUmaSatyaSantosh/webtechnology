let name=window.prompt('Enter your name= ')
console.log(name);
document.writeln(name)
let age=Number(prompt('Enter your age= '))
console.log(age);
document.writeln(age)

let ph=Number(prompt('Enter your phone number= '))
console.log(ph);
document.writeln(ph)

let c=window.confirm('All details are correct submit or cancel')
console.log(c);
document.writeln(c)

let d=alert("This is your alert to don't do")
console.log(d);

console.error('This is your error to rectify')
console.warn('This is your warning')

num=Number(prompt('Enter a number to generate table'))
sr=Number(prompt('Enter your starting range'))
er=Number(prompt('Enter your end range'))
for(let i=sr;i<=er;i++){
    document.writeln(num,'x',i,'=',num*i,'<br>')
}
