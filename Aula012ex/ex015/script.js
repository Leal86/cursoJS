
function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iano')
    var msg = window.document.querySelector('div#resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
        else {
                var fsex = window.document.getElementsByName('sexo')
                var idade = ano - Number(fano.value)
                //resultado.innerHTML = `sua idade é ${idade}`
                var genero = ''
                var img = window.document.createElement('img')
                img.setAttribute('id', 'foto')
                
                if (fsex[0].checked) {
                    genero = 'homem'
                    
                    if (idade >= 0 && idade < 6 ) {
                        img.setAttribute('src', 'imagens/homem-0a5-anos.png')
                    } 
                        else if (idade < 11) {
                            img.setAttribute('src', 'imagens/homem-5a10-anos.png')
                        } 
                            else if (idade < 16) {
                                img.setAttribute('src', 'imagens/homem-10a15-anos.png')
                            }           
                                else if (idade < 21) {
                                    img.setAttribute('src', 'imagens/homem-15a20-anos.png')
                                } 
                                    else if (idade < 31) {
                                        img.setAttribute('src', 'imagens/homem-20a30-anos.png')
                                    } 
                                        else if (idade < 41) {
                                            img.setAttribute('src', 'imagens/homem-30a40-anos.png')
                                        }   
                                            else if (idade < 51) {
                                                img.setAttribute('src', 'imagens/homem-40a50-anos.png')
                                            } 
                                                else {
                                                    img.setAttribute('src', 'imagens/homem-60ou+anos.png')
                                                }


                } 
                    else if (fsex[1].checked) {
                    genero = 'mulher'
                    
                        if (idade >= 0 && idade < 6 ) {
                            img.setAttribute('src' ,'imagens/mulher-0a5-anos.png')
                        }   
                            else if (idade < 11) {
                                img.setAttribute('src' ,'imagens/mulher-5a10-anos.png')
                            } 
                                else if (idade < 16) {
                                    img.setAttribute('src' ,'imagens/mulher-10a15-anos.png')
                                }  
                                    else if (idade < 21) {
                                        img.setAttribute('src' ,'imagens/mulher-15a20-anos.png')
                                    }  
                                        else if (idade < 31) {
                                            img.setAttribute('src' ,'imagens/mulher-20a30-anos.png')
                                        }  
                                            else if (idade < 41) {
                                                img.setAttribute('src' ,'imagens/mulher-30a40-anos.png')
                                            }  
                                                else if (idade < 51) {
                                                    img.setAttribute('src' ,'imagens/mulher-40a50-anos.png')
                                                }  
                                                    else {
                                                        img.setAttribute('src' ,'imagens/mulher-60ou+anos.png')
                                                    }  
                    }

                resultado.innerHTML = `Detectamos ${genero} de ${idade} anos.`
                resultado.appendChild(img)
        }
}