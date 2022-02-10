function tabuada() {
    var num = document.getElementById('textn')
    var tab = document.getElementById('seltab')

    
    if (num.value.length == 0) {
        alert('[ERROR] Por favor digite um número')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ``
        for (var c; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}