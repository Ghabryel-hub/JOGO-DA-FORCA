var cabeca = document.querySelector('.cabeca')
var corpo = document.querySelector('.corpo_boneco')
var braco_dir = document.querySelector('.braco_dir')
var braco_esq = document.querySelector('.braco_esq')
var perna_dir = document.querySelector('.perna_dir')
var perna_esq = document.querySelector('.perna_esq')

var l1 = document.querySelector('#l1')
var l2 = document.querySelector('#l2')
var l3 = document.querySelector('#l3')
var l4 = document.querySelector('#l4')
var l5 = document.querySelector('#l5')
var l6 = document.querySelector('#l6')
var l7 = document.querySelector('#l7')
var l8 = document.querySelector('#l8')
var l9 = document.querySelector('#l9')
var l10 = document.querySelector('#l10')
var l11 = document.querySelector('#l11')
var l12 = document.querySelector('#l12')


var biblioteca = ['GALINHA', 'CACHORRO', 'DINHEIRO', 'GHABRYEL']
var palavra = []
var mostra_pala = []
var pontos = 0
var erro = 6


function matar() {
    
    cabeca.style.display = 'block'
    corpo.style.display = 'block'
    braco_dir.style.display = 'block'
    braco_esq.style.display = 'block'
    perna_dir.style.display = 'block'
    perna_esq.style.display = 'block'
}



function teclado(letra) {
   
     //a letra só apareçe ser a letra diver burro
    if (palavra[0]) {
        if (palavra[0] == letra) {
            pontos++
            l1.value = letra
        }
        if (palavra[0] != letra) {
            erro--
        }
    }
    if (palavra[1]) {
        if (palavra[1] == letra) {
            pontos++
            l2.value = letra
        }
        if (palavra[1] != letra) {
            erro
        }
    }
    
    if (palavra[2] == letra) {
        pontos++
        l3.value = letra
    }
    if (palavra[3] == letra) {
        pontos++
        l4.value = letra
    }
    if (palavra[4] == letra) {
        pontos++
        l5.value = letra
    }
    if (palavra[5] == letra) {
        pontos++
        l6.value = letra
    }
    if (palavra[6] == letra) {
        pontos++
        l7.value = letra
    }
    if (palavra[7] == letra) {
        pontos++
        l8.value = letra
    }
    if (palavra[8] == letra) {
        pontos++
        l9.value = letra
    }
    if (palavra[9] == letra) {
        pontos++
        l10.value = letra
    }
    if (palavra[10] == letra) {
        pontos++
        l11.value = letra
    }
    if (palavra[11] == letra) {
        pontos++
        l12.value = letra
    }
    console.log('ACERTOS ' + pontos)
console.log('ERROS ' + erro)
}
    //----------------------------------//


    
    
        


function sortear() {
    var sorteio = Math.floor( Math.random(biblioteca) * biblioteca.length)
    console.log(biblioteca[sorteio])

    for (let i = 0; i < biblioteca[sorteio].length; i++) {
        palavra.push(biblioteca[sorteio][i])
        console.log('LETRA ' + palavra)
    }
    console.log(palavra.length)
   
    if (palavra.length == 7) {
        l1.style.display = 'flex'
        l2.style.display = 'flex'
        l3.style.display = 'flex'
        l4.style.display = 'flex'
        l5.style.display = 'flex'
        l6.style.display = 'flex'
        l7.style.display = 'flex'
        l8.style.display = 'none'
        l9.style.display = 'none'
        l10.style.display = 'none'
        l11.style.display = 'none'
        l12.style.display = 'none'
   }
  
   if (palavra.length == 8) {
        l1.style.display = 'flex'
        l2.style.display = 'flex'
        l3.style.display = 'flex'
        l4.style.display = 'flex'
        l5.style.display = 'flex'
        l6.style.display = 'flex'
        l7.style.display = 'flex'
        l8.style.display = 'flex'
        l9.style.display = 'none'
        l10.style.display = 'none'
        l11.style.display = 'none'
        l12.style.display = 'none'
    }

    if (palavra.length == 9) {
        l1.style.display = 'flex'
        l2.style.display = 'flex'
        l3.style.display = 'flex'
        l4.style.display = 'flex'
        l5.style.display = 'flex'
        l6.style.display = 'flex'
        l7.style.display = 'flex'
        l8.style.display = 'flex'
        l9.style.display = 'none'
        l10.style.display = 'none'
        l11.style.display = 'none'
        l12.style.display = 'none'
   
    }
    if (palavra.length == 10) {
        l1.style.display = 'flex'
        l2.style.display = 'flex'
        l3.style.display = 'flex'
        l4.style.display = 'flex'
        l5.style.display = 'flex'
        l6.style.display = 'flex'
        l7.style.display = 'flex'
        l8.style.display = 'flex'
        l9.style.display = 'flex'
        l10.style.display = 'none'
        l11.style.display = 'none'
        l12.style.display = 'none'
   
    }
    if (palavra.length == 11) {
        l1.style.display = 'flex'
        l2.style.display = 'flex'
        l3.style.display = 'flex'
        l4.style.display = 'flex'
        l5.style.display = 'flex'
        l6.style.display = 'flex'
        l7.style.display = 'flex'
        l8.style.display = 'flex'
        l9.style.display = 'flex'
        l10.style.display = 'flex'
        l11.style.display = 'none'
        l12.style.display = 'none'
   
    }
    if (palavra.length == 12) {
        l1.style.display = 'flex'
        l2.style.display = 'flex'
        l3.style.display = 'flex'
        l4.style.display = 'flex'
        l5.style.display = 'flex'
        l6.style.display = 'flex'
        l7.style.display = 'flex'
        l8.style.display = 'flex'
        l9.style.display = 'flex'
        l10.style.display = 'flex'
        l11.style.display = 'flex'
        l12.style.display = 'flex'
    }

//PARA TIRA O UNDEFINED
    if (l1.value  == 'undefined') {
        li.value = ''
        l1.style.display = ''
    }
    if(l2.value  == 'undefined') {
        l2.value = ''
    }
    if(l3.value  == 'undefined') {
        l3.value = ''
    }
    if(l4.value  == 'undefined') {
        l4.value = ''
    }
    if(l5.value  == 'undefined') {
        l5.value = ''
    }
    if(l6.value  == 'undefined') {
        l6.value = ''
    }
    if(l7.value  == 'undefined') {
        l7.value = ''
    }
    if(l8.value  == 'undefined') {
        l8.value = ''
    }
    if(l9.value  == 'undefined') {
        l9.value = ''
    }
     if(l10.value  == 'undefined') {
        l10.value = ''
    }
    if(l11.value  == 'undefined') {
        l11.value = ''
    }
    if(l12.value  == 'undefined') {
        l12.value = ''
    }
}

sortear()


