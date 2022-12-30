function tabuada() {
    var numero = document.getElementById('inumber')
    var tab = document.getElementById('seltab')    
    var res = document.getElementById('res')
    
    if (numero.value.length == 0){
        window.alert('[ERRO]: Por favor digite um número! ')

    } else{
        var n = Number(numero.value)
        tab.innerHTML = ''

        for (var c = 0; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

    
}