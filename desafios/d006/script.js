function adicionar_item_tabela(){
    let numeroInformado = document.getElementById('numero_informado')
    let numerosInformadosSelect = document.getElementById('numeros_informados_select')
    let numeroInformadoConvertido = Number(numeroInformado.value)

    function adicionado(sim) {
        if (sim.indexOf(Number(numeroInformadoConvertido)) != -1) {
            return true
        } else {
            return false
        }
    }

    if (numeroInformadoConvertido >= 1 && numeroInformadoConvertido <= 100) {
        let criarSelectOption = document.createElement('option')
        criarSelectOption.text = `valor ${numeroInformadoConvertido} adicionado`
        numerosInformadosSelect.appendChild(criarSelectOption)
    } else {
        alert('[ERROR] Por favor digite algo!')
    }
    
    
}

function amostrar_resultado(){
    
}