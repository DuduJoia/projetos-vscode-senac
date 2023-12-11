$(".modo__escuro").click(function(){
    $(".modo__escuro").addClass("hide")
    $(".cabecalho").addClass("cabecalho__escuro")
    $(".rodape").addClass("rodape__escuro")
    $("body").addClass("body__escuro")
    $(".artigo").addClass("artigo__escuro")
    $(".modo__claro").removeClass("hide")
})

$(".modo__claro").click(function(){
    $(".modo__claro").addClass("hide")
    $(".cabecalho").removeClass("cabecalho__escuro")
    $(".rodape").removeClass("rodape__escuro")
    $("body").removeClass("body__escuro")
    $(".artigo").removeClass("artigo__escuro")
    $(".modo__escuro").removeClass("hide")
})