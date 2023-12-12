$("document").ready(function () {
  $("#adicionar").click(function () {
    var item = $("input[name='lista']").val();

    $("#lista").append(
      "<li> " + item + " <button class='remover'>Remover</button></li>"
    );

    $(".remover").click(function () {
      $(this).parent().remove();
    });
  });
});
