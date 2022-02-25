let valor = document.getElementById('valor_digitado')
let adicionarValor = document.getElementById('valor_adicionado')
let calcularValor = document.getElementById('valor_calculado')
let removerNumero = document.getElementById('remover_ultimo_numero_informado')
let resultado = document.getElementById('resultado')
let valorTotal = []

function adicionarValorNoValorTotal() {
    if (valor.value == 0 || valorTotal.length == 5) {
        alert('[ERROR] Você só pode adicionar até 5 números e que sejam maior que 0')
        valor.value = ''
    } else {
        valorTotal.push(Number(valor.value*valor.value))
        resultado.innerHTML += valor.value + ','
        valor.value = ''
    }
}

function calcularTotal() {
    if (valorTotal.length == 5) {
        resultado.innerHTML = 'Valor Informado: '
        resultado.innerHTML += valorTotal
    } else {
        alert('[ERROR] Por favor digite 5 números')
    }
}

function removerUltimoNumero() {
    valorTotal.pop()
}

adicionarValor.addEventListener('click', adicionarValorNoValorTotal)
calcularValor.addEventListener('click', calcularTotal)
removerNumero.addEventListener('click', removerUltimoNumero)