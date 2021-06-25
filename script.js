

var alturaTela = 0
var laguraTela = 0
var vidas = 3
var tempo = 20
var criarMosquitoTempo 

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel == 'normal'){
    criarMosquitoTempo = 1500
}else if(nivel == 'dificil'){
    criarMosquitoTempo = 1000
}else if(nivel == 'chucknorris'){
    criarMosquitoTempo = 750
}



var cronometro = setInterval(function(){
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = './vitoria.html'
    }else{
        document.getElementById("cronometro").innerHTML = tempo
    }
    tempo--

},1000)

function ajustaTamanhoPalcoJogo(){
    alturaTela = window.innerHeight
    laguraTela = window.innerWidth
    console.log(alturaTela, laguraTela)
}
ajustaTamanhoPalcoJogo()



function possicaoRandomica(){
    //remover o mosquito anterior
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if (vidas > 0){
            document.getElementById('v'+vidas).src = "./imagens/coracao_vazio.png"
            vidas--
        }else{
            window.location.href = './fim_do_jogo.html'
        }
       
    }
    


    var possicaoX = Math.floor(Math.random() * laguraTela) - 90
    var possicaoY = Math.floor(Math.random() * alturaTela) - 90 
    
    possicaoY = possicaoY < 0 ? 0: possicaoY
    possicaoX = possicaoX < 0 ? 0: possicaoX
    
    console.log(possicaoX, possicaoY)

    //criar o elemento html 

    var mosquito = document.createElement('img')
    mosquito.src = './imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
    mosquito.style.left = possicaoX +'px'
    mosquito.style.top =possicaoY +'px'
    mosquito.style.position = 'absolute'
    mosquito.id ="mosquito"
    mosquito.onclick = function(){
        this.remove()
    }


    document.body.appendChild(mosquito)
}


function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
        
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
        
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

var criarMosca =  setInterval(function(){
    possicaoRandomica()
},criarMosquitoTempo)