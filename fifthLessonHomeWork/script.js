const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const list = document.querySelector('#list')
const form = document.querySelector('#form')


form.addEventListener('submit', createList)
const newArray = []

function createList(event){
    event.preventDefault()
    const {input} = event.target
    if(input.value === ''){
    return
}else {
        newArray.push(input.value)
        renderList()
        input.value = ''}
}    

function renderList(){
    if (newArray.lenght === 0){
        list.innerHTML = '<p>zxczxczxczxczxc</p>'
    } else {
    let html = ''
    for (let i = 0; i < newArray.length; i++){
        let listText = newArray[i]
        html += `
        <ul class="list" id="list">
            <li>${listText}</li>
        </ul>
        `
    }
    list.innerHTML = html
}
}

