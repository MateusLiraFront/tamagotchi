//------------------troca de tamagotchi oval -----------------
let tamagotchiTelaDeInicio = document.getElementById("tamagotchi-oval");
let tamagotchiCostas = document.getElementById("tamagotchi-costas");

tamagotchiTelaDeInicio.id = "tela-de-inicio"

function trocarTamagotchiOval() {
  let tamagotchiFrente = document.createElement("img");

  tamagotchiFrente.src = '/img/sprites/tamagotchi-frente-reformatado.gif';
  
  tamagotchiFrente.id = "tamagotchi-frente";

  tamagotchiCostas.replaceWith(tamagotchiFrente);
}

tamagotchiTelaDeInicio.addEventListener('click', trocarTamagotchiOval);

//----------------------------------------------troca pra o tamagotchi retangular-----------------------

let ativarTelaDeJogo = document.getElementById("botao-troca-tela-inicio");
let telaDeJogo = document.getElementById("tamagotchi");
let primeiraTela= document.getElementById("primeiraTela");


 function trocarParaTelaDeJogo(){
  primeiraTela.style.display = "none";
  telaDeJogo.style.display = "flex";
  ativarTelaDeJogo;
 };

ativarTelaDeJogo.addEventListener('click',trocarParaTelaDeJogo);
