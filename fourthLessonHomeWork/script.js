const panel = document.querySelector('#panel')

const text = document.querySelector("h3");

const styles = window.getComputedStyle(text);

let fontSize = parseInt(styles.fontSize);

panel.addEventListener('click', event => {
    const test = event.target.dataset.test
    if (test === 'minusX'){
        fontSize--
        text.style.fontSize = fontSize + 'px'
    }else if(test === 'plusX'){
        fontSize++
        text.style.fontSize = fontSize + 'px'
    }else if(test === 'normalX'){
        text.style.fontWeight = "normal"
        text.style.fontStyle = "normal"
    }else if(test === 'boldX'){
        text.style.fontWeight = "700"
    }else if(test === 'italicX'){
        text.style.fontStyle = "italic"
    }
})




