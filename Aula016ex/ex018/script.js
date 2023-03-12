let num = document.querySelector('input#number')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    //Teste se o número esta entre o intervalo entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    //Teste se o numero digitado exite dentro da lista
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    /*
        Teste se é um número válido e se ele não esta inserido na lista,
        caso ele seja um número e não esteja inserido na lista, ele 
        adiciona o número com a mensagem, senão ele retorna a mensagem
        com 'Valor inválido ou já encontrado na lista.'
    */
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    //limpa o campo
    num.value = ''

    // Deixa o campo selecionado
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        /*
            Analiza todos os números, faz a soma, e determina qual é o maior e qual é o menor
        */
        for (let pos in valores) {

            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }

        }
        
        //calculo da média
        media = soma / tot

        //limpa a div res
        res.innerHTML = ''

        //Cria as mensagens dentro da div com id 'res'
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média de todos os números cadastrados foi: ${media}</p>`
    }
}