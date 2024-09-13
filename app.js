let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto)
  { let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? "tentativas" :
        "tentativa";        
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute
        ('disabled');

                
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
                
    }
}    

/*função para verificar se o numero ja foi gerado, se sim gerar um novo numero aleatorio, 
ademais verifica no console.log se o codigo esta funcionando bem; PUSH: adiciona um item a lista */

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * 10 + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
     }
} 




function limparCampo() {
    Chute = document.querySelector("input");
    Chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


    