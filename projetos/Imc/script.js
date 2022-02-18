let nomeCalculo = document.getElementById('nome_calculo_imc')
let alturaCalculo = document.getElementById('altura_calculo_imc')
let pesoCalculo = document.getElementById('peso_calculo_imc')
let resultadorImcFinal = document.getElementById('resultado_do_imc')


function calcular() {
    let nomeCalculoConvertido = String(nomeCalculo.value)
    let alturaCalculoConvertido = parseFloat(alturaCalculo.value)
    let pesoCalculoConvertido = Number(pesoCalculo.value)
    let resultadorImc = (pesoCalculoConvertido / (alturaCalculoConvertido*alturaCalculoConvertido)).toFixed(1)
    let classificação = ''

    if (resultadorImc < 18.5) {
        classificação = 'abaixo do peso'
    } else if (resultadorImc < 25) {
        classificação = 'com peso ideal. Parabéns'
    } else {
        classificação = 'acima do peso'
    }

    if (nomeCalculoConvertido == '' || alturaCalculoConvertido == '' || pesoCalculoConvertido == '') {
        resultadorImcFinal.innerHTML = 'Preencha todos os campos!!!'
    } else {
        resultadorImcFinal.innerHTML = `${nomeCalculoConvertido} seu IMC é ${resultadorImc} e você está ${classificação}`
    }
    

    
    
}