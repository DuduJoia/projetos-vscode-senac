$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("border-color", "yellow");
    });
    $("input").blur(function(){
        $(this).css("border-color", "green");
    })
})

$("#adiciona").click(function(){
    $("h1").addClass("estilo");
})

$("#remove").click(function(){
    $("h1").removeClass("estilo")
})

$("document").ready(function(){
    $("#animarBtn").click(function(){
        $("#animarDiv").animate({
            width: '200px',
            height: '200px',
            opacity: 0.5
        }, 1000)
    })
})

$(document).ready(function(){
    $("#enviarBtn").click(function(){
        var nome = $("input[name='nome']").val();
        $("#resultado").html("Olá, " + nome + "!");
    });
});