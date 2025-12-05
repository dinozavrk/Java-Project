const phrases = [
    "Отправь другу смешной мем",
    "посмотрю скидки на авиасейлс",
    "разберусь с долгами",
    "я хочу пиццы",
    "посмотри на рекролл",
    "а ты шаришь за 42?",
    "иди учись",
];

// console.log(phrases.length)
// console.log(phrases[0])

// console.log(phrases[phrases.length - 1])

// let rand = Math.random() * 10
// console.log(rand)

// console.log(Math.pow(2,10))
// console.log(Math.sqrt(16))
// console.log(Math.floor(Math.random() * 10))

// const randomIndex = Math.floor(Math.random() * phrases.length)

// console.log(phrases[randomIndex] )

const min = Math.min()
const max = Math.max()
function randomInteger(min, max){
    
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}
console.log(randomInteger(1, 5))
console.log(randomInteger(7, 15))
console.log(randomInteger(40, 42))








