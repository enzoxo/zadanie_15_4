//Zadanie 1
const sayHello = (name = 'World') => console.log(`Hello ${name}!`);
//sayHello();

//zadanie 2

const multiply = (x,y = 1) => {return x * y};
console.log(multiply(5,17)); 

//zadanie 3
const average = (...args) => (args.reduce((acc,current) => acc + current))/args.length;
console.log(average(1,2,3,));

//zadanie 4
const grades = [1,5,5,5,4,3,3,2,1];
const avg = (average(...grades));
console.log(avg.toFixed(2));

//zadanie 5
const tablica = [1,4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = tablica;
console.log(`${firstName}, ${lastName}`);
