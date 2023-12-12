$("document").ready(function () {
  $(".modo__escuro").click(function () {
    $(".cabecalho").toggleClass("cabecalho__escuro");
    $(".rodape").toggleClass("rodape__escuro");
    $("body").toggleClass("body__escuro");
    $(".artigo").toggleClass("artigo__escuro");
  });
});
