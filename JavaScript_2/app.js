let  NumeroSecero = GerarNúmeroAleatorio();
let Tentativas = 1;


//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Explorer The  Game';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'choose a number from 1 to 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);    
campo.innerHTML = texto;
}

function ExibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'Explorer The  Game');
    exibirTextoNaTela('p' , 'choose a number from 1 to 10');   
}
ExibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == NumeroSecero) {
        exibirTextoNaTela('h1', 'Congratulations you got it right !');
        let palavraTentativas = Tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagensTentativas = `you discovered the secret number  attempts ${Tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p',  'you discovered the secret number');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > NumeroSecero ) {
            exibirTextoNaTela ('p', 'The secret and smallest number');
        } else {
            exibirTextoNaTela('p', 'The secret of the number is greater' );
        } 
        Tentativas++;
        limparCampo();
    }
}

function GerarNúmeroAleatorio ( ) {
     return parseInt(Math.random() * 10 + 1 );
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo() {
    NumeroSecero = GerarNúmeroAleatorio ();
    limparCampo();
    Tentativas =1 ;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}
   


