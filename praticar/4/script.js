let idade = document.getElementById('idade_inserido')
let adicionarIdade = document.getElementById('adicionar_idade')
let computarIdade = document.getElementById('computar_idade')
let resultado = document.getElementById('resultado')
let idadeArr = []
let deMaior = []
let deMenor = []

function idadeAdicionada() {
    if (idade.value == 0) {
        alert('[ERROR] Por favor insira um número')
    }
    else if (idadeArr.length > 4) {
        alert('[ERROR] Quantidade máxima de números já inserido')
    } else {
        idadeArr.push(Number(idade.value))
        resultado.innerHTML += idade.value + ','
        if (idade.value >= 18) {
            deMaior.push(idadeArr.value)
        } 
        else {
            deMenor.push(idadeArr.value)
        }
    }
    idade.value = ''
}

function idadeComputada() {
    if (idadeArr.length == 5) {
        resultado.innerHTML = ''
        resultado.innerHTML += 'Maiores: ' + deMaior.length
        resultado.innerHTML += '<br>Menores: ' + deMenor.length
    } else {
        alert('[ERROR] Por favor insira 5 números')
    }
    
}

adicionarIdade.addEventListener('click', idadeAdicionada)
computarIdade.addEventListener('click', idadeComputada)