let emoji = document.getElementsByClassName('emoji-carta')[0]
let carta = document.getElementsByClassName('carta')[0]

function virarCarta() {
    carta.classList.add('carta-virada')
    emoji.classList.add('emoji-virado')
}

carta.addEventListener('click', virarCarta)