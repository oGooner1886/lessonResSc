const modal = document.querySelector('#modal')

const content = document.querySelector('#content')

const backdrop = document.querySelector('#backdrop')

const progress = document.querySelector('#progress')

const form = document.querySelector('#form')

content.addEventListener('click', openCard)

backdrop.addEventListener('click', closeCard)

modal.addEventListener('change', toggleTech)

form.addEventListener('submit', createTech)

// modal.classList.add('open')
// setTimeout(function(){
//     modal.classList.remove('open')
// }, 2000)
const APP_TITLE = document.title
const LS_KEY = 'MY_TECHS'

const newArray = getState()

function openCard(event){
    const data = event.target.dataset
    const tech = newArray.find(t => t.type === data.type) //на каждой итерации мы получаем технологию(t обозначает по очереди элементы массива) и когда находим элемент говорим...
    if (!tech) return
    
    openModal(toModal(tech), tech.title)

}
function toggleTech(event){
    const type = event.target.dataset.type
    const tech = newArray.find(t => t.type === type)
    tech.complete = event.target.checked
    saveState()
    init()
}
function openModal(html, title = APP_TITLE){
    document.title = `${title} | ${APP_TITLE}`
    modal.innerHTML = html
    modal.classList.add('open')
}
function toModal(tech){         //убираем статику из html в js
    const checked = tech.complete ? 'checked' : ''
    return `
    <h2>${tech.title}</h2>
    <p>${tech.description}</p>
    <hr />
    <div>
      <input type="checkbox" id="done" ${checked} data-type="${tech.type}"/>
      <label for="done">Выучил</label>
    </div>
    `
}

function closeCard(){
    document.title = APP_TITLE
    modal.classList.remove('open')
}

function init() {
    renderCards()
    renderProgress()
}

function renderCards () {
    if (newArray.length === 0) {
        content.innerHTML = '<p class="empty"> Технологий пока нет, добавьте первую</p>'
    } else {
        let html = ''
        for( i=0; i<newArray.length; i++ ) {
            const zxc = newArray[i]
            html += toCard(zxc)
        }
        content.innerHTML = html
        // content.innerHTML = newArray.map(toCard).join('') 
    }
}

function renderProgress(){
    const percent = computeProgressPercent()
    
    let background
    if(percent <= 30){
        background = '#73ba3c'
    } else if (percent > 30 && percent <70){
        background = '#f99415'
    } else {
        background = '#73ba3c'
    }

    progress.style.background = background
    progress.style.width = percent + '%'
    progress.textContent = percent ? percent + '%' : '' //TODO Если процент не равняется 0, тогда это будет процент плюс процент, а иначе мы ничего не добавим
}

function computeProgressPercent(){
    if (newArray.length === 0){
        return 0
    }
    let completeCount = 0
    for (let i = 0; i < newArray.length; i++){
        if (newArray[i].complete) completeCount++
    }
    return Math.round((100 * completeCount ) / newArray.length)  //! Реазилация вычисления процента (100% * выполненное количество и делим на общее)
}



function toCard(zxc) {
    // let completeClass = ''
    // if(zxc.complete) {
    //     completeClass = 'complete'
    // }
    
    const completeClass = zxc.complete ? 'complete' : ''
    
    return    `
    <div class = "card ${completeClass}" data-type="${zxc.type}">
    <h3 data-type="${zxc.type}">${zxc.title}</h3> 
    </div>
    `   //в строке h3 прописано data-type, для исправления бага с кликом на текст к в карточке(чтобы убрать undefinded)
}

function isInvalid(title, description){
    return !title.value || !description.value   //если не title.value и не description.value форма не валидная
}

function createTech(event){
    event.preventDefault()

    
    const {title, description} = event.target //! сокращаем запись const title = event.target.title
                                              //!const description = event.target.description
        
        //TODO -Валидация-
        if(isInvalid(title, description)){    //! метод (isInvalid) будет проверять, корректные ли данные в форме
            if(!title.value) title.classList.add('invalid')
            if(!description.value) description.classList.add('invalid')
            
            setTimeout(() => {                //! для анимации полей названия и описания (смотри в html,css)
                title.classList.remove('invalid')
                description.classList.remove('invalid')
            }, 2000)
            return                            //!если данные некорректные дальнейшую форму выполнять не будем
        }
        
        
        const newTech = {
        title: title.value,
        description: description.value,
        complete: false,
        type: title.value.toLowerCase()
    }
    newArray.push(newTech)                    //!метод push (добавляет элементы в конец массива)
    title.value = ''
    description.value = ''
    saveState()
    init()
}

function saveState(){                         //! сохраняет состояние
    localStorage.setItem(LS_KEY, JSON.stringify(newArray))
}
function getState(){                          //! получает состояние
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : []         //! если raw то вернем json.parse.raw а иначе вернем пустой массив
}

init()

