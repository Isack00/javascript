let valor = document.getElementById('valor_digitado')
let calcular = document.getElementById('calcular')
let amazenarValorDigitado = document.getElementById('amazenar')
let resultadoCalculoMedia = document.getElementById('resultado_calculo_media')
let totalArray = []
let total

function amazenarMedia() {
   if (valor.value < 1){
        alert('[ERROR] Por favor digite um número maior que 0')
        valor.value = ''
    } else {
        totalArray.push(Number(valor.value))
        resultadoCalculoMedia.innerHTML = `Números digitados: ${totalArray}`
        valor.value = ''
    }
}

function calcularMedia() {
    if (totalArray.length == 1) {
        alert('[ERROR] Por favor digite outro número')
    } else if (totalArray.length == 0){
        alert('[ERROR] Por favor digite dois ou mais números')
    } else {
        total = totalArray.reduce((value, index) => value + index, 0)
        total = total / totalArray.length
        resultadoCalculoMedia.innerHTML = `O resultado da média é: ${total}`
    } 
}

amazenarValorDigitado.addEventListener('click', amazenarMedia)
calcular.addEventListener('click', calcularMedia)