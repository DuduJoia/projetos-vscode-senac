const user = document.getElementById("usuario");
const btnEsquerda = document.getElementById("botao__esquerdo");
const btnDireita = document.getElementById("botao__direito");
const texto = document.getElementById("texto__usuario");

var textos = ["user","Jason","Ghost Face", "Michael Myers", "Freddy Krueger"]

var users =Array()
users[0] = "img/user.png"
users[1] = "img/jason.png"
users[2] = "img/ghostface.png"
users[3] = "img/michaelMyers.png"
users[4] = "img/freddyKrueger.png"

var cont = 0

btnDireita.addEventListener("click", function(){
    cont ++

    if(cont > 4){
        cont = 0
    }

    user.src = users[cont]

    texto.textContent = textos[cont]

})

btnEsquerda.addEventListener("click", function(){
    cont--
    user.src = "img/ghostFace";

    if(cont < 0){
        cont = 4
    }

    user.src = users[cont]
})