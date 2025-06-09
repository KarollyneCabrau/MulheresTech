document.getElementById("enviar").addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""
  ) {
    alert("Prontinho! Você receberá as novidades por email");
  } else {
    alert("Preenche os campos");
  }
}