function andarEsquerda() {
  let elemento = document.querySelector("#bicho img");

  let atual = parseInt(window.getComputedStyle(elemento).marginLeft) || 0;
  let novo = atual - 50;

  // limite para não sair da tela pela esquerda
  if (novo < -350) novo = -350;

  elemento.style.marginLeft = novo + "px";
}

function andarDireita() {
  let elemento = document.querySelector("#bicho img");

  let atual = parseInt(window.getComputedStyle(elemento).marginLeft) || 0;
  let novo = atual + 50;

  // limite para não sair da tela pela direita
  if (novo > 650) novo = 650;

  elemento.style.marginLeft = novo + "px";
}

function movimento() {
  setInterval(() => {
    let direcao = Math.random() < 0.5 ? "esquerda" : "direita";
    if (direcao === "esquerda") {
      andarEsquerda();
    } else {
      andarDireita();
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", movimento);
