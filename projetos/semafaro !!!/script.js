let semafaro = document.getElementById('semafaro')
let buttons = document.getElementById('buttons')

let changeColor = ['vermelho', 'amarelo', 'azul']

if (changeColor = 'vermelho') {
    semafaro.src = 'images/vermelho.png'
}

buttons.addEventListener('click', changeColor)