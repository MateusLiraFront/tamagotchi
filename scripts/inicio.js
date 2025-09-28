let tamagotchiTelaDeInicio = document.getElementById("tamagotchi-oval");
let tamagotchiCostas = document.getElementById("tamagotchi-costas");

tamagotchiTelaDeInicio.id = "tela-de-inicio"

function trocarTamagotchiOval() {
  let tamagotchiFrente = document.createElement("img");

  tamagotchiFrente.src = 'img/sprites/tamagotchi-frente-reformatado.gif';
  
  tamagotchiFrente.id = "tamagotchi-frente";

  tamagotchiCostas.replaceWith(tamagotchiFrente);
}

tamagotchiTelaDeInicio.addEventListener('click', trocarTamagotchiOval);






const meuBotao = document.getElementById('botao-troca-tela-inicio');
const somDoClique = document.getElementById('som-botao');

  // Verifica se os elementos foram encontrados para evitar erros

    
    // Função que será chamada quando o botão for clicado
    function tocarSom() {
      // Reinicia o som para o início. Essencial para que funcione em cliques rápidos!
      somDoClique.currentTime = 0;
      
      // Toca o som
      somDoClique.play();
    }

    // Adiciona o "ouvinte" de evento de clique ao botão, que chama a função tocarSom
    meuBotao.addEventListener('click', tocarSom);
   