function toggleMenu() {
        var menu = document.querySelector('.menu');
        var hamburger = document.querySelector('.hamburger');

        // Alterna a classe 'open' para o menu e o ícone hambúrguer
        menu.classList.toggle('open');
        hamburger.classList.toggle('open');
    }

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('.menu a').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.menu').classList.remove('open');
            document.querySelector('.hamburger').classList.remove('open');
        });
    });

    function mostrarFilmes(filmeId) {
        // Esconde todas as divs de filmes
        const filmes = document.querySelectorAll('.filmes');
        filmes.forEach(filme => filme.classList.remove('active'));

        // Exibe a div correspondente ao botão clicado
        const filmeSelecionado = document.getElementById(filmeId);
        filmeSelecionado.classList.add('active');
    }

    // Exibe a primeira div (opcional)
    mostrarFilmes('filmes1');