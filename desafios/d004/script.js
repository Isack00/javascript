function calcular() {
    var i = document.getElementById('iniciotxt')
    var f = document.getElementById('fimtxt')
    var p = document.getElementById('passotxt')
    var res = document.getElementById('res')

    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {

        res.innerHTML = 'Impossível contar!!!'

    } else {
        res.innerHTML = 'Contando: <br>'
        var Ninicio = Number(i.value)
        var Nfim = Number(f.value)
        var Npasso = Number(p.value)
        if (Npasso <= 0) {
            alert('Impossível contar! Considerando PASSO 1')
            Npasso = 1
        }
        if (Ninicio < Nfim) {

            for (var Ninicio; Ninicio <= Nfim; Ninicio += Npasso) {
                res.innerHTML += ` ${Ninicio} \u{1F449}`
            }
            res.innerHTML += `\u{1f3c1}`
        } else {
            for (var Ninicio; Ninicio >= Nfim; Ninicio -= Npasso) {
                res.innerHTML += ` ${Ninicio} \u{1F449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}