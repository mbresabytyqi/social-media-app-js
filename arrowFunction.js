//Arrow Functions :


//forma e par  Declared function
function greet() {
    return 'hello world'
}
// console.log(greet())

//Functions Expression

const greet2 = function () {
    return 'hello world'

}

//Arrow Functions 
// => return eshte kjo
// const greet3 = () => 'Hello world'

/// 
// const add = (a, b) => a * b


// rules:

//no parameter:
// const greet3 = () => 'Hello world'

//we have parameter 
// const add = (a, b) => a * b

//one parameter:
// function hello(name) {
// return `hello ${name}`
// }

// const hello = name => `hello ${name}`;

//multi line:
// const describe = (user) => {
// const greeting = `hello ${user.name}`
// const age = `your  age ${user.age}`
// return greeting + age;
// }

// const sayHi = () => 'Hi';
// const add = (a, b) => a + b;

// const square = n => n * n;

// const isEven = num => num % 2 === 0;

// const repeat = str => str + str;

// const prices = [10, 20, 30];
// let total = 0;

// prices.forEach((item) => total += item)
// console.log(total)

// const users = [{ id: 1 }, { id: 2 }]
// users.forEach((item) => 'Check users' + item.id)
// console.log(users)

//.forEach => do something for each item (no return)
// map => transform each item into a new one (a new array)
//filter -> keeps only items that pass a test (a new array)


const numbers = [1, 2, 3, 4]
// 2,4,6,8
const double = numbers.map((nr) => nr * 2);
console.log(numbers);
console.log(double)

const users = [
    { name: 'Arti', age: 30 },
    { name: 'leo', age: 25 }

]
const names = users.map((user) => user.name);
console.log(names)


//.filter

const ages = [12, 18, 25, 7, 50]
const adults = ages.filter((age) => age >= 18);
console.log(adults)
//duke perdorur .filter -> mbushe nje array te ri
//activeUsers me userat te cilet  jan active
const users2 = [
    { name: 'Arti', isActive: true },
    { name: 'leo', isActive: false },
    { name: 'Besniku', isActive: true }

]

const activeUsers = users2.filter((user) => user.isActive === true).map((user) => user.name.toUpperCase());
console.log(activeUsers)


// 2) duke perdorur .filter mbushe nje array te r
// evenNumber me numrat qe jan qift
const numbers2 = [12, 18, 25, 7, 50]
const evenNumber = numbers2.filter((nr) => nr % 2 == 0);
console.log(evenNumber)


const products = [
    {name: 'Mouse', price:20},
    {name:'Keyboard', price:80},
    {name: 'Monitor', price:180}
]
// filtroj dhe shfaqi vetem pruktet qe jan me lire se 100
// dhe shfaqi vetem emrat  duke perdoru map

const pr2 = products.filter((pr) => pr.price < 100).map((pr) => pr.name)
// const cheapProducts =  products.filter((products) =>products.price < 100).map((updatedProducts) => products.name)
console.log(pr2)
// console.log(cheapProducts)