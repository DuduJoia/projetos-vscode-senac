    // obter referência para os elementos HTML
    const valorElemento = document.getElementById("valor");
    const aumentarBotao = document.getElementById("aumentar")
    const diminuirBotao = document.getElementById("diminuir")
    
    //inicializar a variável para rastear o valor
    
    let contador = 0;
    
    // função para aumentar o contador
    
    function aumentarContador() {
        contador++;
        valorElemento.textContent = contador;
    }
    
    // função para diminuir o contador
    function diminuirContador() {
        contador --;
        valorElemento.textContent = contador;
    }
    
    //adicionar manipuladores de eventos aos botões
    aumentarBotao.addEventListener("click", aumentarBotao);
    diminuirBotao.addEventListener("click", diminuirBotao);