const phrases = [
    "Отправь другу смешной мем",
    "посмотрю скидки на авиасейлс",
    "разберусь с долгами",
    "я хочу пиццы",
    "посмотри на рекролл",
    "а ты шаришь за 42?",
    "иди учись",
]; //Math.pow(x,y)

// const newArr = [1, 2, 3, 4, 52]

const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    // console.log(arr[randomIndex])
    return arr[randomIndex]
}
let randomElement = getRandomElement(phrases)
console.log(randomElement)

const btn1 = document.querySelector(".btn1")
console.log(btn1)
const image = document.querySelector(".image")
console.log(image)
const advice = document.querySelector(".advice")
console.log(advice)
const advice__paragraph = document.querySelector(".adviceparagraph")
console.log(advice__paragraph)

btn1.addEventListener("click", () => {
    console.log("52")
})

// let x = prompt("Введите число")
// let y = prompt("Введите вашу степень")

// const pow = (x, y) => {

//     let n = x**y

//     if( x === null || x.trim() === "" ) 
//         return"ВВЕДИ ЧИСЛО"
//     if( y === null || y.trim() === "")
//         return"ВВЕДИ ЧИСЛО"
//     if(isNaN(x) || isNaN(y))
//         return"НУЖНО ЧИСЛО!!!!"

//     return n

//     }

// console.log(pow(x, y))



// let x = prompt("Введите число")
// let y = prompt("Введите вашу степень")

// const pow = (x, y) => {

//     let n = x**y

//     if(!x || !y)
//         return"ВВЕДИ ТЫ УЖЕ ЧИСЛО"
//     if(isNaN(x) || isNaN(y))
//         return"ТЫ МНЕ УЖЕ НАДОЕЛ, ВВЕДИ ЧИСЛА"
//     return n

//     }

// console.log(pow(x, y))



































































// const min = Math.min()
// const max = Math.max()
// function randomInteger(min, max){ 
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(randomInteger(1, 5))
// console.log(randomInteger(7, 15))
// console.log(randomInteger(40, 42))










