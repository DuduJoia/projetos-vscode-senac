var botao = document.getElementById("botao__enviar");

botao.addEventListener("click",function(){
    var nome = document.getElementById("nome")
    var telefone = document.getElementById("telefone")
    var email = document.getElementById("email")
    var cidade = document.getElementById("cidade")
    var estado = document.getElementById("estado")

    if(nome.value == "" || telefone.value == "" || email.value == "" || cidade.value == "" || estado.value == ""){
        alert("Você deve preencher todos os campos");
    }
    else{
        alert("Formulário enviado com sucesso");
        nome.textContent = "";
    }
})