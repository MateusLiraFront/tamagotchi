  let botaoComer = document.getElementsByClassName("comer")[0];
    
  let imagem = document.getElementById('spriteNormal');
        let statusTexto = document.getElementById('status');

        let imagemOriginalSrc = imagem.src;
        let novaImagemSrc = '/img/sprites/slime-respirando-mal.gif';

   
        function trocarParaNovaImagem() {
            imagem.src = novaImagemSrc;
            statusTexto.textContent = 'A imagem foi trocada automaticamente!';
            console.log('Imagem alterada após 30 segundos.');
        }

      
        function restaurarImagemOriginal() {
           
            imagem.src = imagemOriginalSrc;
            statusTexto.textContent = 'A imagem original foi restaurada!';
            console.log('Imagem restaurada pelo usuário.');

        }

      
        setTimeout(trocarParaNovaImagem, 3000); 
        botaoComer.addEventListener('click',restaurarImagemOriginal);