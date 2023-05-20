// Перед тобой 5 кнопок и текст. Релизуй функционал, чтобы при нажатии на каждую из кнопок происходили следующие действия:

// - - уменьшает шрифт
// + - увеличивает шрифт
// n - делает свойства font-weight и font-style в значение normal
// b - делает свойство font-weight в значение bold
// i - делает свойство font-style в значение italic
// TODO-------------------------------------------------------------------------------------------------------------
const minus = document.querySelector('#minus')
const text = document.querySelector('#text')
const plus = document.querySelector('#plus')
const normal = document.querySelector('#normal')
const bold = document.querySelector('#bold')
const italic = document.querySelector('#italic')
// TODO-------------------------------------------------------------------------------------------------------------
const zxc = window.getComputedStyle(text)
let fontSize = parseInt(zxc.fontSize)

minus.addEventListener('click', reduceFont) 
function reduceFont(){
    fontSize--
    text.style.fontSize = fontSize + 'px'
}
plus.addEventListener('click', increaseFont)
function increaseFont(){
    fontSize++
    text.style.fontSize = fontSize + 'px'
}
normal.addEventListener('click', resetDefaultCondition)
function resetDefaultCondition(){
    text.style.fontWeight = "normal"
    text.style.fontStyle = "normal"
}
bold.addEventListener('click', boldStyle)
function boldStyle(){
    text.style.fontWeight = "700"
}
italic.addEventListener('click', italicStyle)
function italicStyle(){
    text.style.fontStyle = "italic"
}
