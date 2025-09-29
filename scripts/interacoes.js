  // 2. A função JavaScript
        /**
         * Troca a fonte de um elemento de imagem após um tempo específico.
         * @param {string} idDaImagem - O ID do elemento <img> a ser alterado.
         * @param {string} novoCaminhoDaImagem - O URL da nova imagem.
         * @param {300} tempoEmMs - O tempo em milissegundos para esperar antes de trocar.
         */
        function trocarImagemAposTempo(idDaImagem, novoCaminhoDaImagem, tempoEmMs) {
            setTimeout(() => {
                // Busca o elemento da imagem pelo ID
                const imagem = document.getElementById(idDaImagem);

                // Verifica se o elemento existe para evitar erros
                if (imagem) {
                    console.log(`Trocando a imagem para: ${novoCaminhoDaImagem}`);
                    imagem.src = novoCaminhoDaImagem;
                    imagem.alt = "Imagem Trocada"; // Boa prática: atualizar o texto alternativo também
                } else {
                    console.error(`Erro: Elemento com ID "${idDaImagem}" não encontrado.`);
                }
            }, tempoEmMs);
        }

        // 3. Chamando a função
        // Assim que a página carregar, a função será chamada e o cronômetro de 30 segundos começará.
        window.onload = function() {
            const id = 'imagemParaTrocar';
            const novaImagem = 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Imagem+Trocada!';
            const tempo = 30000; // 30 segundos

            console.log('Agendando a troca de imagem para daqui a 30 segundos...');
            trocarImagemAposTempo(id, novaImagem, tempo);
        };