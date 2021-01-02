const topContainer = document.querySelector('#top')
const mainContainer = document.querySelector('#container')

const sum_Label = mainContainer.appendChild(document.createElement('h2'))
const number_Label = mainContainer.appendChild(document.createElement('h2'))
const second_Number_Label = mainContainer.appendChild(document.createElement('h2'))
const numbers_Difference_Label = mainContainer.appendChild(document.createElement('h2'))

const sum_Div = mainContainer.appendChild(document.createElement('div'))
const number_Div = mainContainer.appendChild(document.createElement('div'))
const second_number_Div = mainContainer.appendChild(document.createElement('div'))
const difference_div = mainContainer.appendChild(document.createElement('div'))

const userInput = document.createElement('input')

const confirm_Button = topContainer.appendChild(document.createElement('button'))
const clear_Button = topContainer.appendChild(document.createElement('button'))

confirm_Button.addEventListener('click', setCount)
clear_Button.addEventListener('click', clearDiv)


let j = 1;


let sumArray = [];              // sum entered by user through userInput
let numberArray = [];           // number from 1 to userInput value 
let numberTwoArray = [];        // the difference of sum and number array elements 
let differenceArray = [];       // the difference of number and numberTwo array elements

function addInput(){

    topContainer.appendChild(userInput);
    userInput.setAttribute('id','input')
    userInput.style.gridColumn = ' 2/3'
    userInput.style.gridRow = '1/2'
}


function addButtons(){
    
    confirm_Button.setAttribute('id', 'confirm')
    confirm_Button.style.gridColumn = '3/4'
    confirm_Button.textContent = 'Zatwierdź'
    
    clear_Button.setAttribute('id','clear')
    clear_Button.style.gridColumn = '4/5'
    clear_Button.textContent = 'Wyczyść'
}


function clearDiv(){
    let divs = mainContainer.querySelectorAll('.number_Div, .sum_Div, .second_number_Div, .difference_Div')
    divs.forEach(element => element.remove())  
    j = 1;  
}


function addParagraph(count){
    for (let i = 0; i < count; i++) {

        number_Div.appendChild(document.createElement('p'))
        number_Div.querySelectorAll('p').forEach(element => element.classList.add('number_Div'))

        sum_Div.appendChild(document.createElement('p'))
        sum_Div.querySelectorAll('p').forEach(element => element.classList.add('sum_Div'))

        second_number_Div.appendChild(document.createElement('p'))
        second_number_Div.querySelectorAll('p').forEach(element => element.classList.add('second_number_Div'))

        difference_div.appendChild(document.createElement('p'))
        difference_div.querySelectorAll('p').forEach(element => element.classList.add('difference_Div'))
    }


    sum_Label.textContent = 'I. Suma'
    sum_Label.style.marginBottom = '1rem'
    sum_Label.style.gridColumn = '2 / 3'
    sum_Label.style.fontSize = '2rem'
    
    number_Label.textContent = 'II. A'
    number_Label.style.marginBottom = '1rem'
    number_Label.style.gridColumn = '4 / 5'
    number_Label.style.fontSize = '2rem'
    
    second_Number_Label.textContent = 'III. B __Suma - A'
    second_Number_Label.style.marginBottom = '1rem'
    second_Number_Label.style.gridColumn = '6 / 7'
    second_Number_Label.style.fontSize = '2rem'
    
    numbers_Difference_Label.textContent = 'IV. A - B'
    numbers_Difference_Label.style.marginBottom = '1rem'
    numbers_Difference_Label.style.gridColumn = '8 / 9'
    numbers_Difference_Label.style.fontSize = '2rem'
}


function addDivnumberDivs(){

    sumArray = mainContainer.querySelectorAll('.sum_Div')
    sumArray.forEach(element => {
        element.textContent = userInput.value;
        element.style.fontWeight = 'bold'
    })

    numberArray = mainContainer.querySelectorAll('.number_Div')
    numberArray.forEach(element => {
        numberArray[0] = 'sum_Div';
        element.textContent = j++;
    })


    numberTwoArray = mainContainer.querySelectorAll('.second_number_Div')
    numberTwoArray.forEach(( item , index, arr) => {
        arr[index].textContent = sumArray[index].textContent - numberArray[index].textContent
    })

    differenceArray = mainContainer.querySelectorAll('.difference_Div')
    differenceArray.forEach(( item, index, arr) => {
        arr[index].textContent = numberArray[index].textContent - numberTwoArray[index].textContent
        
    })

    

    sum_Div.style.gridColumn = '2 / 3'
    sum_Div.style.gridRow = '2 / 3'

    number_Div.style.gridColumn = '4 / 5'
    number_Div.style.gridRow = '2 / 3'

    second_number_Div.style.gridColumn = '6 / 7'
    second_number_Div.style.gridRow = '2 / 3'

    mainContainer.style.gridColumn = '1 / span 9'
    mainContainer.style.gridRow = '1 / 2'

    difference_div.style.gridColumn = '8 / 9'
}


function setCount() {
    if ( !userInput.value ) {
        return;

    } else {
        
        addParagraph(userInput.value-1)
        addDivnumberDivs()
        clearInput()
    }
}


function clearInput(){
    userInput.value = '';
}


addButtons()
addInput()



