let botaoComer = document.getElementsByClassName("comer")[0];
let botaoCarinho = document.getElementsByClassName("carinho")[0];
let botaoDormir = document.getElementsByClassName("dormir")[0]
let imagem = document.getElementById('spriteNormal');
let statusTexto = document.getElementById('status');

let imagemOriginalSrc = imagem.src;
let novaImagemSrc = '/img/sprites/slime-respirando-mal.gif';
let imagemComendoSrc = '/img/sprites/slime-comendo.gif';
let imagemAmorSrc = '/img/sprites/slime-amor.gif';
let imagemDormindoSrc = '/img/sprites/slime-dormindo.gif';
   
function trocarParaSlimeTriste() {
    document.getElementById("popup").style.display = "flex";
    imagem.src = novaImagemSrc;
    statusTexto.textContent = 'A imagem foi trocada automaticamente!';
    console.log('Imagem alterada após 30 segundos.');
}

      
function restaurarImagemOriginal() {
    document.getElementById("popup").style.display = "none";       
    imagem.src = imagemOriginalSrc;
    statusTexto.textContent = 'A imagem original foi restaurada!';
    console.log('Imagem restaurada pelo usuário.');
}

function trocarParaSlimeComendo() {      
    document.getElementById("popup").style.display = "none";  
    imagem.src = imagemComendoSrc;
    setTimeout(restaurarImagemOriginal, 7000);
    setTimeout(trocarParaSlimeTriste, 20000); 
    statusTexto.textContent = 'A imagem original foi restaurada!';
    console.log('Imagem restaurada pelo usuário.');
}


function trocarParaSlimeCarinho() {     
    document.getElementById("popup").style.display = "none";   
    imagem.src = imagemAmorSrc;
    setTimeout(restaurarImagemOriginal, 7000);
    setTimeout(trocarParaSlimeTriste, 20000); 
    statusTexto.textContent = 'A imagem original foi restaurada!';
    console.log('Imagem restaurada pelo usuário.');
}


function trocarParaSlimeDormindo() {      
    document.getElementById("popup").style.display = "none";  
    imagem.src = imagemDormindoSrc;
    setTimeout(restaurarImagemOriginal, 7000);
    setTimeout(trocarParaSlimeTriste, 20000); 
    statusTexto.textContent = 'A imagem original foi restaurada!';
    console.log('Imagem restaurada pelo usuário.');
}
      
setTimeout(trocarParaSlimeTriste, 5000); 

botaoComer.addEventListener('click',trocarParaSlimeComendo);

botaoCarinho.addEventListener('click',trocarParaSlimeCarinho);

botaoDormir.addEventListener('click',trocarParaSlimeDormindo);