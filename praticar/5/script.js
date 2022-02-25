let sexo = document.getElementById('sexo_inserido')
let altura = document.getElementById('altura_inserida')
let adicionarSexoEAltura = document.getElementById('adicionar_sexo_e_altura')
let computarSexoEAltura = document.getElementById('computar_sexo_e_altura')
let sexoArr = []
let alturaArr = []
let sexoAlturaArray = []
let sexoAlturaArr = []
let resultado = document.getElementById('resultado')

function sexoEAlturaAdicionadas() {
    if (sexo.value == 'masculino' || sexo.value == 'feminino' || sexo.value == 'Masculino' || sexo.value == 'Feminino' || sexo.value == 'm' || sexo.value == 'f' || sexo.value == 'M' || sexo.value == 'F' && sexo.value.length > 0 && altura.value.length > 0) {
        sexoArr.push(String(sexo.value))
        alturaArr.push(Number(altura.value))
        sexoAlturaArray = sexoArr + alturaArr
        resultado.innerHTML += sexoAlturaArray
    } else {
        alert('[ERROR] Sexo ou altura informado invalido')
    }
    
}

function sexoEAlturaComputadas() {
    resultado.innerHTML = ''
    resultado.innerHTML += sexoAlturaArray
    
}

adicionarSexoEAltura.addEventListener('click', sexoEAlturaAdicionadas)
computarSexoEAltura.addEventListener('click', sexoEAlturaComputadas)