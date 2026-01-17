const input = document.querySelector('input')
const btn = document.querySelector('button')


btn.addEventListener('click', () => {
    if (input.value === '') {
        alert('Enter a Text')
        return;
    }

    addText(input.value)
    input.value = ''
})



// add text dynamically

function addText(text){
    const li = document.createElement('li')
    const add_text = document.createTextNode(`${text}- ${text.trim().length}`)
    li.appendChild(add_text)
    document.getElementById('char-lists').appendChild(li)
}

