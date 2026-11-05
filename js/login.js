function entrar() {
  var email = document.getElementById("input_email").value;
  var senha = document.getElementById("input_senha").value;
  var mensagem = document.getElementById("mensagem");

  var posicao = buscarPosicaoPorEmail(email);

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