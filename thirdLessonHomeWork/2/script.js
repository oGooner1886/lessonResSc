// Пример получения CSS свойств из элемента

// 1) Получаем сам элемент
const minus = document.querySelector('#minus')
const text = document.querySelector("#text");



// 2) Получаем объект всех его стилей
const styles = window.getComputedStyle(text);
console.log(styles);


// 3) Достаем нужный стиль
const paddingLeft = parseInt(styles.paddingLeft);
console.log(paddingLeft);

