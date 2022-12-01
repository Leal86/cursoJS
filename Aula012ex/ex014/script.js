function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 0
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = ('#e2cd9f')
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = ('#e9957c')
    }
    else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = ('#3a3a3c')
    }
}
