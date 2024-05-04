
        /* O conteúdo dentro da função é o callback para o 'click'do botão.
        ou seja, ele só vai ser executado após o click do botão*/
$ (document).ready(function(){

    $('header button').click(function(e) {     // EM JQUERY SERIA ESCRITO DESSA FORMA
        $('form').slideDown();
    });

    $('#botao-cancelar').click (function(){
        $('form').slideUp();
    })

    // OUTRA FORMA DE ADICIONAR UM EVENTO A UM ELEMENTO É ATRAVEZ DA FUNÇÃO 'ON'

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src='${enderecoDaNovaImagem}'/>`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Quer ver imagem em tamanho real"> 
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });

});

