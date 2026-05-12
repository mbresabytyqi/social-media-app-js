// **1. returnOnlyOddPeople(people)**
// Shkruani një funksion që pranon një listë personash, ku secili person ka një ID,
//  dhe kthen vetëm ata që kanë ID tek (odd number).
const people = [
    { id: 1, name: "Arta" },
    { id: 2, name: "Blerim" },
    { id: 3, name: "Doni" },
    { id: 4, name: "Elira" }
];
// _Shpjegimi:
// Numrat tek janë ata që kur i pjestojmë me 2, mbetja (remainder) është 1.
// Kështu kontrollojmë id % 2 !== 0._
const returnOnlyOddPeople = people => {
    for (let i = 0; i < people.length; i++) {
        if (people[i].id % 2 !== 0) {
            console.log(`ID ${people[i].id} : ${people[i].name}`)
        }
    }
}
returnOnlyOddPeople(people);
// **2. maxNr(a, b)**
// Shkruani një funksion maxNr(a, b) që kthen numrin më të madh mes dy numrave.
function maxNr(a, b) {
    if (a > b) {
        return `${a} eshte me i madh se ${b}`;
    } else {
        return `${b} eshte me i madh se ${a}`
    }
}
console.log(maxNr(5, 10))
console.log(maxNr(11, 10))
// **3. isLandscape(width, height)** 
// Shkruani një funksion që kthen true nëse gjerësia është më e madhe se lartësia.
// _Shpjegimi:
// Nëse width është më i madh se height, fotoja është në pozicion landscape._
const isLandscape = (width, height) => {
    if (width > height) {
        return true
    }
    return false

}
console.log(isLandscape(500, 200));
console.log(isLandscape(200, 500));
// **4. fizzBuzz(input)**
// Shkruani funksionin fizzBuzz që bën këto gjëra:
// Nëse numri pjestohen me 3 → “Fizz”
// Me 5 → “Buzz”
// Me 3 dhe 5 → “FizzBuzz”
// Nëse nuk është numër → “not a number”
let numri = Number(prompt('Shkruani nje numer'))
function fizzBuzz(numri) {
    if (numri % 3 === 0 && numri % 5 === 0) {
        console.log('FizzBuzz')
    } else if (numri % 3 === 0) {
        console.log('Fizz')
    } else if (numri % 5 === 0) {
        console.log('Buzz')
    }

}
fizzBuzz(numri);

// **5. checkSpeed(speed)**
// Shkruani funksionin checkSpeed që:
// nëse speed ≤ 70 → “Ok”
// çdo 5 km/h mbi limit → 1 pikë
// nëse pikët ≥ 12 → “License suspended”
let speed = Number(prompt('shpejtesia juaj'))
function checkSpeed(speed) {

    if (speed <= 70) {
        console.log('Ok')
        return;
    }
    let piket = Math.floor(speed - 70) / 5
    if (piket >= 12) {
        console.log('License suspended')
    } else {
        console.log('Piket', piket)
    }


} checkSpeed(speed);

// _Shpjegimi:
// Çdo 5 km/h mbi 70 jep 1 pikë; nëse pikët arrijnë 12, shoferi humb patentën.
// Bonus: Math.floor() -> përdoret për te rrumbullaksuar nje numer dhjetor_

// **6. countTruthy(array)**
// Shkruani funksion që numëron sa elemente të array-it janë “truthy”.
// 📌 Shembull array:
// [0, null, undefined, 2, 3] → rezultati duhet të jetë 2
// _Shpjegimi:
// Truthy janë vlerat që JavaScript i konsideron të vërteta, si numrat pozitivë, 
// stringjet jo bosh, etj_
const truthyValues = [0, null, undefined, 2, 3]

function countTruthy(truthyValues) {
    let count = 0;
    for (let i = 0; i < truthyValues.length; i++) {
        if (truthyValues[i]) {
            count++;
        }
    }
    return count;
}
console.log('Truthy',countTruthy(truthyValues))
// **7. sum(limit)**
// Shkruani një funksion që merr një array me numra dhe gjen shumën e të gjithë numrave që pjestohen 
// me 3 ose me 5.
const numbers = [1, 3, 5, 6, 7, 9, 10];
// _Shpjegimi:
// Shikojmë çdo numër tek array-i. Nëse një numër pjestohen me 3 ose me 5, 
// e shtojmë në shuma. Në fund kthejmë shumën._

function sum(limit) {
    let shuma = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0)
            shuma += numbers[i]
    }
    return shuma;
}
console.log('shuma :',sum())

// **8. Krijo një listë notash [9, 8, 5, 10] dhe gjej mesataren duke përdorur forEach.**


let notat = [9, 8, 5, 10];
let sumNota = 0;
notat.forEach((item) => {
    sumNota += item;

})
let mesataren = sumNota / notat.length
console.log('Mesatare', mesataren)
////filter  
const numrat10 = [2, 30, 5, 11, 15, 50]
// **9. Krijo një funksion getNumbersGreaterThan10(numbers) që kthen vetëm numrat më të mëdhenj se 10.**
const getNumbersGreaterThan10 = numrat10.filter((nr) => nr > 10)
console.log(getNumbersGreaterThan10)

// **10. Krijo një funksion formatProductNames(products) që kthen një array të ri ku çdo emër ka tekstin:**
// "Product: " përpara emrit.

// _Psh: 
// ["Product: Laptop", "Product: Mouse", "Product: Keyboard"]_
const products = [
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 80 },
    { name: 'Monitor', price: 180 }
]
const formatProductNames = products.map((products) => 'Product: ' + products.name)
console.log(formatProductNames)
