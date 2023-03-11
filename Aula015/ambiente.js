let num = [5,8,2,9,3]
num[5] = 1
num.push(4)

console.log(`Nosso vetor é o ${num}.`)

console.log(`O vetor possui ${num.length} posições.`)

console.log(`O vetor organizado em ordem crescente é ${num.sort()}`)

let pos = num.indexOf(10)

if(pos == -1) {
    console.log(`O valor pesquisado não existe nesse vetor`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
