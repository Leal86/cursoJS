function contar() {
    var ini = document.getElementById('istart')
    var fim = document.getElementById('iend')
    var jump = document.getElementById('ijump')
    var res = document.getElementById('resultado')

    res.innerHTML = '<br>Vamos começar:<br>'

    if (ini.value.length == 0 || fim.value.length == 0 || jump.value.length == 0) {
        window.alert('[ERRO]: Faltam dados!')
    } else {
        res.innerHTML = '<br>Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(jump.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `👉 ${c} `
            } 
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `👉 ${c} `
            }
        }
        
        res.innerHTML += `🏁`
    }
    

 

}