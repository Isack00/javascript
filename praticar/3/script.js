let valor = document.getElementById('valores')
let adicionarValores = document.getElementById('adicionar_valores')
let enviarValores = document.getElementById('enviar_valores')
let resultado = document.getElementById('resultado')
let valorArr = []

function valoresAdicionados() {
    if (valor.value.length == 0) {
        alert('[ERROR] Por favor insira um número')
    } else if (valorArr.length > 4){
        alert('[ERROR] Quantidade máxima de números já inserido')
        valor.value = ''
    } else if (valor.value > 9){
        alert('Por favor insira um número entre 1 e 9')
        valor.value = ''
    } else {
        valorArr.push(Number(valor.value))
        resultado.innerHTML += valor.value + ','
        valor.value = ''
    }
    
}

function valoresEnviados() {
    if (valorArr.length == 5) {
        resultado.innerHTML = ''
        valorArr.sort()
        valorArr.reverse()
        resultado.innerHTML = 'Maior número inserido: '
        resultado.innerHTML += valorArr[0]
    } else {
        alert('[ERROR] Quantidade de números invalida, por favor insira 5 números')
    }
    
}

adicionarValores.addEventListener('click', valoresAdicionados)
enviarValores.addEventListener('click', valoresEnviados)