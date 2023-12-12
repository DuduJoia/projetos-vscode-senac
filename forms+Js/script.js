var btnEnviar = document.getElementById("botao__enviar");
var btnEmail = document.getElementById("verifica__email");
var btnCpf = document.getElementById("verifica__cpf")
var nome = document.getElementById("nome");
var cpf = document.getElementById("cpf");
var telefone = document.getElementById("telefone");
var email = document.getElementById("email");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
var numeral = document.getElementById("numeral")

btnEnviar.addEventListener("click", function () {
  if (
    nome.value == "" ||
    cpf.value == "" ||
    telefone.value == "" ||
    email.value == "" ||
    cidade.value == "" ||
    estado.value == ""
  ) {
    alert("Você deve preencher todos os campos");
  } else {
    alert("Formulário enviado com sucesso");
  }
});

numeral.addEventListener("keypress", somenteNumeros);

btnEmail.addEventListener("click", function () {
  let mail = document.getElementById("email").value;
  let cont = 0;

  for (let i = 0; i <= mail.length; i++) {
    if (mail.charAt(i) == "@" || mail.charAt(i) == ".") {
      cont++;
      alert(`mail.charAt(i)`);
    }
  }
  if (cont >= 2) {
    alert("email validado com sucesso");
    return true;
  } else {
    alert("Email inválido");
    return false;
  }
});

btnCpf.addEventListener("click", function() {
  let digito1 = 0;
  let digito2 = 0;
  for (let i = 1; i <= 9; i++) {
    let soma = 0;
    let multiplicador = 10;

    soma = cpf.charAt(i) * multiplicador;
    alert(soma);
    multiplicador --;
    digito1 = soma % 11;

  }
});

function somenteNumeros(e) {
			
  var charCode = (e.which) ? e.which : e.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
  e.preventDefault();
}

function formataCpf(cpf){
  const elementoAlvo = cpf
  const cpfAtual = cpf.value

  let cpfAtualizado;

  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
  function (regex, argumento1, argumento2, argumento3, argumento4){
    return argumento1 + '.' + argumento2 + '.' + argumento3 + "-" + argumento4;
  })
  elementoAlvo.value = cpfAtualizado;
}

function formataTelefone(telefone){
  const elementoAlvo = telefone
  const telefoneAtual = telefone.value

  let telefoneAtualizado;

  telefoneAtualizado = telefoneAtual.replace(/(\d{2})(\d{5})(\d{4})/,
  function(regex, argumento1, argumento2, argumento3){
    return '(' + argumento1 + ') ' + argumento2 + '-' + argumento3;
  })
  elementoAlvo.value = telefoneAtualizado;
}
