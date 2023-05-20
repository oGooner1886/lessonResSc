const content = document.querySelector('#content')

const newArray = [
    {type: 'js', title: 'Learn JavaScript', done: true},
    {type: 'git', title: 'Practice with git', done: true},
    {type: 'react', title: 'Learn React', done: false},
    {type: 'node', title: 'Learn NodeJS', done: false},
    {type: 'job', title: 'Get a job', done: false},
]

// let arr = ''
// for (let i = 0; i < newArray.length; i++) {
//     const zxc = newArray[i]
//     arr+= toCard(zxc)
// }
// content.innerHTML = arr
content.innerHTML = newArray.map(toCard).join('')

function toCard(zxc){
    const doneClass = zxc.done ? 'done' : ''
    return `
    <li>
        <label data-type="js">
        <input type="checkbox" ${doneClass} /> ${zxc.title}
        </label>
    </li>
    `
}