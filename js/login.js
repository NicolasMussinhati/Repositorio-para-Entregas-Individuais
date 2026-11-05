function entrar() {
  let email = document.getElementById("input_email").value;
  let senha = document.getElementById("input_senha").value;
  let mensagem = document.getElementById("mensagem");

  let posicao = buscarPosicaoPorEmail(email);

  if (email == "" || senha == "") {
    mensagem.innerHTML = "Preencha e-mail e senha.";
  } else if (posicao == -1) {
    mensagem.innerHTML = "E-mail não cadastrado.";
  } else if (pegarSenha(posicao) != senha) {
    mensagem.innerHTML = "Senha incorreta.";
  } else {
    sessionStorage.NOME_USUARIO = pegarNome(posicao);
    sessionStorage.EMAIL_USUARIO = email;
    window.location = "dashboard.html";
  }
}