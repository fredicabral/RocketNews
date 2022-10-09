const botao_Enviar = document.querySelector(".botao_enviar");

botao_Enviar.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.querySelector("#email");

  if (email.value === "") {
    alert("O preenchimento do campo e-mail é obrigatório!");
  } else {
    alert("E-mail cadastrado com sucesso!");
  }
});
