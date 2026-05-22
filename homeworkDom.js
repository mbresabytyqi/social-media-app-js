// 1. Selektimi & Manipulimi

const paragrafiPrsh = document.querySelector('p');
paragrafiPrsh.textContent = 'Hello Students!';

const ngjyrosHeading = document.querySelector('#beje-blue');
ngjyrosHeading.style.color = 'blue';

const butoni = document.querySelector('#btn1')
butoni.classList.add('active');


const heading2 = document.querySelector('h2');
heading2.style.fontSize = '30px';

const removeClass = document.querySelector('.hidden')
removeClass.classList.remove('hidden');

// 2. Event Listeners

const butoni2 = document.querySelector('#btn2');
butoni2.addEventListener('click', () => {
    alert('Ky alert vjen nga butoni')
})

const imazhi = document.querySelector('img');
imazhi.addEventListener('mouseover', () => {
    document.querySelector('body').style.backgroundColor = 'lightgreen'
})
imazhi.addEventListener('mouseout', () => {
    document.querySelector('body').style.backgroundColor = 'white'
})

document.addEventListener('keydown', (event) => {
    console.log(`Eshte shtypur tasti ${event.key}`)
})

const butoni3 = document.querySelector('#btn3');
const numeroButonin = document.querySelector('#countParagraf')
let count = 0;
butoni3.addEventListener('click', () => {
    count++;
    numeroButonin.textContent = `Butoni u klikua ${count} here`;
})


// 3.Format
const forma = document.querySelector('#alert-form')
const inputEmri = document.querySelector('#input-emri');
const mezazhiError = document.querySelector('#error-message')

forma.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inputEmri.value;

    if (name === '') {
        mezazhiError.textContent = 'Ju lutem shkruani emrin'
        return;
    }
    if (name.length < 3) {
        mezazhiError.textContent = 'Shkruani me shume se 3 karaktere';
        return;
    }
    alert(name);
})

inputEmri.addEventListener('input', () => {
    mezazhiError.textContent = '';
})

// 4.Krijim & Fshirje

const elementListes = document.createElement('li');
elementListes.textContent = 'Shalqi'
document.querySelector('ul').appendChild(elementListes)

const butoni4 = document.querySelector('#btn4');
const removedParagraf = document.querySelector('#paragraf2');
removedParagraf.style.color = 'green'
butoni4.addEventListener('click', () => {
    removedParagraf.remove();
})

const butoni5 = document.querySelector('#btn5');
const krijo = document.querySelector('.btn-container')
butoni5.addEventListener('click',() => {
    const elementiNew = document.createElement('p');
    elementiNew.textContent = 'Ky tekst eshte krijuar nga butoni'
    krijo.appendChild(elementiNew)
})

const newDiv = document.createElement('div');
 newDiv.className = 'card';
 newDiv.innerHTML = '<h3>Titulli  brenda <i>div</i> te krijuar</h3>'
document.body.appendChild(newDiv)









