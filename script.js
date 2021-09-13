const form = document.getElementById('form')
const input = document.getElementById('input')
const hide = document.querySelector('.hide')
const result = document.getElementById('result')

form.addEventListener('submit', passMessage)

function passMessage(e) {
    e.preventDefault()

    if (input.value === '') {
        hide.classList.add('show')
        setTimeout( () => {
            hide.classList.remove('show')
        }, 2000 )
    } else {
        result.textContent = input.value
        result.style.color = 'red'
        input.value = ''
    }
}