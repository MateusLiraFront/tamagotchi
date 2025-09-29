function andarEsquerda() {
  let elemento = document.querySelector("#bicho img");

  let atual = parseInt(window.getComputedStyle(elemento).marginLeft) || 0;
  let novo = atual - 50;

  // limite para não sair da tela pela esquerda
  if (novo < -200) novo = -200;

  elemento.style.marginLeft = novo + "px";
  elemento.style.transform = "scaleX(-1)";
}

function andarDireita() {
  let elemento = document.querySelector("#bicho img");

  let atual = parseInt(window.getComputedStyle(elemento).marginLeft) || 0;
  let novo = atual + 50;

  // limite para não sair da tela pela direita
  if (novo > 380) novo = 400;

  elemento.style.marginLeft = novo + "px";
  elemento.style.transform = "scaleX(1)";
}

function movimento() {
  setInterval(() => {
    let direcao = Math.random() < 0.5 ? "esquerda" : "direita";
    if (direcao === "esquerda") {
      andarEsquerda();
    } else {
      andarDireita();
    }
    posicaoPopup();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", movimento);

// posição do popup
let bicho = document.querySelector("#bicho img");
let popup = document.querySelector("#popup");
function posicaoPopup(){
  
  let estilo = window.getComputedStyle(bicho);
  let marginLeft = parseInt(estilo.marginLeft) || 0;

  popup.style.marginLeft = marginLeft + "px";

}
document.addEventListener("DOMContentLoaded", posicaoPopup);